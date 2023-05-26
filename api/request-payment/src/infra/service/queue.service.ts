import { QueueServicePort } from "../port";

export class QueueService implements QueueServicePort {
  async push (channel: string, data: any): Promise<void> {

  }

}