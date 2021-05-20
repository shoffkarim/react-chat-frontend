import classNames from "classnames";
import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import "./Dialog.sass";

interface IUser {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
}

interface IMessage {
  text: string;
  created_at: Date;
  isReaded: boolean;
}

interface IDialogItem {
  user: IUser;
  message: IMessage;
}

const DialogItem: React.FC<IDialogItem> = ({ user, message }) => {
  return (
    <div className={classNames("dialogs-item")}>
      <div className={classNames("dialogs-item__avatar", user.isOnline? "online" : "")}>
        <img src={user.avatar} alt="" />
      </div>
      <div className="dialogs-item__wrapper">
        <div className="dialogs-item__top">
          <p className="dialogs-item__name">{user.name}</p>
          <p className="dialogs-item__time">
            {formatDistanceToNowStrict(message.created_at, { addSuffix: true })}
          </p>
        </div>
        <div className="dialogs-item__bottom">
          <p
            className={classNames(
              "dialogs-item__text",
              message.isReaded ? "gray" : "dark"
            )}
          >
            {message.text}
          </p>
          {!message.isReaded && <div className="dialogs-item__status"></div>}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
