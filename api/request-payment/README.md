# API Payment

## Description

API will request to queue or another service the payment, where the other application will communicate with the payment service

## Domain rules

- Register the credit card
- Verify if credit card exists
- Generate another kind of payment
- Send to the queue payment request

## Architecture

- [Port and adapter](https://alistair.cockburn.us/hexagonal-architecture/)

## Pattern

- [Repository](https://deviq.com/design-patterns/repository-pattern)
- [DI](https://balta.io/artigos/dependency-injection)
