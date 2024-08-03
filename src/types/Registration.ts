import { Member } from "./Member";
import { Session } from "./Session";


export interface Registration {
  registrationID: number;
  member: Member;
  session: Session;
}
