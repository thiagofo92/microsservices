import { Handler } from "src/core/port/handler"

export abstract class CommandPort {
  constructor(protected readonly handler: Handler) {}
  operation: string = 'command'
  async execute <T>(input: any): Promise<T> { throw new Error(`Execute method not implemented by class ${this.constructor.name}`) }
}