import { ReactNode } from "react"
import { Logo } from "../app"
import { ToggleTheme } from "../app"

interface Props {
  children: ReactNode
}

export const LayoutDashboard: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[103px]">
        <div className="fixed left-0 top-0 z-10 flex h-full w-[103px] flex-col rounded-r-[20px] bg-dark-09">
          <Logo />
          <div className="mt-auto w-full">
            <div className="flex h-[100px] w-full items-center justify-center border-b border-b-[#494E6E]">
              <ToggleTheme />
            </div>
            <div className="flex h-[100px] w-full items-center justify-center border-b border-b-[#494E6E]">
              <div className="h-10 w-10 rounded-full bg-light-11"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 min-h-screen w-full flex-1 overflow-y-auto bg-light-11 dark:bg-dark-12">
        {children}
      </div>
    </div>
  )
}
