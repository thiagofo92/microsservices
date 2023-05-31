export interface Handler {
  execute: <R>(input: any ) => Promise<R>
}