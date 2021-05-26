import React from "react";
import { DialogInput, DialogItem, Message } from "components";

const App: React.FC = () => {
  const photos = [
    {
      id: 1,
      url: "default-avatar.jpg",
    },
    {
      id: 2,
      url: "default-avatar.jpg",
    },
  ];
  const user = {
    id: 1,
    name: "Barak Obama",
    avatar: "default-avatar.jpg",
    isOnline: true,
  };
  const message = {
    text: "Hello, world, I'm from Russia",
    created_at: new Date(2021, 4, 20, 14, 25),
    isReaded: false,
  };
  const user2 = {
    id: 1,
    name: "Dmitry Olololoololo",
    avatar: "default-avatar.jpg",
    isOnline: true,
  };
  const message2 = {
    text: "Hello, world, I'm from Russia Hello, world, I'm from Russia Hello, world, I'm from Russia",
    created_at: new Date(2020, 4, 20, 14, 25),
    isReaded: true,
  };
  return (
    <div className="App">
      <div className="main">
        <div className="dialogs">
          <DialogItem user={user} message={message} />
          <DialogItem user={user2} message={message2} />
        </div>
        <div className="dialog-window">
          <div className="dialog-messages">
            <Message
              isMy={false}
              date={new Date(2016, 12, 1)}
              text={"Hello, Wolrd!"}
            />
            <Message
              isMy={true}
              date={new Date()}
              send={true}
              readed={false}
              text={"Hello, Wolrd!"}
            />
            <Message
              isMy={true}
              date={new Date()}
              send={true}
              readed={true}
              text={"Hi"}
            />
            <Message
              isMy={true}
              date={new Date(2021, 4, 20, 14, 25)}
              send={true}
              readed={true}
              text={"Hi"}
              attachments={photos}
            />
          </div>
          <div className="dialog-input">
            <DialogInput/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
