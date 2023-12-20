import { useState } from "react"
import { Button, Overlay } from "."

interface Props {
  isOpen: boolean
  title?: string
  description?: string
  onClose?: () => void
  onApply: () => void
}

export const Modal: React.FC<Props> = ({
  isOpen,
  title,
  description,
  onClose,
  onApply,
}) => {
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    isOpen = false
    onClose && onClose()
  }

  const handleApply = () => {
    setLoading(true)
    onApply()
    setLoading(false)
  }

  return (
    <div
      className={`
      ${isOpen ? "visible" : "invisible"}
      fixed inset-0 z-10 flex h-full w-full items-center justify-center
    `}
    >
      <Overlay onClick={() => (isOpen = false)} />
      <div className="relative flex h-[250px] w-[480px] flex-col rounded-lg bg-white px-12 pb-12 pt-[51px] dark:bg-dark-12">
        <h3 className="text-2xl font-bold leading-8 tracking-[-0.5px] text-dark-08">
          {title ? title : "Confirm Deletion"}
        </h3>
        <p className="mb-[14px] mt-3 text-[13px] font-medium leading-[22px] tracking-[-0.1px] text-primary-06">
          {description
            ? description
            : "Are you sure you want to delete invoice? This action cannot be undone."}
        </p>
        <div className="flex items-center justify-end gap-2">
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="error" disabled={loading} onClick={handleApply}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
