import { PaymentServicePort } from "src/infra/port";
import { Handler } from "../port/handler";
import { QueueService } from "src/infra/service";

export class CreditHandler implements Handler {
  constructor(private readonly service: QueueService) {}
  async execute <R>(input: any): Promise<R> {
    const result = await this.service.push('credit', input)
    return result as R
  }
}