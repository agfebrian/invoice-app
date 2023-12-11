import { Tag } from "~/components/app"

interface Props {
  status: "pending" | "draft" | "paid" | string
}

export const Status: React.FC<Props> = ({ status }) => {
  if (status === "paid") {
    return <Tag text="Paid" />
  } else if (status === "pending") {
    return <Tag text="Pending" color="warning" />
  } else {
    return <Tag text="Draft" color="secondary" />
  }
  return null
}
