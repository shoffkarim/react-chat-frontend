import { ChatsBD } from "interfaces/chats";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "redux/actions/Chats";
import { RootState } from "redux/store";
import DialogItem from "./DialogItem";

interface IDialogList {
  onSelectChat: (arg0: number) => void;
  activeChat: number
}

const DialogList: React.FC<IDialogList> = ({onSelectChat, activeChat}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  const chats: ChatsBD[] = useSelector((state: RootState) => state.Chats.items);

  return (
    <div className="dialog-list">
      {chats &&
        chats.map((obj, index) => (
          <DialogItem
            selectChat={(chat_id) => onSelectChat(chat_id)}
            user_id={obj.user_id}
            chat_id={obj.id}
            message_id={obj.last_message}
            key={index}
            activeChat={activeChat}
          />
        ))}
    </div>
  );
};

export default DialogList;
