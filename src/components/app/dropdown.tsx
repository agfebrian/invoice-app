import { useState, ReactNode, useEffect, useRef } from "react"
import { IconChevronRight } from "../icons"

interface DropdownItemProps {
  children: ReactNode
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-[13px] pb-4 last:pb-0">
      {children}
    </div>
  )
}

interface DropdownProps {
  children: ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    window.addEventListener("click", (e: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false)
      }
    })

    return window.removeEventListener("click", () => {})
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="relative z-[4] flex items-center justify-center gap-[14px] p-3 text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 outline-none dark:text-white"
        onClick={toggle}
      >
        Filter by status
        <IconChevronRight
          className={`${
            isOpen ? "-rotate-90" : "rotate-90"
          } transition-transform`}
        />
      </button>
      <div
        className={`
          ${isOpen ? "opacity-100" : "opacity-0"}
          ${isOpen ? "scale-100" : "scale-95"}
          absolute w-full rounded-lg bg-white p-6 shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)] transition-all dark:bg-dark-04 dark:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)]
        `}
      >
        {children}
      </div>
    </div>
  )
}
