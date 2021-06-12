import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "redux/actions/Messages";
import Message from "./Message";

interface DialogMessagesProps {
  chatId: number,
};

interface MessagesRedux {
  items: object[],
  isLoaded: boolean
}
interface stateRedux {
  Chats: object
  Messages: object
}

const DialogMessages: React.FC<DialogMessagesProps> = ({chatId}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  const messages = useSelector((state : stateRedux) => state.Messages);
  console.log(messages.items);
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
  return (
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
  );
};

export default DialogMessages;
