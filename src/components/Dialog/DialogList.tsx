import { ChatsBD } from "interfaces/chats";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "redux/actions/Chats";
import { RootState } from "redux/store";
import DialogItem from "./DialogItem";

const DialogList: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  const chats: ChatsBD[] = useSelector((state: RootState) => state.Chats.items);
  const [activeChat, setActiveChat] = React.useState(0);
  const onSelectChat = (chat_id: number) => {
    setActiveChat(chat_id);
  };
  //console.log(chats)
  return (
    <div className="dialog-list">
      {chats &&
        chats.map((obj, index) => (
          <DialogItem
            user_id={obj.user_id}
            chat_id={obj.id}
            message_id={obj.last_message}
            selectChat={(chat_id) => onSelectChat(chat_id)}
            key={index}
          />
        ))}
    </div>
  );
};

export default DialogList;
