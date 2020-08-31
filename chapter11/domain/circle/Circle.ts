import CircleId from './CircleId';
import CircleName from './CircleName';
import User from '../user/User';
import UserName from '../user/UserName';

export default class Circle {
  private readonly _id: CircleId;
  private  _name: CircleName;
  private  _owner: User;
  private  _members: Array<User>;

  constructor(id: CircleId, name: CircleName, owner: User, members: Array<User>) {
    if (id === null) throw new Error ("id cannot be null");
    if (name === null) throw new Error ("name cannot be null");
    if (owner === null) throw new Error ("owner cannot be null");
    if (members === null) throw new Error ("members cannot be null");

    this._id = id;
    this._name = name;
    this._owner = owner;
    this._members = members;
  }

  public get id(): CircleId { return this._id }
  public get name(): CircleName { return this._name }
  public set name(name: CircleName) { this._name = name }
  public get owner(): User { return this._owner }
  public set owner(owner: User) { this._owner = owner }
  public get members(): Array<User> { return this._members }
  public set members(members: Array<User>) { this._members = members }
}