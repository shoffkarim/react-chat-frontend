import React from 'react';
import { Message } from 'components';

const App:React.FC = () => {
  const photos = [
    {
      id: 1,
      url: "default-avatar.jpg"
    },
    {
      id: 2,
      url: "default-avatar.jpg"
    },
  ]
  return (
    <div className="App">
      <Message isMy={false} text={"Hello, Wolrd!"}/>
      <Message isMy={true} send={true} readed={false} text={"Hello, Wolrd!"}/>
      <Message isMy={true} send={true} readed={true} text={"Hi"}/>
      <Message isMy={true} send={true} readed={true} text={"Hi"}  attachments={photos}/>
    </div>
  );
}

export default App;
