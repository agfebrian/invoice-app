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
