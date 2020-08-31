

export default class UserName {
  private _value: string;

  constructor(value: string) {
    if (value === null) throw new Error ("value cannot be null.")
    if (value.length < 3) throw new Error ("ユーザー名は３文字以上で入力してください。")
    if (value.length > 20) throw new Error ("ユーザー名は20文字以下で入力してください。")

    this._value = value;
  }

  public get value() { return this._value }
}