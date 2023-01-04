import { FC, MouseEvent, ReactElement, useState } from 'react';
import './ReactionBoard.css';
import { ReactionType } from '~/components/Reaction/types';
import Reaction from '~/components/Reaction';
import ReactionForm from '~/components/ReactionForm/ReactionForm';

type ReactionBoardType = {
  children: JSX.Element | ReactElement;
};

// Takes child size so it can be used everywhere
const ReactionBoard: FC<ReactionBoardType> = ({ children }) => {
  const [reactions, setReactions] = useState<ReactionType[]>([]);
  const [isFormOpened, setFormOpened] = useState<boolean>(false);
  const [formPositionX, setFormPositionX] = useState<number>(0);
  const [formPositionY, setFormPositionY] = useState<number>(0);
  const handleClick = (posX: number, posY: number): void => {
    if (!isFormOpened) {
      setFormPositionX(posX);
      setFormPositionY(posY);
      setFormOpened(true);
    } else {
      setFormOpened(false);
    }
  };

  const createReaction = (comment: string) => {
    setReactions([
      ...reactions,
      { positionPercentageX: formPositionX, positionPercentageY: formPositionY, comment: comment },
    ]);
    setFormOpened(false);
  };

  return (
    <div
      className='reactionBoard'
      onClick={(event: MouseEvent<HTMLDivElement>): void =>
        handleClick(event.clientX, event.clientY)
      }
    >
      {reactions.map(({ positionPercentageX, positionPercentageY, comment }, index) => (
        <Reaction
          key={`${positionPercentageX} ${positionPercentageX}-${comment}-${index}`}
          positionPercentageX={positionPercentageX}
          positionPercentageY={positionPercentageY}
          comment={comment}
        />
      ))}
      {isFormOpened && (
        <ReactionForm
          positionPercentageX={formPositionX}
          positionPercentageY={formPositionY}
          onCreate={createReaction}
        />
      )}
      {children}
    </div>
  );
};

export default ReactionBoard;
