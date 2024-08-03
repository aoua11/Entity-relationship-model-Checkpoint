import { Coach } from './Coach';
import { Gymnasium } from './Gymnasium';
import { Member } from './Member';




export interface Session {
  sessionID: number;
  sportType: string;
  schedule: string;
  gymnasium: Gymnasium;
  coaches: Coach[];
  members: Member[];
}
