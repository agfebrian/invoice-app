import React from "react"

interface Props {
  onClick?: () => void
}

export const Overlay: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute inset-0 h-full w-full bg-black opacity-40 transition-colors"
    ></div>
  )
}
