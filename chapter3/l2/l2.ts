class User {
  private _name: string;

  constructor(name: string){
    this.changeName(name);
  }

  public changeName(name: string): void {
    if (name == null) throw new Error("name cannot be null.");
    if (name.length < 3) throw new Error("ユーザー名は３文字以上です。");
    
    this._name = name;
  }
}

let user = new User("takashi");
console.log(user);
user.changeName("yamanaka");
console.log(user);