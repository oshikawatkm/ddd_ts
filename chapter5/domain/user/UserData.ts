import User from './User';

class UserData {
  private readonly _id: string;
  private readonly _name: string;
  constructor(source: User) {
    this._id = source.id.value;
    this._name = source.name.value;
  }

  public get id(): string { return this._id }
  public get name(): string { return this._id }
}