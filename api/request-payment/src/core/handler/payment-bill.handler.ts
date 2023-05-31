import { PaymentServicePort } from "src/infra/port";
import { Handler } from "../port/handler";

export class PaymentBillHandler implements Handler {
  constructor(private readonly service: PaymentServicePort) {}
  async execute <R>(input: any): Promise<R> {
    const result = await this.service.generatePaymentBill(input)
    return result as R
  }

}