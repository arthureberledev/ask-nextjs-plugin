declare global {
  interface BigInt {
    toJSON(): string
  }
}
