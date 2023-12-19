import { useContext } from "react"
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import { DrawerContext } from "~/context"
import { LayoutContainer } from "~/components/layouts"
import { IconChevronRight } from "~/components/icons"
import { Card, Button, Drawer } from "~/components/app"
import { Field, Status, Form } from "~/components/layouts/invoice"
import { getInvoice } from "~/api/invoce/invoice"
import { format } from "date-fns"
import { formatCurrency } from "~/utils"

import type { Invoice } from "~/api/invoce/invoice.type"

type Params = {
  id: string
}

export const detailLoader = async ({ params }: LoaderFunctionArgs<Params>) => {
  const res = await getInvoice(params.id as string)
  if (!res.status) {
    throw new Response("Not Found")
  }
  return res.data
}

export const DetailPage = () => {
  const { open } = useContext(DrawerContext)
  const invoice = useLoaderData() as Invoice

  const itemsOrder = invoice.items.map((item, index) => (
    <div key={index} className="grid grid-cols-5">
      <div>
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
          {item.name}
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-07 dark:text-light-05">
          {item.quantity}
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-07 dark:text-light-05">
          {formatCurrency(item.price as number)}
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
          {formatCurrency(item.total as number)}
        </span>
      </div>
    </div>
  ))

  const form = (
    <Form
      isUpdate={true}
      data={{
        fromStreetAddress: invoice.senderAddress.street,
        fromCity: invoice.senderAddress.city,
        fromCountry: invoice.senderAddress.country,
        fromPostCode: invoice.senderAddress.postCode,
        clientStreetAddress: invoice.clientAddress.street,
        clientCity: invoice.clientAddress.city,
        clientCountry: invoice.clientAddress.country,
        clientPostCode: invoice.clientAddress.postCode,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        invoiceDate: new Date(invoice.createdAt),
        paymentTerms: `Net ${invoice.paymentTerms} Days`,
        description: invoice.description,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items: invoice.items as any,
      }}
    />
  )

  return (
    <>
      <Drawer>{form}</Drawer>
      <LayoutContainer className="mb-[77px] flex flex-col gap-6 pt-[77px]">
        <Link to="/" className="flex items-center gap-6">
          <IconChevronRight className="rotate-180" />
          <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
            Go Back
          </span>
        </Link>
        <section>
          <Card className="flex justify-between">
            <div className="flex items-center gap-5">
              <p className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-[#858BB2] dark:text-light-05">
                Status
              </p>
              <Status status={invoice.status} />
            </div>
            <div className="flex items-center gap-2">
              <Button color="dark" onClick={open}>
                Edit
              </Button>
              <Button color="error">Delete</Button>
              <Button color="primary" disabled={invoice.status === "paid"}>
                Mark as Paid
              </Button>
            </div>
          </Card>
        </section>
        <section>
          <Card className="flex flex-col gap-[21px]">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-bold leading-6 tracking-[-0.25px] text-dark-08 dark:text-white">
                  <span className="text-primary-06">#</span>
                  <span>{invoice.id}</span>
                </p>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  {invoice.description}
                </span>
              </div>
              <div className="flex flex-col justify-end gap-2 text-end">
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  {invoice.senderAddress.street}
                </span>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  {invoice.senderAddress.city}
                </span>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  {invoice.senderAddress.postCode}
                </span>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  {invoice.senderAddress.country}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col gap-[31px]">
                <Field
                  label="Invoice Date"
                  value={format(new Date(invoice.createdAt), "dd MMM yyyy")}
                />
                <Field
                  label="Payment Due"
                  value={format(new Date(invoice.paymentDue), "dd MMM yyyy")}
                />
              </div>
              <div className="flex flex-col gap-[31px]">
                <Field label="Bill To" value={invoice.clientName} />
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    {invoice.clientAddress.street}
                  </span>
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    {invoice.clientAddress.city}
                  </span>
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    {invoice.clientAddress.postCode}
                  </span>
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    {invoice.clientAddress.country}
                  </span>
                </div>
              </div>
              <div>
                <Field label="Send To" value={invoice.clientEmail} />
              </div>
            </div>
            <div className="mt-[21px] overflow-hidden rounded-lg">
              <div className="flex flex-col gap-8 bg-light-04 px-8 pb-[39px] pt-[32px] dark:bg-dark-04">
                <div className="grid grid-cols-5">
                  <div>
                    <span className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                      Item Name
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center justify-end">
                    <span className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                      QTY.
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                      Price
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                      Total
                    </span>
                  </div>
                </div>
                {itemsOrder}
              </div>
              <div className="flex items-center justify-between bg-dark-09 px-8 pb-[21px] pt-[27px] dark:bg-dark-08">
                <span className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-white">
                  Amount Due
                </span>
                <span className="text-2xl font-bold tracking-[-0.5px] text-white">
                  {formatCurrency(invoice.total)}
                </span>
              </div>
            </div>
          </Card>
        </section>
      </LayoutContainer>
    </>
  )
}
