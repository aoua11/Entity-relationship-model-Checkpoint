import { Gymnasium } from '../components/Gymnasium';

export interface Member {
  memberID: number;
  lastName: string;
  firstName: string;
  address: string;
  dateOfBirth: Date;
  gender: string;
  gymnasium: Gymnasium;
}
