import React from "react"

interface Props {
  id: string
  name: string
  value: string
  checked?: boolean
  onChange: () => void
}

export const Checkbox: React.FC<Props> = ({
  id,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="relative flex h-4 w-4 items-center justify-center overflow-hidden rounded-sm">
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
        >
          <path
            d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      )}
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer absolute z-[5] h-full w-full cursor-pointer opacity-0"
      />
      <div className="absolute -z-[1] h-full w-full bg-light-05 transition-colors peer-checked:bg-primary-01 dark:bg-dark-03"></div>
    </div>
  )
}

Checkbox.defaultProps = {
  checked: false,
}
