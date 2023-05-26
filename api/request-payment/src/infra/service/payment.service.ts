import { PaymentBillEntity } from "src/core/entity";
import { PaymentServicePort } from "../port";

export class PaymentService implements PaymentServicePort {
  async generateBilling (input: PaymentBillEntity):  Promise<unknown> {
    return null
  }
  async generatePix (input: unknown):  Promise<unknown> {
    return null
  }

}