import * as mysql from 'mysql';
import config from '../../../config.json';
import User from '../domain/user/User';
import UserId from '../domain/user/UserId';
import UserName from '../domain/user/UserName';
import IUserRepository from './IUserRepository';

export default class UserRepository implements IUserRepository {
  connection = mysql.createConnection(config.development.mysql);

  public async Save(user: User): Promise<void> {
    this.connection.connect();
    this.connection.query('INSERT INTO users(id, name) VALUES(?, ?);' [user._id.value, user._name.value], (result, err) => {
      if (err) { console.log(err) }
      console.log(result)
    });
  }

  public async Find(userName: UserName) {
    this.connection.connect();
    this.connection.query('SELECT * FROM users WHERE name = ?', [userName], (result, err, callback) => {
      if (err) {callback(null, err)};
      let id = result[0].id;
      let name = result[0].name;
      callback(new User(
        new UserId(id),
        new UserName(name)
      ))
    });
  }
}
