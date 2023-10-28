import { ReactNode } from "react"

interface Props {
  isOpen: boolean
  children: ReactNode
  onClose?: () => void
}

export const Drawer: React.FC<Props> = ({ isOpen, children, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? "visible" : "invisible"
      } fixed inset-0 z-[5] h-full w-full`}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black opacity-40 transition-colors"
      ></div>
      <div
        className={`relative flex h-full w-1/2 flex-col rounded-r-[20px] bg-white transition-all duration-300 ease-in-out dark:bg-dark-12 ${
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
