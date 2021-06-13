import React from "react";
import { DialogInput, DialogItem, DialogMessages } from "components";

export type GlobalContent = {
  mainUser: number
}
const GlobalContext = React.createContext<GlobalContent>({
  mainUser: 1
})
export const useGlobalContext = () => React.useContext(GlobalContext)

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
  const [activeChat, setActiveChat] = React.useState(0)
  const onSelectChat = (chat_id:number) => {
    setActiveChat(chat_id);
  };
  return (
    <GlobalContext.Provider value={{mainUser: 1}}>
    <div className="App">
      <div className="main">
        <div className="dialogs">
          <div className="dialogs-title">
            <p>Messages</p>
          </div>
          <div className="dialog-list">
            <DialogItem user={user} message={message} chat_id={1} selectChat={(chat_id) => onSelectChat(chat_id)}/>
            <DialogItem user={user2} message={message2} chat_id={2} selectChat={(chat_id) => onSelectChat(chat_id)}/>
          </div>
        </div>
        <div className="dialog-window">
          <DialogMessages chatId={activeChat}/>
          <div className="dialog-input">
            <DialogInput/>
          </div>
        </div>
      </div>
    </div>
    </GlobalContext.Provider>
  );
};

export default App;
