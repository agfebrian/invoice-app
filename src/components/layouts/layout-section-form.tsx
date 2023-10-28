import { ReactNode } from "react"

interface Props {
  title?: string
  children: ReactNode
}

export const LayoutSectionForm: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-6">
      {title && (
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-primary-01">
          {title}
        </span>
      )}
      {children}
    </div>
  )
}
