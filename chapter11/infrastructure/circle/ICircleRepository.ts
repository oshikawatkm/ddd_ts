import Circle from '../domain/circle';
import CircleId from '../domain/circle/CircleId';
import CircleName from '../domain/circle/CircleName';

export default interface ICircleRepository {
  Save(circle: Circle): void;
  Find(id: CircleId): Circle;
  Find(name: CircleName): Circle;
}