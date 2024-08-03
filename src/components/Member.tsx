import React from 'react';
import { Member as MemberType } from '../types/Member';

interface Props {
  member: MemberType;
}

const Member: React.FC<Props> = ({ member }) => (
  <div>
    <h3>{member.firstName} {member.lastName}</h3>
    <p>Address: {member.address}</p>
    <p>Date of Birth: {member.dateOfBirth.toDateString()}</p>
    <p>Gender: {member.gender}</p>
  </div>
);

export default Member;
