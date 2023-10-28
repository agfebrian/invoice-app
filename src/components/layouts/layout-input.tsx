import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const LayoutInput: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>
}
