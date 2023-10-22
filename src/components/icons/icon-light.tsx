interface Props {
  color?: string
}

const defaultProps: Props = {
  color: "#858BB2",
}

export const IconLight: React.FC<Props> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M5.81724 0.899658C3.1055 0.899658 0.899414 3.10618 0.899414 5.81792C0.899414 8.52966 3.1055 10.7362 5.81724 10.7362C8.52854 10.7362 10.7351 8.53009 10.7351 5.81792C10.7351 3.10575 8.52854 0.899658 5.81724 0.899658Z"
        fill={color}
      />
    </svg>
  )
}

IconLight.defaultProps = defaultProps
