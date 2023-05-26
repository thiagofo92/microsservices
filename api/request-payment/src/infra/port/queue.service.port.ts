export interface QueueServicePort {
  push: (channel: string, data: any) => Promise<void>
}