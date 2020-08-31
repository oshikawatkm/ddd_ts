import ICircleRepository from './ICircleRepository';
import Circle from '../domain/circle/Circle';


export default class CircleService {
  private readonly circleRepository: ICircleRepository;

  constructor(circleRepository: ICircleRepository) {
    this.circleRepository = this.circleRepository;
  }

  public exits(circle: Circle): Boolean {
    let duplicated = this.circleRepository.Find(circle.name);
    if (duplicated === null) {
      return false;
    } else {
      return true;
    }
  }
}