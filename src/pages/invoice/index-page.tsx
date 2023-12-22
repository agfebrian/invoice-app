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
import { useWideScreen } from "~/hooks"

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

  const { smallScreen } = useWideScreen()

  const dropdownFilter = (
    <Dropdown width={smallScreen() ? "130px" : "170px"}>
      <DropdownItem>
        <Checkbox
          id="draft"
          name="status"
          value="draft"
          checked={selectedFilterStatus["draft"]}
          onChange={() =>
            onCheckSelectedFilter("draft", !selectedFilterStatus["draft"])
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
            onCheckSelectedFilter("pending", !selectedFilterStatus["pending"])
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
            onCheckSelectedFilter("paid", !selectedFilterStatus["paid"])
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
  )

  const invoiceList = invoices.map((item) => (
    <Link to={`/invoice/${item.id}`}>
      <Card
        key={item.id}
        className="flex items-center justify-between border border-light-04 p-6 hover:border-primary-01 dark:border-dark-03 dark:hover:border-primary-01 sm:py-4 sm:pl-8 sm:pr-6"
      >
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <p className="text-[15px] font-bold leading-[15px] tracking-[-0.25px]">
            <span className="text-primary-07">#</span>
            <span className="text-dark-08 dark:text-white">{item.id}</span>
          </p>
          <p className="mb-2 ml-0 mr-[59px] mt-6 text-[13px] font-medium leading-[15px] tracking-[-0.1px] sm:my-0 sm:ml-11">
            <span className="mr-1 text-primary-06 dark:text-light-05">Due</span>
            <span className="text-primary-07 dark:text-light-05">
              {format(new Date(item.paymentDue), "dd MMM yyyy")}
            </span>
          </p>
          <p className="hidden text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-white sm:block">
            {item.clientName}
          </p>
          <p className="block text-center text-[15px] font-bold leading-6 tracking-[-0.25px] text-dark-08 dark:text-white sm:hidden">
            {formatCurrency(item.total)}
          </p>
        </div>
        <div className="flex flex-col items-end sm:flex-row sm:items-center">
          <p className="hidden text-center text-[15px] font-bold leading-6 tracking-[-0.25px] text-dark-08 dark:text-white sm:block">
            {formatCurrency(item.total)}
          </p>
          <p className="block text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-white sm:hidden">
            {item.clientName}
          </p>
          <div className="mx-0 mt-6 sm:ml-10 sm:mr-5 sm:mt-0">
            <Status status={item.status} />
          </div>
          <div className="hidden sm:block">
            <IconChevronRight />
          </div>
        </div>
      </Card>
    </Link>
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
              <h1 className="text-2xl font-bold leading-normal tracking-[-1.125px] text-dark-08 dark:text-white sm:text-3xl">
                Invoices
              </h1>
              <p className="text-[13px] leading-[15px] tracking-[-0.1px] text-primary-06 dark:text-light-05">
                {smallScreen() ? (
                  <span>{invoices.length} invoices</span>
                ) : (
                  <span>There are {invoices.length} total invoices</span>
                )}
              </p>
            </div>
            <div className="ml-auto flex items-center">
              {dropdownFilter}
              <Button icon onClick={open}>
                <IconPlusCircle />
                <p className="mt-[3px]">
                  {smallScreen() ? "New" : "New Invoice"}
                </p>
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
