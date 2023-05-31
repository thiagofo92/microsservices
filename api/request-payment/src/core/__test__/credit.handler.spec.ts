import { QueueService } from "src/infra/service";
import { describe, expect, it, vi  } from "vitest";
import { CreditHandler } from "../handler";

describe('# CreditHandler', () => {
  it('Sucess execute', async () => {
    const service = new QueueService()

    // console.log('Axios',postMock)
    const handler = new CreditHandler(service)

    const result = await handler.execute<void>('')
  })
})