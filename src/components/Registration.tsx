import React from 'react';
import { Registration as RegistrationType } from '../types/Registration';
import Member from './Member';
import Session from './Session';

interface Props {
  registration: RegistrationType;
}

const Registration: React.FC<Props> = ({ registration }) => (
  <div>
    <h3>Registration ID: {registration.registrationID}</h3>
    <Member member={registration.member} />
    <Session session={registration.session} />
  </div>
);

export default Registration;
