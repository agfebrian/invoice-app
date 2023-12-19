interface Props {
  showErrorMessage?: boolean
  error?: string
  children: React.ReactNode
}

export const LayoutLabel: React.FC<Props> = ({
  showErrorMessage,
  error,
  children,
}) => {
  return (
    <div className="flex items-center justify-between">
      {children}
      {showErrorMessage && (
        <span className="text-[13px] font-medium leading-[15px] text-error-08">
          {error}
        </span>
      )}
    </div>
  )
}
