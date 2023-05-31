import { QueueService } from "src/infra/service";
import { describe, expect, it, vi  } from "vitest";
import { CreditHandler } from "../handler";
import 'axios'

describe('# CreditHandler', () => {
  it('Sucess execute', async () => {
    const service = new QueueService()
    const axiosMock = vi.mocked('axios')

    console.log(axiosMock)
    const handler = new CreditHandler(service)

    const result = await handler.execute<void>('')
  })
})