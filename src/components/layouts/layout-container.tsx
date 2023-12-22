import { ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode
}

export const LayoutContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[730px] px-6 lg:px-12 xl:px-0 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  )
}
