import { MessageBD } from "interfaces/message";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "redux/actions/Messages";
import { RootState } from "redux/store";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
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
  const scroller = React.useRef<any>(null);
  const dispatch = useDispatch();

  if (count !== messageCount) {
    setCount(messageCount);
  }

  React.useEffect(() => {
    try {
      dispatch(fetchMessages(chatId));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        if (scroller.current !== null) {
          scroller.current.scrollTop = scroller.current.scrollHeight;
        }
      }, 100);
    }
  }, [dispatch, chatId, count]);
  const messages: MessageBD[] = useSelector(
    (state: RootState) => state.Messages.items
  );

  return (
    <SimpleBar style={{ maxHeight: "calc(100% - 90px)"}} scrollableNodeProps={{ref: scroller}}>
      <div className="dialog-scroller">
        <div className="dialog-messages">
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
      </div>
    </SimpleBar>
  );
};

export default DialogMessages;
