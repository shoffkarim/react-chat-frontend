import { MessageBD } from "interfaces/message";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "redux/actions/Messages";
import { RootState } from "redux/store";
import Message from "./Message";

interface DialogMessagesProps {
  chatId: number;
}

const DialogMessages: React.FC<DialogMessagesProps> = ({ chatId }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMessages(chatId));
  }, [dispatch, chatId]);

  const messages: MessageBD[] = useSelector(
    (state: RootState) => state.Messages.items
  );

  return (
    <div className="dialog-messages">
      {messages && messages.map((obj, index) =>
          <Message
            user_id={obj.user_id}
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


