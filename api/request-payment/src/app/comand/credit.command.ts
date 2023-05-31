import { Handler } from "src/core/port/handler";
import { CommandPort } from "../port/command.port";

export class CredtiCommand extends CommandPort {
  constructor(handler: Handler) { super(handler) }

  async execute<T>(input: any): Promise<T> {
   return await this.handler.execute(input) 
  }
}