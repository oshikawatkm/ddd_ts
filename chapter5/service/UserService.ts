import IUserRepository from '../infrastructure/IUserRepository';
import User from '../domain/user/User';

export default class UserService {
  private userRepository: IUserRepository;

  constructor (userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public Exists(user: User) {
    let found = this.userRepository.Find(user.name);
    return found;
  }

}

