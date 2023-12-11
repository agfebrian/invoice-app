export const formatCurrency = (value: number): string => {
  if (typeof value !== "number") {
    value = 0
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value)
}
