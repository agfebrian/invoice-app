import { useEffect, useState } from "react"

export const useWideScreen = () => {
  const [wideScreen, setWideScreen] = useState<number>(window.innerWidth)

  const smallScreen = () => !(wideScreen > 523)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWideScreen(window.innerWidth)
    })

    return window.removeEventListener("resize", () => {})
  }, [wideScreen])

  return { wideScreen, setWideScreen, smallScreen }
}
