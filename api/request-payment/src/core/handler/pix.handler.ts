import { Handler } from "../port/handler";

export class PixHandler implements Handler {
  async execute <R>(input: any): Promise<R> {
    return '' as R
  }

}