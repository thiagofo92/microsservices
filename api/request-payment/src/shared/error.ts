/* eslint-disable max-classes-per-file */
export type Either<L, A> = Error<L, A> | Ok<L, A>

export class Error<L, A> {
  readonly value: L

  constructor (value: L) {
    this.value = value
  }

  isError (): this is Error<L, A> {
    return true
  }

  isOk (): this is Ok<L, A> {
    return false
  }
}

export class Ok<L, A> {
  readonly value: A

  constructor (value: A) {
    this.value = value
  }

  isError (): this is Error<L, A> {
    return false
  }

  isOk (): this is Ok<L, A> {
    return true
  }
}

export const error = <L, A>(l: L): Either<L, A> => new Error<L, A>(l)

export const ok = <L, A>(a: A): Either<L, A> => new Ok<L, A>(a)
