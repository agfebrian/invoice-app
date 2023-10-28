import { useContext } from "react"
import { ThemeContext } from "~/context"
import { IconDark, IconLight } from "../icons"

export const ToggleTheme = () => {
  const { darkMode, handleToggleDarkMode } = useContext(ThemeContext)

  return (
    <button
      className="flex items-center justify-center p-1 outline-none"
      onClick={handleToggleDarkMode}
    >
      <span
        className={`absolute transition-all duration-100 ease-in-out ${
          !darkMode ? "z-10 opacity-100" : "z-0 opacity-0"
        }`}
      >
        <IconDark />
      </span>
      <span
        className={`absolute transition-all duration-100 ease-in-out ${
          darkMode ? "z-10 opacity-100" : "z-0 opacity-0"
        }`}
      >
        <IconLight />
      </span>
    </button>
  )
}
