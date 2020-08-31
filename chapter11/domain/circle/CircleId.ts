


export default class CircleId {
  private readonly _value: string
  constructor (value: string) {
    if (value === null) throw new Error ("value cannot be null");
    this._value = value;
  }

  public get value(): string { return this.value }
}