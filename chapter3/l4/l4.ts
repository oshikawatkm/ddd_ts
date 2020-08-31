class UserId {
  private _value: string;
  
  constructor(value: string) {
    if (value == null) throw new Error("value cannot be null.");

    this._value = value;
  }
}

class User {
  private readonly _id: UserId;
  private _name: string;

  constructor(id: UserId, name: string) {
    if (id == null) throw new Error("id cannot be null.");
    if (name ==  null) throw new Error("name cannot be null.");

    this._id = id;
    this.changeName(name);
  }

  public changeName(name: string): void {
    if (name === null) throw new Error("name cannot be null.");
    if (name.length < 3) throw new Error("ユーザー名は３文字以上です。");

    this._name = name;
  }

  public equals(other: User): boolean {
    if (null === other) return false;
    if (this === other) return true;
    this._id === other._id ? true: false;
  }
}



let rightUserId = new UserId("1");
let rightUser = new User(rightUserId, "taro")

let leftUserId = new UserId("2");
let leftUser = new User(leftUserId, "jiro")

if (rightUser.equals(leftUser)){
  console.log("同一ユーザーです。");
} else {
  console.log("同一ユーザーではありません");
}