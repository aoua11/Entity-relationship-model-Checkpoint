import React from 'react';
import { Coach as CoachType } from '../types/Coach';

interface Props {
  coach: CoachType;
}

const Coach: React.FC<Props> = ({ coach }) => (
  <div>
    <h4>{coach.firstName} {coach.lastName}</h4>
    <p>Age: {coach.age}</p>
    <p>Specialty: {coach.specialty}</p>
  </div>
);

export default Coach;
