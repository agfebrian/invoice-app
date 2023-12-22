import { useState, ReactNode, useEffect, useRef } from "react"
import { IconChevronRight } from "../icons"
import { useWideScreen } from "~/hooks"

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
  width?: string
  children: ReactNode
}

const DefaultDropdownProps = {
  width: "170px",
}

export const Dropdown: React.FC<DropdownProps> = ({ width, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)

  const { smallScreen } = useWideScreen()

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
    <div ref={dropdownRef} className="relative" style={{ width: width }}>
      <button
        className="relative z-[4] mx-auto flex items-center justify-center gap-[14px] p-3 text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 outline-none dark:text-white"
        onClick={toggle}
      >
        {smallScreen() ? "Filter" : "Filter by status"}
        <IconChevronRight
          className={`${
            isOpen ? "-rotate-90" : "rotate-90"
          } transition-transform`}
        />
      </button>
      <div
        className={`
          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
          ${isOpen ? "scale-100" : "scale-95"}
          absolute w-full rounded-lg bg-white p-6 shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)] transition-all dark:bg-dark-04 dark:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)]
        `}
      >
        {children}
      </div>
    </div>
  )
}

Dropdown.defaultProps = DefaultDropdownProps
