interface PaymentBill {
  cpf: string
  address: string
  addressNumber: number
  addressSupplement: string
}

export class PaymentBillEntity {
  private readonly cpf: string
  private readonly address: string
  private readonly addressNumber: number
  private readonly addressSupplement: string

  constructor({ cpf, address, addressNumber, addressSupplement}: PaymentBill) {
    this.cpf = cpf
    this.address = address
    this.addressNumber = addressNumber
    this.addressSupplement = addressSupplement
  }

  validateCpf(): boolean {
    if(this.cpf.length != 11) return false

    return true
  }
}