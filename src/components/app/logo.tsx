import { IconLogo, IconBgLogo } from "../icons"

export const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <IconBgLogo />
      <div className="absolute z-10">
        <IconLogo />
      </div>
    </div>
  )
}
