interface Props {
  children: React.ReactNode
}

export const LayoutLabel: React.FC<Props> = ({ children }) => {
  return <div className="flex items-center justify-between">{children}</div>
}
