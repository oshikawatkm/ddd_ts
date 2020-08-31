import UserId from './UserId';
import UserName from './UserName';
import * as uuid from 'uuid';

export default class User {
  private readonly _id: UserId;
  private _name: UserName;

  constructor(userName: UserName) {
    this._id = new UserId(uuid.v4());
    this._name = userName;
  }

  public changeUserName(name: UserName): void {
    if (name === null) throw new Error("name cannot be null");

    this._name = name;
  }

  public get id() {return this._id }
  public get name() {return this._name }
  
}