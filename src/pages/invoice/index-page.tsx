import { LayoutDashboard, LayoutContainer } from "~/components/layouts"
import { Button, Card, Tag } from "~/components/app"
import { IconPlusCircle, IconChevronRight } from "~/components/icons"

export const IndexPage = () => {
  return (
    <LayoutDashboard>
      <section className="pt-[77px]">
        <LayoutContainer className="flex flex-col gap-16">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold leading-normal tracking-[-1.125px] text-dark-08">
                Invoices
              </h2>
              <p className="text-[13px] leading-[15px] tracking-[-0.1px] text-primary-06">
                There are 7 total invoices
              </p>
            </div>
            <Button icon>
              <IconPlusCircle />
              <p className="mt-[3px]">New Invoice</p>
            </Button>
          </div>
          <div className="flex flex-col gap-4 pb-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card
                key={item}
                className="flex items-center justify-between py-4 pl-8 pr-6"
              >
                <div className="flex items-center">
                  <p className="text-[15px] font-bold leading-[15px] tracking-[-0.25px]">
                    <span className="text-primary-07">#</span>
                    <span className="text-dark-08">RT3080</span>
                  </p>
                  <p className="ml-11 mr-[59px] text-[13px] font-medium leading-[15px] tracking-[-0.1px]">
                    <span className="mr-1 text-primary-06">Due</span>
                    <span className="text-primary-07">19 Aug 2021</span>
                  </p>
                  <p className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07">
                    Jensen Huang
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-center text-[15px] font-bold leading-6 tracking-[-0.25px] text-dark-08">
                    £ 1,800.90
                  </p>
                  <div className="ml-10 mr-5">
                    {item <= 2 ? (
                      <Tag text="Paid" />
                    ) : item > 2 && item <= 4 ? (
                      <Tag text="Pending" color="warning" />
                    ) : (
                      <Tag text="Draft" color="secondary" />
                    )}
                  </div>
                  <a href="#">
                    <IconChevronRight />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </LayoutContainer>
      </section>
    </LayoutDashboard>
  )
}