import React from "react";
import { DialogInput, DialogList, DialogMessages } from "components";

export type GlobalContent = {
  mainUser: number
}
const GlobalContext = React.createContext<GlobalContent>({
  mainUser: 1
})
export const useGlobalContext = () => React.useContext(GlobalContext)

const App: React.FC = () => {
  const [activeChat, setActiveChat] = React.useState(0);
  const onSelectActiveChat = (chat_id: number) => {
    setActiveChat(chat_id)
  }
  return (
    <GlobalContext.Provider value={{mainUser: 1}}>
    <div className="App">
      <div className="main">
        <div className="dialogs">
          <div className="dialogs-title">
            <p>Messages</p>
          </div>
          <DialogList onSelectChat={(chat_id) => onSelectActiveChat(chat_id)}/>
        </div>
        <div className="dialog-window">
          <DialogMessages chatId={activeChat}/>
          <DialogInput/>
        </div>
      </div>
    </div>
    </GlobalContext.Provider>
  );
};

export default App;
