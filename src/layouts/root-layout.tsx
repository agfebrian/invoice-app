import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { Logo, ToggleTheme } from "~/components/app"
import { useScrollToTop } from "~/hooks/use-scroll-to-top"

export const RootLayout = () => {
  const main = useRef(null)
  useScrollToTop(main.current!)

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      <div className="h-20 w-full lg:h-full lg:w-[103px]">
        <div className="fixed left-0 top-0 z-10 flex h-20 w-full flex-row rounded-none bg-dark-09 lg:h-full lg:w-[103px] lg:flex-col lg:rounded-r-[20px]">
          <Logo />
          <div className="ml-auto flex w-full flex-row justify-end lg:mt-auto lg:flex-col">
            <div className="flex h-20 w-[100px] items-center justify-center border-r border-r-[#494E6E] lg:h-[100px] lg:w-full lg:border-b lg:border-b-[#494E6E]">
              <ToggleTheme />
            </div>
            <div className="flex h-20 w-[100px] items-center justify-center lg:h-[100px] lg:w-full">
              <div className="h-10 w-10 rounded-full bg-light-11"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={main}
        className="relative inset-0 min-h-screen w-full flex-1 overflow-y-auto bg-light-11 pt-20 dark:bg-dark-12 lg:absolute lg:pt-0"
      >
        <Outlet />
      </div>
    </div>
  )
}
