import React from 'react';
import "./message.sass";
import classNames from 'classnames';
import avatar from "assets/img/default-avatar.jpg";

interface MessageProps {
  isMy: boolean
}

const Message: React.FC<MessageProps> = ({isMy}) => {
  return (
    <div className={classNames("message", isMy ? "my" : "friend")}>
      <div className="message-wrapper">
        {!isMy &&
          <div className="message__avatar">
            <img src={avatar} alt="" />
          </div>
        }
        <div className="message__bubble">
          <p>Hello, World!</p>
        </div>
      </div>
      <div className="message__time">
        3 min ago
      </div>
    </div>
  )
}

export default Message
