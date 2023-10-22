import { ReactNode } from "react"

interface Props {
  type?: "button" | "submit" | "reset"
  color?: "primary" | "secondary" | "error" | "dark"
  icon?: boolean
  iconPosition?: "left" | "right"
  onClick?: () => void
  children: ReactNode
}

const defaultProps: Props = {
  type: "button",
  color: "primary",
  children: "Button",
  icon: false,
  iconPosition: "left",
}

export const Button: React.FC<Props> = ({
  type,
  color,
  icon,
  iconPosition,
  onClick,
  children,
}) => {
  const colorize = () => {
    let result: string = ""
    switch (color) {
      case "primary":
        result = "bg-primary-01 text-white hover:bg-primary-02"
        break
      case "secondary":
        result = "bg-light-04 text-primary-07 hover:bg-light-05"
        break
      case "error":
        result = "bg-error-08 text-white hover:bg-error-10"
        break
      case "dark":
        result = "bg-dark-09 text-light-05 hover:text-primary-06"
        break
    }
    return result
  }

  const showIcon = () => {
    let result: string = "px-6"
    if (icon && iconPosition == "left") result = "pl-2 pr-6 gap-4"
    else if (icon && iconPosition == "right") result = "pr-2 pl-6 gap-4"
    return result
  }

  return (
    <button
      type={type}
      className={`${colorize()} ${showIcon()} flex h-12 items-center rounded-3xl text-[15px] font-bold leading-[15px] tracking-[-0.25px] outline-none transition`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps
