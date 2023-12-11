import { http } from "~/lib"
import type { Invoice } from "./invoice.type"

export const getInvoices = async () => {
  const res = await http.get<Invoice[]>("/invoices")
  return res
}

export const getInvoice = async (id: string) => {
  const res = await http.get<Invoice>(`/invoices/${id}`)
  return res
}
