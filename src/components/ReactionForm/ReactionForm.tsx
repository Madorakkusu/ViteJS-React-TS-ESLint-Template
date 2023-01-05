import { FC, useState } from 'react';
import './ReactionForm.css';
import { PositionType } from '~/components/Reaction/types';

type ReactionForm = PositionType & {
  onCreate: (comment: string, isEmoji?: boolean) => void;
};

const ReactionForm: FC<ReactionForm> = ({ positionPercentageX, positionPercentageY, onCreate }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleCreate = (): void => {
    onCreate(inputValue);
    setInputValue('');
  };

  return (
    <div
      className='reactionForm'
      style={{ top: positionPercentageY, left: positionPercentageX }}
      onClick={(e) => e.stopPropagation()}
    >
      <p className='label'>Write your comment 😀</p>
      <div className='form'>
        <input
          className='input'
          type='text'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className='submitButton' onClick={handleCreate}>
          Create
        </button>
      </div>
      <div className='emojiReactBoard'>
        <p className='emojiButton' onClick={() => onCreate('😀', true)}>
          😀
        </p>
        <p className='emojiButton' onClick={() => onCreate('❤️', true)}>
          ❤️
        </p>
        <p className='emojiButton' onClick={() => onCreate('👍', true)}>
          👍
        </p>
        <p className='emojiButton' onClick={() => onCreate('👎', true)}>
          👎
        </p>
      </div>
    </div>
  );
};

export default ReactionForm;
