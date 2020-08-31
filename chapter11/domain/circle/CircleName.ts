

export default class CircleName {
  private readonly _value: string;

  constructor(value: string) {
    if (value === null) throw new Error("value cannot be null");
    if (value.length < 3) throw new Error("サークル名は3文字以上にしてください");
    if (value.length > 20) throw new Error("サークル名は20文字以下にしてください");

    this._value = value;
  }
  
  public get value(): string { return this._value }

  public equals(obj: object) {

  }
}