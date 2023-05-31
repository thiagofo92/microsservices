const FakeResponsePaymentBill = {
  "id": "or_56GXnk6T0eU88qMm",
  "code": "YV3RCRIN24",
  "amount": 3090,
  "currency": "BRL",
  "closed": true,
  "items": [
    {
      "id": "oi_6rXqKEzuZYcRo2zL",
      "description": "Chaveiro do Tesseract",
      "amount": 2990,
      "quantity": 1,
      "status": "active",
      "created_at": "2019-10-16T17:36:30Z",
      "updated_at": "2019-10-16T17:36:30Z"
    }
  ],
  "customer": {
    "id": "cus_x4nz0P4SbOTA0KBZ",
    "name": "Tony Stark",
    "email": "avengerstark@ligadajustica.com.br",
    "document": "14582256988",
    "type": "individual",
    "delinquent": false,
    "created_at": "2019-05-02T17:06:01Z",
    "updated_at": "2019-06-12T14:50:18Z",
    "phones": {}
  },
  "shipping": {
    "amount": 100,
    "description": "Stark",
    "recipient_name": "Tony Stark",
    "recipient_phone": "24586787867",
    "address": {
      "city": "Malibu",
      "state": "CA",
      "country": "US",
      "zip_code": "90265",
      "line_1": "10880, Malibu Point, Malibu Central"
    }
  },
  "status": "pending",
  "created_at": "2019-10-16T17:36:30Z",
  "updated_at": "2019-10-16T17:36:30Z",
  "closed_at": "2019-10-16T17:36:30Z",
  "ip": "52.168.67.32",
  "session_id": "322b821a",
  "device": {
    "platform": "ANDROID OS"
  },
  "location": {
    "latitude": "-22.970722",
    "longitude": "43.182365"
  },
  "charges": [
    {
      "id": "ch_K2rJ5nlHwTE4qRDP",
      "code": "YV3RCRIN24",
      "gateway_id": "3b4bb2d9-19b3-4638-a974-0bb914fff472",
      "amount": 3090,
      "status": "pending",
      "currency": "BRL",
      "payment_method": "boleto",
      "created_at": "2019-10-16T17:36:30Z",
      "updated_at": "2019-10-16T17:36:31Z",
      "customer": {
        "id": "cus_x4nz0P4SbOTA0KBZ",
        "name": "Tony Stark",
        "email": "avengerstark@ligadajustica.com.br",
        "document": "14582256988",
        "type": "individual",
        "delinquent": false,
        "created_at": "2019-05-02T17:06:01Z",
        "updated_at": "2019-06-12T14:50:18Z",
        "phones": {}
      },
      "last_transaction": {
        "id": "tran_bZ0N3DjjUzTW68eq",
        "transaction_type": "boleto",
        "gateway_id": "044581ea-67e8-4772-bd56-f10ade5499de",
        "amount": 3090,
        "status": "generated",
        "success": true,
        "url": "https://sandbox.pagar.me/Boleto/ViewBoleto.aspx?044581ea-67e8-4772-bd56-f10ade5499de",
        "pdf": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/pdf",
        "line": "34191.75462 24615.781234 41234.510000 3 83840000003090",
        "barcode": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/barcode",
        "qr_code": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/qrcode",
        "nosso_numero": "46246157",
        "type": "DM",
        "document_number": "123",
        "instructions": "Pagar até o vencimento",
        "due_at": "2020-09-20T00:00:00Z",
        "created_at": "2019-10-16T17:36:30Z",
        "updated_at": "2019-10-16T17:36:30Z",
        "gateway_response": {
          "code": "201"
        },
        "antifraud_response": {}
      }
    }
  ],
  "checkouts": []
}