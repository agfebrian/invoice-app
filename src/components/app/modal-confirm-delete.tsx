import { useContext } from "react"
import { ThemeContext } from "~/context"
import { Button, Overlay } from "."

interface Props {
  isOpen: boolean
  title?: string
  description?: string
  width?: string
  isLoading?: boolean
  onClose?: () => void
  onApply: () => void
}

const DefaultProps = {
  width: "490px",
}

export const Modal: React.FC<Props> = ({
  isOpen,
  title,
  description,
  width,
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
          ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}
          relative flex
          h-fit flex-col rounded-lg bg-white px-8 py-9 transition-all dark:bg-dark-12 sm:h-[250px] sm:px-12 sm:pb-12 sm:pt-[51px]
        `}
        style={{ width: width }}
      >
        <h3 className="text-2xl font-bold leading-8 tracking-[-0.5px] text-dark-08 dark:text-white">
          {title || "Confirm Deletion"}
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

Modal.defaultProps = DefaultProps
