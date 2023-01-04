import { FC } from 'react';
import './Dashboard.css';

const Dashboard: FC = () => {
  return (
    <div className='dashboard'>
      <h1>Welcome to the Dashboard!</h1>
      <div className='card'>
        <p>
          This is a reaction board coded with <code>React / TypeScript</code>, have fun with it !
        </p>
      </div>
      <p className='read-the-docs'>You can click anywhere to react :)</p>
    </div>
  );
};

export default Dashboard;
