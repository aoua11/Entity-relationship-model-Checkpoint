import React from 'react';
import { Session as SessionType } from '../types/Session';
import Member from './Member';
import Coach from './Coach';

interface Props {
  session: SessionType;
}

const Session: React.FC<Props> = ({ session }) => (
  <div>
    <h2>Sport Type: {session.sportType}</h2>
    <p>Schedule: {session.schedule}</p>
    <h3>Members:</h3>
    {session.members.map(member => <Member key={member.memberID} member={member} />)}
    <h3>Coaches:</h3>
    {session.coaches.map(coach => <Coach key={coach.coachID} coach={coach} />)}
  </div>
);

export default Session;
