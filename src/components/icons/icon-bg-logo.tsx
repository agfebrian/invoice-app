interface Props {
  width?: number | string
  height?: number | string
}

const defaultProps: Props = {
  width: 103,
  height: 103,
}

export const IconBgLogo: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 103 103"
      fill="none"
    >
      <path
        d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
        fill="#7C5DFA"
      />
      <mask
        id="mask0_0_8894"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="103"
        height="103"
      >
        <path
          d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_0_8894)">
        <path
          d="M103 52H20C8.95431 52 0 60.9543 0 72V135C0 146.046 8.95431 155 20 155H103V52Z"
          fill="#9277FF"
        />
      </g>
    </svg>
  )
}

IconBgLogo.defaultProps = defaultProps
