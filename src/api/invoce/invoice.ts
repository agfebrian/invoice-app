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

export const postInvoice = async (body: Invoice) => {
  // convert price type to number before send req
  body.items.forEach((item) => (item.price = Number(item.price)))
  const res = await http.post<Invoice>(`/invoices/`, body)
  return res
}

export const updateInvoice = async (id: string, body: Invoice) => {
  body.items.forEach((item) => (item.price = Number(item.price)))
  const res = await http.put<Invoice>(`/invoices/${id}`, body)
  return res
}

export const deleteInvoice = async (id: string) => {
  const res = await http.delete<Invoice>(`/invoices/${id}`)
  return res
}
