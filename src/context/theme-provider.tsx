import { useState, useEffect, ReactNode, createContext } from "react"

interface Theme {
  darkMode: boolean
  handleToggleDarkMode: () => void
}

export const ThemeContext = createContext<Theme>({} as Theme)

interface Props {
  children: ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const handleToggleDarkMode = () => {
    const theme = darkMode ? "light" : "dark"
    localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", !darkMode)
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const theme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-colors-scheme: dark)").matches)

    setDarkMode(theme)
    document.documentElement.classList.toggle("dark", theme)
  }, [])

  const provideContext = {
    darkMode,
    handleToggleDarkMode,
  }

  return (
    <ThemeContext.Provider value={provideContext}>
      {children}
    </ThemeContext.Provider>
  )
}
