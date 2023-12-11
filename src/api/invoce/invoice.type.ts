export type Address = {
  street: string
  city: string
  postCode: string
  country: string
}

export type InvoiceItem = {
  name: string
  quantity: number
  price: number
  total: number
}

export type Invoice = {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: string
  senderAddress: Address
  clientAddress: Address
  items: InvoiceItem[]
  total: number
}
