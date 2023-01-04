import { FC } from 'react';
import './Reaction.css';
import { ReactionType } from './types';

const Reaction: FC<ReactionType> = ({ positionPercentageX, positionPercentageY, comment }) => {
  return (
    <div className='reaction' style={{ top: positionPercentageY, left: positionPercentageX }}>
      {comment}
    </div>
  );
};

export default Reaction;
