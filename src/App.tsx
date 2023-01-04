import { FC } from 'react';
import './App.css';
import Dashboard from '~/modules/Dashboard';
import ReactionBoard from '~/components/ReactionBoard';
const App: FC = () => (
  <div className='App'>
    <ReactionBoard>
      <Dashboard />
    </ReactionBoard>
  </div>
);

export default App;
