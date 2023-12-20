import { useContext } from "react"
import { ThemeContext } from "~/context"
import { Button, Overlay } from "."

interface Props {
  isOpen: boolean
  title?: string
  description?: string
  isLoading?: boolean
  onClose?: () => void
  onApply: () => void
}

export const Modal: React.FC<Props> = ({
  isOpen,
  title,
  description,
  isLoading,
  onClose,
  onApply,
}) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={`
      ${isOpen ? "visible" : "invisible"}
      fixed inset-0 z-10 flex h-full w-full items-center justify-center shadow-xl
    `}
    >
      <Overlay />
      <div
        className={`
        ${isOpen ? "opacity-100" : "opacity-0"}
        ${isOpen ? "scale-100" : "scale-90"}
        relative flex
        h-[250px] w-[480px] flex-col rounded-lg bg-white px-12 pb-12 pt-[51px] transition-all dark:bg-dark-12
      `}
      >
        <h3 className="text-2xl font-bold leading-8 tracking-[-0.5px] text-dark-08 dark:text-white">
          {title ? title : "Confirm Deletion"}
        </h3>
        <p className="mb-[14px] mt-3 text-[13px] font-medium leading-[22px] tracking-[-0.1px] text-primary-06 dark:text-light-05">
          {description
            ? description
            : "Are you sure you want to delete invoice? This action cannot be undone."}
        </p>
        <div className="flex items-center justify-end gap-2">
          <Button color={darkMode ? "dark" : "secondary"} onClick={onClose}>
            Cancel
          </Button>
          <Button color="error" disabled={isLoading} onClick={onApply}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
