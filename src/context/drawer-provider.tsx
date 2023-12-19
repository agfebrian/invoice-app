import { ReactNode, useState, createContext } from "react"

interface Drawer {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const DrawerContext = createContext<Drawer>({} as Drawer)

interface Props {
  children: ReactNode
}

export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = () => setIsOpen(true)

  const close = () => setIsOpen(false)

  const provideContext = {
    isOpen,
    open,
    close,
  }

  return (
    <DrawerContext.Provider value={provideContext}>
      {children}
    </DrawerContext.Provider>
  )
}
