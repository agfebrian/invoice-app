interface Props {
  className?: string
}

export const IconChevronRight: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
    >
      <path d="M1 1L5 5L1 9" stroke="#7C5DFA" strokeWidth="2" />
    </svg>
  )
}
