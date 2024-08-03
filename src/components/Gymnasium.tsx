import React from 'react';
import { Gymnasium as GymnasiumType } from '../types/Gymnasium';

interface Props {
  gymnasium: GymnasiumType;
}

const Gymnasium: React.FC<Props> = ({ gymnasium }) => (
  <div>
    <h2>{gymnasium.name}</h2>
    <p>Address: {gymnasium.address}</p>
    <p>Telephone: {gymnasium.telephoneNumber}</p>
  </div>
);

export default Gymnasium;
