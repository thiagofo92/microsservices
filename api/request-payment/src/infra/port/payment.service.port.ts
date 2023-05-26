import { PaymentBillEntity } from "src/core/entity"

export interface PaymentServicePort {
  generateBilling: (input: PaymentBillEntity) => Promise<unknown>
  generatePix: (input: unknown) => Promise<unknown>
}