import { describe, it } from "vitest";

interface Command {
  readonly operation: string
}



describe('# Command classes', () => {
  it('Credit command', async () => {
    const service = new Service()
    const creditCommand = new CreditCommand(service)
  })
})