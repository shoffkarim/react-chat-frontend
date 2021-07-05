import classNames from "classnames";
import Axios from "axios";
import { Time } from "components";
import React from "react";
import { MessageBD } from "interfaces/message";
import "./Dialog.sass";
import { UserBD } from "interfaces/user";
interface IDialogItem {
  user_id: number;
  chat_id: number;
  message_id: number;
  activeChat: number
  selectChat: (arg0: number) => void
}

const DialogItem: React.FC<IDialogItem> = ({ user_id, chat_id, message_id, activeChat, selectChat }) => {
  let emptyMessage: MessageBD = {
    id: 0,
    chat_id: 0,
    user_id: 0,
    content: "",
    date_create: "Wed May 26 2021 18:51:11 GMT+0500 (Екатеринбург, стандартное время)",
    is_read: false
  }
  let emptyUser: UserBD = {
    id: 0,
    name: "",
    login: "",
    password: "",
    last_seen: "",
    avatar: "",
    created_at: "",
    online: false
  }
  const [message, setMessage] = React.useState(emptyMessage);
  const [user, setUser] = React.useState(emptyUser);
  React.useEffect(() => {
    Axios.get(`/messages?id=${message_id}`)
    .then(({data}) => setMessage(data[0]));
    Axios.get(`/users?id=${user_id}`)
    .then(({data}) => setUser(data[0]));
  }, [message_id, user_id]);

  return (
    <div className={classNames("dialogs-item", activeChat === chat_id ? "active" : "")} onClick={() => selectChat(chat_id)}>
      <div className={classNames("dialogs-item__avatar", user.online? "online" : "")}>
        <img src={user.avatar} alt="" />
      </div>
      <div className="dialogs-item__wrapper">
        <div className="dialogs-item__top">
          <p className="dialogs-item__name">{user.name}</p>
          <p className="dialogs-item__time">
            <Time date={new Date(message.date_create)} prefix={true}/>
          </p>
        </div>
        <div className="dialogs-item__bottom">
          <p
            className={classNames(
              "dialogs-item__text",
              message.is_read ? "gray" : "dark"
            )}
          >
            {message.content}
          </p>
          {!message.is_read && <div className="dialogs-item__status"></div>}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
