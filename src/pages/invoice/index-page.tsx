import { LayoutContainer } from "~/components/layouts"
import { Form, Status } from "~/components/layouts/invoice"
import {
  Button,
  Card,
  Drawer,
  Dropdown,
  DropdownItem,
  Checkbox,
} from "~/components/app"
import { IconPlusCircle, IconChevronRight } from "~/components/icons"
import { useContext, useEffect, useState } from "react"
import {
  Link,
  useLoaderData,
  createSearchParams,
  useSearchParams,
  LoaderFunctionArgs,
} from "react-router-dom"
import { getInvoices } from "~/api/invoce/invoice"
import { format } from "date-fns"
import { formatCurrency } from "~/utils"
import { LayoutEmptyState } from "~/components/layouts/layout-empty-state"

import type { Invoice } from "~/api/invoce/invoice.type"
import { DrawerContext } from "~/context"

export const indexLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)

  const res = await getInvoices({
    draft: Boolean(Number(url.searchParams.get("draft"))),
    pending: Boolean(Number(url.searchParams.get("pending"))),
    paid: Boolean(Number(url.searchParams.get("paid"))),
  })
  if (!res.status) {
    throw new Response("Not Found")
  }
  return res.data
}

export const IndexPage = () => {
  const { open } = useContext(DrawerContext)
  const invoices = useLoaderData() as Invoice[]

  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedFilterStatus, setSelectedFilterStatus] = useState<{
    draft: boolean
    pending: boolean
    paid: boolean
  }>({ draft: false, pending: false, paid: false })
  const onCheckSelectedFilter = (key: string, value: boolean) => {
    const objUpdated = { ...selectedFilterStatus, [key]: value }
    setSelectedFilterStatus(objUpdated)

    setSearchParams(
      createSearchParams([
        ["draft", `${objUpdated["draft"] ? 1 : 0}`],
        ["pending", `${objUpdated["pending"] ? 1 : 0}`],
        ["paid", `${objUpdated["paid"] ? 1 : 0}`],
      ]),
    )
  }

  useEffect(() => {
    setSelectedFilterStatus({
      draft: Boolean(Number(searchParams.get("draft"))),
      pending: Boolean(Number(searchParams.get("pending"))),
      paid: Boolean(Number(searchParams.get("paid"))),
    })
  }, [searchParams])

  const invoiceList = invoices.map((item) => (
    <Card
      key={item.id}
      className="flex items-center justify-between py-4 pl-8 pr-6"
    >
      <div className="flex items-center">
        <p className="text-[15px] font-bold leading-[15px] tracking-[-0.25px]">
          <span className="text-primary-07">#</span>
          <span className="text-dark-08 dark:text-white">{item.id}</span>
        </p>
        <p className="ml-11 mr-[59px] text-[13px] font-medium leading-[15px] tracking-[-0.1px]">
          <span className="mr-1 text-primary-06 dark:text-light-05">Due</span>
          <span className="text-primary-07 dark:text-light-05">
            {format(new Date(item.paymentDue), "dd MMM yyyy")}
          </span>
        </p>
        <p className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-white">
          {item.clientName}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-center text-[15px] font-bold leading-6 tracking-[-0.25px] text-dark-08 dark:text-white">
          {formatCurrency(item.total)}
        </p>
        <div className="ml-10 mr-5">
          <Status status={item.status} />
        </div>
        <Link
          to={`/invoice/${item.id}`}
          className="rounded-full p-2 hover:bg-primary-01/20"
        >
          <IconChevronRight />
        </Link>
      </div>
    </Card>
  ))

  return (
    <>
      <Drawer>
        <Form />
      </Drawer>
      <section className="pt-[77px]">
        <LayoutContainer className="flex flex-col gap-16">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold leading-normal tracking-[-1.125px] text-dark-08 dark:text-white">
                Invoices
              </h1>
              <p className="text-[13px] leading-[15px] tracking-[-0.1px] text-primary-06 dark:text-light-05">
                There are {invoices.length} total invoices
              </p>
            </div>
            <div className="ml-auto flex items-center gap-10">
              <Dropdown>
                <DropdownItem>
                  <Checkbox
                    id="draft"
                    name="status"
                    value="draft"
                    checked={selectedFilterStatus["draft"]}
                    onChange={() =>
                      onCheckSelectedFilter(
                        "draft",
                        !selectedFilterStatus["draft"],
                      )
                    }
                  />
                  <label
                    htmlFor="draft"
                    className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 hover:cursor-pointer dark:text-white"
                  >
                    Draft
                  </label>
                </DropdownItem>
                <DropdownItem>
                  <Checkbox
                    id="pending"
                    name="status"
                    value="pending"
                    checked={selectedFilterStatus["pending"]}
                    onChange={() =>
                      onCheckSelectedFilter(
                        "pending",
                        !selectedFilterStatus["pending"],
                      )
                    }
                  />
                  <label
                    htmlFor="pending"
                    className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 hover:cursor-pointer dark:text-white"
                  >
                    Pending
                  </label>
                </DropdownItem>
                <DropdownItem>
                  <Checkbox
                    id="paid"
                    name="status"
                    value="paid"
                    checked={selectedFilterStatus["paid"]}
                    onChange={() =>
                      onCheckSelectedFilter(
                        "paid",
                        !selectedFilterStatus["paid"],
                      )
                    }
                  />
                  <label
                    htmlFor="paid"
                    className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 hover:cursor-pointer dark:text-white"
                  >
                    Paid
                  </label>
                </DropdownItem>
              </Dropdown>
              <Button icon onClick={open}>
                <IconPlusCircle />
                <p className="mt-[3px]">New Invoice</p>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-16">
            {invoices.length ? invoiceList : <LayoutEmptyState />}
          </div>
        </LayoutContainer>
      </section>
    </>
  )
}
