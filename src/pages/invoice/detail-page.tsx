import { Link } from "react-router-dom"
import { LayoutDashboard, LayoutContainer } from "~/components/layouts"
import { IconChevronRight } from "~/components/icons"
import { Card, Tag, Button } from "~/components/app"
import { Field } from "~/components/layouts/invoice"

export const DetailPage = () => {
  return (
    <LayoutDashboard>
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
              <Tag text="Pending" color="warning" />
            </div>
            <div className="flex items-center gap-2">
              <Button color="dark">Edit</Button>
              <Button color="error">Delete</Button>
              <Button color="primary">Mark as Paid</Button>
            </div>
          </Card>
        </section>
        <section>
          <Card className="flex flex-col gap-[21px]">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-bold leading-6 tracking-[-0.25px] text-dark-08 dark:text-white">
                  <span className="text-primary-06">#</span>
                  <span>XM9141</span>
                </p>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  Graphic Design
                </span>
              </div>
              <div className="flex flex-col justify-end gap-2 text-end">
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  19 Union Terrace
                </span>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  London
                </span>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  E1 3EZ
                </span>
                <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                  United Kingdom
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col gap-[31px]">
                <Field label="Invoice Date" value="21 Aug 2021" />
                <Field label="Payment Due" value="20 Sep 2021" />
              </div>
              <div className="flex flex-col gap-[31px]">
                <Field label="Bill To" value="Alex Grim" />
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    84 Crunch Way
                  </span>
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    Bradford
                  </span>
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    BD1 9PB
                  </span>
                  <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
                    United Kingdom
                  </span>
                </div>
              </div>
              <div>
                <Field label="Send To" value="alexgrim@gmail.com" />
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
                <div className="grid grid-cols-5">
                  <div>
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
                      Banner Design
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center justify-end">
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-07 dark:text-light-05">
                      1
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-07 dark:text-light-05">
                      £ 156.00
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
                      £ 156.00
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-5">
                  <div>
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
                      Email Design
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center justify-end">
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-07 dark:text-light-05">
                      2
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-07 dark:text-light-05">
                      £ 200.00
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 dark:text-white">
                      £ 400.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-dark-09 px-8 pb-[21px] pt-[27px] dark:bg-dark-08">
                <span className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-white">
                  Amount Due
                </span>
                <span className="text-2xl font-bold tracking-[-0.5px] text-white">
                  £ 556.00
                </span>
              </div>
            </div>
          </Card>
        </section>
      </LayoutContainer>
    </LayoutDashboard>
  )
}
