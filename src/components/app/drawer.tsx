import { ReactNode, useContext } from "react"
import { DrawerContext } from "~/context"
import { Overlay } from "."

interface Props {
  children: ReactNode
}

export const Drawer: React.FC<Props> = ({ children }) => {
  const { isOpen, close } = useContext(DrawerContext)

  return (
    <div
      className={`${
        isOpen ? "visible" : "invisible"
      } fixed inset-0 z-[5] h-full w-full`}
    >
      <Overlay onClick={close} />
      <div
        className={`relative flex h-full w-full flex-col rounded-r-[20px] bg-white transition-all duration-300 ease-in-out dark:bg-dark-12 sm:w-[80%] lg:w-[80%] xl:w-1/2 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-[200px] opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}
