import { useState, useEffect } from "react"
import { IconDark, IconLight } from "../icons"

export const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const handleToggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    } else {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

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
