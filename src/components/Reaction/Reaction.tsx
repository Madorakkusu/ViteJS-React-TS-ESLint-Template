import { FC } from 'react';
import './Reaction.css';
import { ReactionType } from './types';

const Reaction: FC<ReactionType> = ({
  positionPercentageX,
  positionPercentageY,
  comment,
  isEmoji,
}) => {
  return (
    <>
      {isEmoji ? (
        <span
          className='emoji'
          style={{ top: `${positionPercentageY}vh`, left: `${positionPercentageX}vw` }}
        >
          {comment}
        </span>
      ) : (
        <div
          className='reaction'
          style={{ top: `${positionPercentageY}vh`, left: `${positionPercentageX}vw` }}
        >
          <p className='comment'>{comment}</p>
        </div>
      )}
    </>
  );
};

export default Reaction;
