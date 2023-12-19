export const formatCurrency = (
  value: number,
  currency: boolean = true,
): string => {
  if (typeof value !== "number") {
    value = 0
  }

  const options = currency ? { style: "currency", currency: "GBP" } : {}

  return new Intl.NumberFormat("en-GB", options).format(value)
}

export const randomNumber = (maxLength: number) => {
  const randomNumberString = Math.random().toString()
  return randomNumberString.slice(randomNumberString.length - maxLength)
}

export const randomString = (maxLength: number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let random = ""
  for (let index = 0; index < maxLength; index++) {
    random += alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  return random
}
