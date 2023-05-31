import { PaymentBillEntity } from "src/core/entity"

export interface PaymentServicePort {
  generatePaymentBill: (input: PaymentBillEntity) => Promise<unknown>
  generatePix: (input: unknown) => Promise<unknown>
}