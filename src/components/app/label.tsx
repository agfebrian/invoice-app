interface Props {
  text: string
  htmlFor: string
  visible?: boolean
  error?: string
}

export const Label: React.FC<Props> = ({
  text,
  htmlFor,
  visible = true,
  error,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${visible ? "visible" : "invisible"} ${
        error?.length ? "text-error-08" : "text-primary-07 dark:text-light-05"
      } text-[13px] font-medium leading-[15px] tracking-[-0.1px]`}
    >
      {text}
    </label>
  )
}
