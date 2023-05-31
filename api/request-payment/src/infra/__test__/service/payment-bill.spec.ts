import { it, describe, expect } from 'vitest'
import { PaymentBillEntity } from 'src/core/entity'
import { PaymentService } from 'src/infra/service'

describe('#Service Payment', () => { 
    it('Generate payment bill', async() => {
      const service = new PaymentService()
      const input = new PaymentBillEntity({
        cpf: '1111',
        address: 'asdasd',
        addressNumber: 12,
        addressSupplement: '1'
      })
      const result = await service.generatePaymentBill(input)
      const expected = FakeResponsePaymentBill 
      expect(result).toStrictEqual(expected)
    })

    it('Generate payment bill', async() => {
      const service = new PaymentService()
      const input = new PaymentBillEntity({
        cpf: '1111',
        address: 'asdasd',
        addressNumber: 12,
        addressSupplement: '1'
      })
      const result = await service.generatePix(input)
      const expected = '' 
      expect(result).toStrictEqual(expected)
    })
 })