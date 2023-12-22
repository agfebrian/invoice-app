import { IconLogo, IconBgLogo } from "../icons"
import { useWideScreen } from "~/hooks"

export const Logo = () => {
  const { wideScreen } = useWideScreen()

  const sizeBgLogo = wideScreen > 1023 ? 108 : 80

  return (
    <div className="flex items-center justify-center">
      <IconBgLogo width={sizeBgLogo} height={sizeBgLogo} />
      <div className="absolute z-10">
        <IconLogo />
      </div>
    </div>
  )
}
