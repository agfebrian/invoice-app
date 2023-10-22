import { ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode
}

export const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`rounded-lg bg-white px-8 py-5 shadow-sm shadow-[rgba(72_84_159_0.10)] ${className}`}
    >
      {children}
    </div>
  )
}
