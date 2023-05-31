import { PaymentService } from "src/infra/service";
import { describe, it, vi } from "vitest";
import { PaymentBillHandler } from "../handler";
import Axios from 'axios'
vi.mock('axios')

describe('# Bill Payment', () => {
  it('Success to generate Payment Bill', async () => {
    const service = new PaymentService()
    const handler = new PaymentBillHandler(service)
    const postMock = vi.mocked(Axios.post)
    
    postMock.mockResolvedValueOnce({ data: 'Mock test' })


    const result = await handler.execute({})

    console.log('result', result)
  })
})