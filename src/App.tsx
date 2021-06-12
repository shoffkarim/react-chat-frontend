import React from "react";
import { DialogInput, DialogItem, DialogMessages } from "components";

const App: React.FC = () => {

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
          <div className="dialogs-title">
            <p>Messages</p>
          </div>
          <div className="dialog-list">
            <DialogItem user={user} message={message} />
            <DialogItem user={user2} message={message2} />
          </div>
        </div>
        <div className="dialog-window">
          <DialogMessages chatId={2}/>
          <div className="dialog-input">
            <DialogInput/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
