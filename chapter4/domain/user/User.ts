import UserId from './UserId';
import UserName from './UserName';

export default class User {
  public readonly _id: UserId;
  public _name: UserName;

  constructor(userId: UserId, userName: UserName) {
    this._id = userId;
    this._name = userName;
  }

  public changeUserName(name: UserName): void {
    if (name === null) throw new Error("name cannot be null");

    this._name = name;
  }

  public get id() {return this._id }
  public get name() {return this._name }
  
}