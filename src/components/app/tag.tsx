import { useContext } from "react"
import { ThemeContext } from "~/context"
import { IconDot } from "../icons"

interface Props {
  text: string
  color?: "success" | "warning" | "secondary"
}

const defaultProps: Props = {
  text: "Success",
  color: "success",
}

export const Tag: React.FC<Props> = ({ text, color }) => {
  const { darkMode } = useContext(ThemeContext)

  const colorize = () => {
    let result = ""
    switch (color) {
      case "success":
        result = "bg-success-01/[0.0571] text-success-01"
        break
      case "warning":
        result = "bg-warning-01/[0.0571] text-warning-01"
        break
      case "secondary":
        result = "bg-dark-09/[0.0571] text-dark-09 dark:text-light-05"
        break
    }
    return result
  }

  const colorTag = () => {
    let result = ""
    switch (color) {
      case "success":
        result = "#33D69F"
        break
      case "warning":
        result = "#FF8F00"
        break
      case "secondary":
        result = darkMode ? "#DFE3FA" : "#373B53"
        break
    }
    return result
  }

  return (
    <div
      className={`${colorize()} flex w-[104px] justify-center gap-2 rounded-md pb-3 pt-4`}
    >
      <IconDot color={colorTag()} />
      <p className="text-[15px] font-bold leading-[15px] tracking-[-0.25px]">
        {text}
      </p>
    </div>
  )
}

Tag.defaultProps = defaultProps
