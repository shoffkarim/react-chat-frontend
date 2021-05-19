import React from 'react';
import { Message } from 'components';

const App:React.FC = () => {
  return (
    <div className="App">
      <Message isMy={false}/>
      <Message isMy={true}/>
    </div>
  );
}

export default App;
