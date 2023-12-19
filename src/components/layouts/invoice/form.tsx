import { useContext } from "react"
import { ThemeContext } from "~/context"
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
  Button,
  DatePicker,
} from "~/components/app"
import { LayoutSectionForm, LayoutInput, LayoutLabel } from "../"
import { IconDelete } from "~/components/icons/icon-delete"

import * as yup from "yup"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { formatCurrency, randomNumber, randomString } from "~/utils"
import { NumericFormat } from "react-number-format"
import { postInvoice } from "~/api/invoce/invoice"
import { Invoice, Address } from "~/api/invoce/invoice.type"
import { addDays, format } from "date-fns"
import { useNavigate } from "react-router-dom"

const invoiceForm = yup.object({
  fromStreetAddress: yup.string().required("can't be empty"),
  fromCity: yup.string().required("can't be empty"),
  fromPostCode: yup.string().required("can't be empty"),
  fromCountry: yup.string().required("can't be empty"),
  clientName: yup.string().required("can't be empty"),
  clientEmail: yup
    .string()
    .email("email must be a falid")
    .required("can't be empty"),
  clientStreetAddress: yup.string().required("can't be empty"),
  clientCity: yup.string().required("can't be empty"),
  clientPostCode: yup.string().required("can't be empty"),
  clientCountry: yup.string().required("can't be empty"),
  invoiceDate: yup.date().required("can't be empty"),
  paymentTerms: yup.string().required("can't be empty"),
  description: yup.string().required("can't be empty"),
  items: yup
    .array(
      yup.object({
        name: yup.string().required("can't be empty"),
        quantity: yup.number().required("can't be empty"),
        price: yup
          .string()
          .typeError("Price must be a number")
          .required("can't be empty"),
        total: yup.number().required(),
      }),
    )
    .required(),
})
type InvoiceForm = yup.InferType<typeof invoiceForm>

const defaultValue: InvoiceForm = {
  fromStreetAddress: "",
  fromCity: "",
  fromPostCode: "",
  fromCountry: "",
  clientName: "",
  clientEmail: "",
  clientStreetAddress: "",
  clientCity: "",
  clientPostCode: "",
  clientCountry: "",
  invoiceDate: new Date(),
  paymentTerms: "Net 20 Days",
  description: "",
  items: [
    {
      name: "",
      quantity: 1,
      price: "0",
      total: 0,
    },
  ],
}

export const Form = () => {
  const navigate = useNavigate()
  const { darkMode } = useContext(ThemeContext)
  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<InvoiceForm>({
    mode: "all",
    resolver: yupResolver(invoiceForm),
    defaultValues: defaultValue,
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  })

  const addItemInvoice = () =>
    append({ name: "", quantity: 1, price: "0", total: 0 })

  const totalItemInvoice = (index: number) => {
    const qty = watch(`items.${index}.quantity`)
    let price = watch(`items.${index}.price`).toString()

    if (price) {
      price = price.replaceAll(",", "")
    }

    return qty * Number(price)
  }

  const onSubmit = async () => {
    const invoice = getValues()
    const id = `${randomString(2)}${randomNumber(4)}`.toUpperCase()
    const paymentTerms = invoice.paymentTerms.split(" ")[1]
    const paymentDue = format(
      addDays(invoice.invoiceDate, Number(paymentTerms)),
      "yyyy-MM-dd",
    )
    const createdAt = format(getValues("invoiceDate"), "yyyy-MM-dd")
    const senderAddress: Address = {
      street: invoice.fromStreetAddress,
      city: invoice.fromCity,
      country: invoice.fromCountry,
      postCode: invoice.fromPostCode,
    }
    const clientAddress: Address = {
      street: invoice.clientStreetAddress,
      city: invoice.clientCity,
      country: invoice.clientCountry,
      postCode: invoice.clientPostCode,
    }

    invoice.items!.map((item, index) => {
      setValue(`items.${index}.price`, item.price.replaceAll(",", ""))
      setValue(`items.${index}.total`, totalItemInvoice(index))
    })
    const mapTotalPricingInvoice = invoice.items!.map((item) => item.total)
    const sumTotalPricingInvoice = mapTotalPricingInvoice.reduce(
      (prev, next) => prev! + next!,
    )

    const payload: Invoice = {
      id,
      paymentDue,
      createdAt,
      senderAddress,
      clientAddress,
      paymentTerms: Number(paymentTerms),
      status: "pending",
      clientName: invoice.clientName,
      clientEmail: invoice.clientEmail,
      description: invoice.description,
      items: invoice.items,
      total: sumTotalPricingInvoice,
    }

    try {
      const res = await postInvoice(payload)
      if (res.status) {
        reset(defaultValue)
        setValue("invoiceDate", defaultValue.invoiceDate)
        setValue("paymentTerms", defaultValue.paymentTerms)
        navigate("/", { replace: true })
      }
    } catch (error) {
      throw new Error("Something went wrong")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative h-screen pb-8 pl-[159px] pr-[56px] pt-[59px]"
    >
      <div className="custom__scrollbar flex max-h-[85%] flex-1 flex-col gap-[46px] overflow-y-scroll pl-1 pr-6">
        <h3 className="text-2xl font-bold tracking-[-0.5px] text-dark-08 dark:text-white">
          New Invoice
        </h3>
        <LayoutSectionForm title="Bill From">
          <LayoutInput>
            <LayoutLabel
              showErrorMessage
              error={errors.fromStreetAddress?.message}
            >
              <Label
                htmlFor="streetAddress"
                text="Street Address"
                error={errors.fromStreetAddress?.message}
              />
            </LayoutLabel>
            <Input
              id="streetAddress"
              placeholder="Street Address"
              {...register("fromStreetAddress")}
              error={errors.fromStreetAddress?.message}
            />
          </LayoutInput>
          <div className="grid grid-cols-3 gap-6">
            <LayoutInput>
              <Label
                htmlFor="city"
                text="City"
                error={errors.fromCity?.message}
              />
              <Input
                id="city"
                placeholder="City"
                {...register("fromCity")}
                error={errors.fromCity?.message}
              />
            </LayoutInput>
            <LayoutInput>
              <Label
                htmlFor="postCode"
                text="Post Code"
                error={errors.fromPostCode?.message}
              />
              <Input
                id="postCode"
                placeholder="Post Code"
                {...register("fromPostCode")}
                error={errors.fromPostCode?.message}
              />
            </LayoutInput>
            <LayoutInput>
              <Label
                htmlFor="country"
                text="Country"
                error={errors.fromCountry?.message}
              />
              <Input
                id="country"
                placeholder="Country"
                {...register("fromCountry")}
                error={errors.fromCountry?.message}
              />
            </LayoutInput>
          </div>
        </LayoutSectionForm>
        <LayoutSectionForm title="Bill To">
          <LayoutInput>
            <LayoutLabel showErrorMessage error={errors.clientName?.message}>
              <Label
                htmlFor="clientName"
                text="Client's Name"
                error={errors.clientName?.message}
              />
            </LayoutLabel>
            <Input
              id="clientName"
              placeholder="Client's Name"
              {...register("clientName")}
              error={errors.clientName?.message}
            />
          </LayoutInput>
          <LayoutInput>
            <LayoutLabel showErrorMessage error={errors.clientEmail?.message}>
              <Label
                htmlFor="clientEmail"
                text="Client's Email"
                error={errors.clientEmail?.message}
              />
            </LayoutLabel>
            <Input
              id="clientEmail"
              type="email"
              placeholder="anthony@gmail.com"
              {...register("clientEmail")}
              error={errors.clientEmail?.message}
            />
          </LayoutInput>
          <LayoutInput>
            <LayoutLabel
              showErrorMessage
              error={errors.clientStreetAddress?.message}
            >
              <Label
                htmlFor="clientAddress"
                text="Street Address"
                error={errors.clientStreetAddress?.message}
              />
            </LayoutLabel>
            <Input
              id="clientAddress"
              placeholder="Street Address"
              {...register("clientStreetAddress")}
              error={errors.clientStreetAddress?.message}
            />
          </LayoutInput>
          <div className="grid grid-cols-3 gap-6">
            <LayoutInput>
              <Label
                htmlFor="clientCity"
                text="City"
                error={errors.clientCity?.message}
              />
              <Input
                id="clientCity"
                placeholder="City"
                {...register("clientCity")}
                error={errors.clientCity?.message}
              />
            </LayoutInput>
            <LayoutInput>
              <Label
                htmlFor="clientPostCode"
                text="Post Code"
                error={errors.clientPostCode?.message}
              />
              <Input
                id="clientPostCode"
                placeholder="Post Code"
                {...register("clientPostCode")}
                error={errors.clientPostCode?.message}
              />
            </LayoutInput>
            <LayoutInput>
              <Label
                htmlFor="clientCountry"
                text="Country"
                error={errors.clientCountry?.message}
              />
              <Input
                id="clientCountry"
                placeholder="Country"
                {...register("clientCountry")}
                error={errors.clientCountry?.message}
              />
            </LayoutInput>
          </div>
        </LayoutSectionForm>
        <LayoutSectionForm>
          <div className="grid grid-cols-2 gap-6">
            <LayoutInput>
              <Label htmlFor="invoiceDate" text="Invoice Date" />
              <DatePicker
                initialValue={getValues("invoiceDate")}
                setDate={(val) => setValue("invoiceDate", val)}
              />
            </LayoutInput>
            <LayoutInput>
              <Label htmlFor="paymentTerms" text="Payment Terms" />
              {/* <Input className="hidden" {...register("paymentTerms")} /> */}
              <Select
                defaultValue={getValues("paymentTerms")}
                onValueChange={(value) => setValue("paymentTerms", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Payment Terms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Net 20 Days">Net 20 Days</SelectItem>
                  <SelectItem value="Net 30 Days">Net 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </LayoutInput>
          </div>
          <LayoutInput>
            <LayoutLabel showErrorMessage error={errors.description?.message}>
              <Label
                htmlFor="description"
                text="Project Description"
                error={errors.description?.message}
              />
            </LayoutLabel>
            <Input
              id="description"
              placeholder="Project Description"
              {...register("description")}
              error={errors.description?.message}
            />
          </LayoutInput>
        </LayoutSectionForm>
        <LayoutSectionForm>
          <span className="text-lg font-bold leading-8 tracking-[-0.375px] text-[#777F98]">
            Item List
          </span>
          {fields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <LayoutInput>
                  <LayoutLabel>
                    <Label
                      htmlFor={`itemName${index}`}
                      text="Item Name"
                      error={errors.items?.[index]?.name?.message}
                    />
                    <span className="text-[13px] font-medium leading-[15px] text-error-08">
                      {errors.items?.[index]?.name?.message}
                    </span>
                  </LayoutLabel>
                  <Input
                    id={`itemName${index}`}
                    {...register(`items.${index}.name`)}
                    error={errors.items?.[index]?.name?.message}
                  />
                </LayoutInput>
              </div>
              <div className="col-span-2">
                <LayoutInput>
                  <Label
                    htmlFor={`qty${index}`}
                    text="QTY"
                    error={errors.items?.[index]?.quantity?.message}
                  />
                  <Input
                    id={`qty${index}`}
                    type="number"
                    min={1}
                    className="pr-1"
                    {...register(`items.${index}.quantity`)}
                    error={errors.items?.[index]?.quantity?.message}
                  />
                </LayoutInput>
              </div>
              <div className="col-span-2">
                <LayoutInput>
                  <Label
                    htmlFor={`price${index}`}
                    text="Price"
                    error={errors.items?.[index]?.price?.message}
                  />
                  <Controller
                    name={`items.${index}.price`}
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <NumericFormat
                        id={`price${index}`}
                        getInputRef={ref}
                        thousandSeparator=","
                        decimalSeparator="."
                        decimalScale={2}
                        fixedDecimalScale
                        error={errors.items?.[index]?.price?.message}
                        customInput={Input}
                        {...rest}
                      />
                    )}
                  />
                  <span className="text-red-500">
                    {errors.items?.[index]?.price?.message}
                  </span>
                </LayoutInput>
              </div>
              <div className="col-span-2">
                <LayoutInput>
                  <Label htmlFor="total" text="Total" />
                  <div className="flex h-[48px] items-center">
                    <span className="mt-1 text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-06">
                      {formatCurrency(totalItemInvoice(index), false)}
                    </span>
                  </div>
                </LayoutInput>
              </div>
              <div className="h-full">
                <LayoutInput>
                  <Label htmlFor="action" text="action" visible={false} />
                  <div className="flex h-12 w-full items-center justify-center">
                    <button
                      disabled={index == 0}
                      className={`${
                        index == 0 ? "opacity-30" : "opacity-100"
                      } p-1 outline-none`}
                      onClick={() => remove(index)}
                    >
                      <IconDelete />
                    </button>
                  </div>
                </LayoutInput>
              </div>
            </div>
          ))}
          <Button
            color={darkMode ? "dark" : "secondary"}
            align="center"
            onClick={addItemInvoice}
          >
            + Add New Item
          </Button>
        </LayoutSectionForm>
      </div>
      <div className="fixed bottom-0 left-0 z-10 flex w-full rounded-r-[20px] bg-white py-[31px] pb-8 pl-[159px] pr-[56px] shadow-2xl dark:bg-dark-12">
        <Button color="secondary">Discard</Button>
        <div className="ml-auto flex items-center gap-2">
          <Button color="dark">Save as Draft</Button>
          <Button type="submit">Save & Send</Button>
        </div>
      </div>
    </form>
  )
}
