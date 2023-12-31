import { useContext } from "react"
import { toast } from "react-toastify"
import { ThemeContext } from "~/context"

export const useToast = () => {
  const { darkMode } = useContext(ThemeContext)

  const toastSuccess = (message: string) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "light",
    })
  }

  const toastError = (message: string) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "light",
    })
  }

  return {
    toastSuccess,
    toastError,
  }
}
