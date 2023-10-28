interface Props {
  text: string
  htmlFor: string
  visible?: boolean
}

export const Label: React.FC<Props> = ({ text, htmlFor, visible = true }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${
        visible ? "visible" : "invisible"
      } text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-primary-07 dark:text-light-05`}
    >
      {text}
    </label>
  )
}
