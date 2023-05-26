interface Card {
  id?: string
  name: string
  cardNumber: string
  code: string
  month: number
  year: number
  cpf: string
}

export class CardEntity {
  private readonly id?: string
  private readonly name: string
  private readonly cardNumber: string 
  private readonly code: string
  private readonly month: number
  private readonly year: number
  private readonly cpf: string

  constructor({ id, name, cardNumber, code, month, year, cpf}: Card) {
    this.id = id
    this.name = name
    this.cardNumber = cardNumber
    this.code = code
    this.month = month
    this.year = year
    this.cpf = cpf
  }
  
  validateDate(): boolean {
    const currentlyDate = new Date()
    const month = currentlyDate.getMonth() 

    if(this.month < month) return false

    const year = currentlyDate.getFullYear()

    if(this.year < year) return false
    return true
  }

  validateName() {
    if(this.name.length < 2) return false
    return true
  }

  validateCode() {
    if(this.code === '0') return false
    return true
  }

  validateCpf(): boolean {
    if(this.cpf.length != 11) return false
    return true
  }
}

export class CardCreditEntity extends CardEntity {
  private readonly numberInstallments: number

  constructor(card: Card & {  numberInstallments: number }) {
    super(card)
    this.numberInstallments = card.numberInstallments
  }
}