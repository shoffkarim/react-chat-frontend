import React from "react";
import { DialogInput, DialogItem, DialogList, DialogMessages } from "components";

export type GlobalContent = {
  mainUser: number
}
const GlobalContext = React.createContext<GlobalContent>({
  mainUser: 1
})
export const useGlobalContext = () => React.useContext(GlobalContext)

const App: React.FC = () => {
  const onSelectChat = (chat_id: number) => {
    console.log(123)
  };
  return (
    <GlobalContext.Provider value={{mainUser: 1}}>
    <div className="App">
      <div className="main">
        <div className="dialogs">
          <div className="dialogs-title">
            <p>Messages</p>
          </div>
          <DialogList/>
        </div>
        <div className="dialog-window">
          <DialogMessages chatId={1}/>
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
