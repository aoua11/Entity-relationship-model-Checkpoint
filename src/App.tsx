import React from 'react';
import Gymnasium from './components/Gymnasium';
import Member from './types/Member';
import Session from './types/Session';
import Coach from './types/Coach';
import Registration from './types/Registration';
import { Gymnasium as GymnasiumType } from '../types/Gymnasium';
import { Member as MemberType } from '../types/Member';
import { Session as SessionType } from '../types/Session';
import { Coach as CoachType } from '../types/Coach';
import { Registration as RegistrationType } from '../types/Registration';

const gymnasium: GymnasiumType = {
  gymnasiumID: 1,
  name: 'FitClub',
  address: '123 Fitness St',
  telephoneNumber: '555-1234'
};

const coach1: CoachType = {
  coachID: 1,
  lastName: 'Smith',
  firstName: 'John',
  age: 40,
  specialty: 'Yoga'
};

const coach2: CoachType = {
  coachID: 2,
  lastName: 'Doe',
  firstName: 'Jane',
  age: 35,
  specialty: 'Pilates'
};

const member1: MemberType = {
  memberID: 1,
  lastName: 'Doe',
  firstName: 'Alice',
  address: '456 Maple Ave',
  dateOfBirth: new Date('1990-01-01'),
  gender: 'Female',
  gymnasium
};

const member2: MemberType = {
  memberID: 2,
  lastName: 'Roe',
  firstName: 'Bob',
  address: '789 Oak Dr',
  dateOfBirth: new Date('1985-05-15'),
  gender: 'Male',
  gymnasium
};

const session: SessionType = {
  sessionID: 1,
  sportType: 'Yoga',
  schedule: '10:00 AM',
  gymnasium,
  coaches: [coach1, coach2],
  members: [member1, member2]
};

const registration: RegistrationType = {
  registrationID: 1,
  member: member1,
  session
};

const App: React.FC = () => (
  <div>
    <h1>Gym Management System</h1>
    <Gymnasium Gymnasium = {Gymnasium}/>
    <Session session={session} />
    <Registration registration={registration} />
  </div>
);

export default App;

