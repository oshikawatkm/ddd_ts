import User from '../domain/user/User';
import UserName from '../domain/user/UserName';

export default interface IUserRepository {
  Find(username: UserName): any;
  Save(user: User): void;
}