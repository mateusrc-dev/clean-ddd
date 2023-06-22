// either - success (right - flow always continues to the right) or error (left - flow returns when error occurs)
// normal flow -> UI -> CONTROLLERS -> USE CASE -> ENTITY -> USE CASE -> REPOSITORY -> DATABASE

// error
export class Left<L> {
  readonly value: L // readonly cannot change after its initialization - motive of error

  constructor(value: L) {
    this.value = value
  }
}

// success
export class Right<R> {
  readonly value: R // readonly cannot change after its initialization - result of success

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: L): Either<L, R> => {
  // this function needs to return 'Either' because when it is used (in this case, in another function) the function returns 'Either' too
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
