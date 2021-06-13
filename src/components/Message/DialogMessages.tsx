import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "redux/actions/Messages";
import { RootState } from "redux/store";
import Message from "./Message";

interface DialogMessagesProps {
  chatId: number;
}

interface MessageBD {
  id: number;
  chat_id: 1;
  user_id: 2;
  content: string;
  date_create: string;
  is_read: boolean;
}

const DialogMessages: React.FC<DialogMessagesProps> = ({ chatId }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  const messages: MessageBD[] = useSelector(
    (state: RootState) => state.Messages.items
  );
  console.log(messages);
  return (
    <div className="dialog-messages">
      {messages && messages.map((obj, index) =>
          <Message
            isMy={false}
            date={new Date(obj.date_create)}
            send={true}
            readed={false}
            text={obj.content}
            key={index}
          />
        )
      }
    </div>
  );
};

export default DialogMessages;
