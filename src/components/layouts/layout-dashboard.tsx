import { ReactNode } from "react"
import { Logo } from "../app"
import { IconDark } from "../icons"

interface Props {
  children: ReactNode
}

export const LayoutDashboard: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[103px]">
        <div className="fixed left-0 top-0 flex h-full w-[103px] flex-col rounded-r-[20px] bg-dark-09">
          <Logo />
          <div className="mt-auto w-full">
            <div className="flex h-[100px] w-full items-center justify-center border-b border-b-[#494E6E]">
              <button className="p-1 outline-none">
                <IconDark />
              </button>
            </div>
            <div className="flex h-[100px] w-full items-center justify-center border-b border-b-[#494E6E]">
              <div className="h-10 w-10 rounded-full bg-light-11"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex-1 overflow-y-auto bg-light-11">
        {children}
      </div>
    </div>
  )
}
