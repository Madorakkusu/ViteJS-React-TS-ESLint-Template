import { FC, ReactElement } from 'react';
import './ReactionBoard.css';

type ReactionBoardType = {
  children: JSX.Element | ReactElement;
};

// Takes child size so it can be used everywhere
const ReactionBoard: FC<ReactionBoardType> = ({ children }) => {
  return <div className='reactionBoard'>{children}</div>;
};

export default ReactionBoard;
