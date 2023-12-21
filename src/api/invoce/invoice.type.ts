export type Address = {
  street: string
  city: string
  postCode: string
  country: string
}

export type InvoiceItem = {
  id?: string
  name: string
  quantity: number
  price: number | string
  total?: number | undefined
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

export type Query = {
  draft: boolean
  pending: boolean
  paid: boolean
}
