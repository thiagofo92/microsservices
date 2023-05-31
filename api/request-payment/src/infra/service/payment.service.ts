import { PaymentBillEntity } from "src/core/entity";
import { PaymentServicePort } from "../port";
import Axios from 'axios'
export class PaymentService implements PaymentServicePort {
  async generatePaymentBill (input: PaymentBillEntity):  Promise<unknown> {

    const { data } = await Axios.post('locahost:3000/', input)
    return data
  }
  async generatePix (input: unknown):  Promise<unknown> {
    return ''
  }

}