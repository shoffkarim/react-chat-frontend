import React from 'react';
import { Message } from 'components';

const App:React.FC = () => {
  return (
    <div className="App">
      <Message isMy={false}/>
      <Message isMy={true} send={true} readed={false}/>
      <Message isMy={true} send={true} readed={true}/>
    </div>
  );
}

export default App;
