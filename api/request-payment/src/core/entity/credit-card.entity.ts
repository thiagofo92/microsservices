import { ClientEntity } from "./client.entity";

export type CreditCardEntity = {
  readonly number: string
  readonly code: string
  readonly validDate: string
} & ClientEntity