import { NumericFormat } from "react-number-format"
import { Input } from "."

export const InputCurrency = ({ ...rest }) => {
  return <NumericFormat customInput={Input} {...rest} />
}
