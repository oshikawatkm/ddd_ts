import ICircleRepository from "../infrastructure/ICircleRepository";
import CircleRepository from "../infrastructure/circle/CircleRepository";




export default class CircleApplication {
  private readonly circleFactory: ICircleFactory;
  private readonly circleRepository: ICircleRepository;
  private readonly circleService: CircleService;
  private readonly userRepository: IUserRepository;

  constructor(circleRepository: CircleRepository) {
    this.circleRepository = circleRepository;
  }
}