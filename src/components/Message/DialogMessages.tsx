import { MessageBD } from "interfaces/message";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "redux/actions/Messages";
import { RootState } from "redux/store";
import Message from "./Message";

interface DialogMessagesProps {
  chatId: number;
  messageCount: number;
}

const DialogMessages: React.FC<DialogMessagesProps> = ({
  chatId,
  messageCount,
}) => {
  const [count, setCount] = React.useState(messageCount);
  const window = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();


  if (count !== messageCount) {
    setCount(messageCount);
  }

  React.useEffect(() => {
    dispatch(fetchMessages(chatId));
  }, [dispatch, chatId, count]);

  const messages: MessageBD[] = useSelector(
    (state: RootState) => state.Messages.items
  );

  return (
    <div className="dialog-messages" ref={window}>
      {messages &&
        messages.map((obj, index) => (
          <Message
            user_id={obj.user_id}
            date={new Date(obj.date_create)}
            send={true}
            readed={obj.is_read}
            text={obj.content}
            key={index}
          />
        ))}
    </div>
  );
};

export default DialogMessages;
