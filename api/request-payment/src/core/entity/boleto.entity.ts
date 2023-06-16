import { AddressEntity } from "./address.entity";
import { ClientEntity } from "./client.entity";


export class BoletoEntity {
  private barcodeUrl: string = ''
  private pdfUrl: string = ''

  constructor(readonly client: ClientEntity, readonly address: AddressEntity) {}

  setCodeBarUrl(url: string) {
    this.barcodeUrl = url
  }

  getCodeBarUrl() {
    return this.barcodeUrl
  }

  setPDFUrl(url: string) {
    this.pdfUrl = url
  }

  getPdfUrl() {
    return this.pdfUrl
  }

}
