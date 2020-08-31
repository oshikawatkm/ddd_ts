import IUserRepository from "../infrastructure/IUserRepository";
import UserService from "../service/UserService";
import User from "../domain/user/User";
import UserName from "../domain/user/UserName";


export default class UserApplicationService {
  private readonly userRepository : IUserRepository;
  private readonly userService: UserService;

  public register(name: string, mailAddress: string): void {
    let user = new User(
      new UserName(name)
    );
    if (this.userService.Exists(user)) {
      throw new Error("ユーザーは既に存在しています");
    }
    this.userRepository.Save(user)
  }

}