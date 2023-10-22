interface Props {
  label: string
  value: string
}

export const Field: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-[13px]">
      <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05">
        {label}
      </span>
      <span className="text-[15px] font-bold leading-5 tracking-[-0.25px] text-dark-08 dark:text-white">
        {value}
      </span>
    </div>
  )
}
