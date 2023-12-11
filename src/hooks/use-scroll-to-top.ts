import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useScrollToTop = (el: HTMLDivElement) => {
  const { pathname } = useLocation()

  useEffect(() => el?.scrollTo(0, 0), [pathname, el])
}
