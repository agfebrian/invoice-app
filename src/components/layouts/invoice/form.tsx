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
} from "~/components/app"
import { LayoutSectionForm, LayoutInput } from "../"
import { IconDelete } from "~/components/icons/icon-delete"

export const Form = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <>
      <div className="flex flex-1 flex-col gap-[46px] overflow-auto pb-8 pl-[159px] pr-[56px] pt-[59px]">
        <h3 className="text-2xl font-bold tracking-[-0.5px] text-dark-08 dark:text-white">
          New Invoice
        </h3>
        <LayoutSectionForm title="Bill From">
          <LayoutInput>
            <Label htmlFor="streetAddress" text="Street Address" />
            <Input id="streetAddress" placeholder="Street Address" />
          </LayoutInput>
          <div className="grid grid-cols-3 gap-6">
            <LayoutInput>
              <Label htmlFor="city" text="City" />
              <Input id="city" placeholder="City" />
            </LayoutInput>
            <LayoutInput>
              <Label htmlFor="postCode" text="Post Code" />
              <Input id="postCode" placeholder="Post Code" />
            </LayoutInput>
            <LayoutInput>
              <Label htmlFor="country" text="Country" />
              <Input id="country" placeholder="Country" />
            </LayoutInput>
          </div>
        </LayoutSectionForm>
        <LayoutSectionForm title="Bill To">
          <LayoutInput>
            <Label htmlFor="clientName" text="Client's Name" />
            <Input id="clientName" placeholder="Client's Name" />
          </LayoutInput>
          <LayoutInput>
            <Label htmlFor="clientEmail" text="Client's Email" />
            <Input
              id="clientEmail"
              type="email"
              placeholder="anthony@gmail.com"
            />
          </LayoutInput>
          <LayoutInput>
            <Label htmlFor="clientAddress" text="Street Address" />
            <Input id="clientAddress" placeholder="Street Address" />
          </LayoutInput>
        </LayoutSectionForm>
        <LayoutSectionForm>
          <div className="grid grid-cols-2 gap-6">
            <LayoutInput>
              <Label htmlFor="invoiceDate" text="Invoice Date" />
              <Input id="invoiceDate" />
            </LayoutInput>
            <LayoutInput>
              <Label htmlFor="paymentTerms" text="Payment Terms" />
              <Select value="Net 20 Days">
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
            <Label htmlFor="projectDescription" text="Project Description" />
            <Input id="projectDescription" placeholder="Project Description" />
          </LayoutInput>
        </LayoutSectionForm>
        <LayoutSectionForm>
          <span className="text-lg font-bold leading-8 tracking-[-0.375px] text-[#777F98]">
            Item List
          </span>
          <div className="grid grid-cols-11 gap-4">
            <div className="col-span-5">
              <LayoutInput>
                <Label htmlFor="itemName" text="Item Name" />
                <Input />
              </LayoutInput>
            </div>
            <div>
              <LayoutInput>
                <Label htmlFor="qty" text="QTY" />
                <Input />
              </LayoutInput>
            </div>
            <div className="col-span-2">
              <LayoutInput>
                <Label htmlFor="price" text="Price" />
                <Input />
              </LayoutInput>
            </div>
            <div className="col-span-2">
              <LayoutInput>
                <Label htmlFor="total" text="Total" />
                <Input />
              </LayoutInput>
            </div>
            <div className="h-full">
              <LayoutInput>
                <Label htmlFor="action" text="action" visible={false} />
                <div className="flex h-12 w-full items-center justify-center">
                  <button className="p-1 outline-none">
                    <IconDelete />
                  </button>
                </div>
              </LayoutInput>
            </div>
          </div>
          {darkMode ? (
            <Button color="dark" align="center">
              + Add New Item
            </Button>
          ) : (
            <Button color="secondary" align="center">
              + Add New Item
            </Button>
          )}
        </LayoutSectionForm>
      </div>
      <div className="flex rounded-r-[20px] bg-white py-[31px] pb-8 pl-[159px] pr-[56px] dark:bg-dark-12">
        <div className="ml-auto flex items-center gap-2">
          {darkMode ? (
            <Button color="dark">Cancel</Button>
          ) : (
            <Button color="secondary">Cancel</Button>
          )}
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  )
}
