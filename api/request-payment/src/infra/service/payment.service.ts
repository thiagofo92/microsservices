import { PaymentBillEntity } from "src/core/entity";
import { PaymentServicePort } from "../port";

export class PaymentService implements PaymentServicePort {
  async generatePaymentBill (input: PaymentBillEntity):  Promise<unknown> {
    return ''
  }
  async generatePix (input: unknown):  Promise<unknown> {
    return ''
  }

}