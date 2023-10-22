interface Props {
  isOpen: boolean
  onClose?: () => void
}

export const Drawer: React.FC<Props> = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <div className="fixed inset-0 z-[5] h-full w-full">
        <div
          onClick={onClose}
          className="absolute inset-0 h-full w-full bg-black opacity-40"
        ></div>
        <div
          className={`absolute inset-0 h-full w-1/2 -translate-x-[200px] rounded-r-[20px] bg-white pb-8 pl-[159px] pr-[56px] pt-[59px] transition-all duration-300 ease-in-out ${
            isOpen && "translate-x-0"
          }`}
        >
          <h3 className="text-2xl font-bold tracking-[-0.5px] text-dark-08">
            New Invoice
          </h3>
        </div>
      </div>
    )
  }
  return null
}
