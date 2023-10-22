import { ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode
}

export const LayoutContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`mx-auto w-full max-w-[730px] ${className ?? ""}`}>
      {children}
    </div>
  )
}
