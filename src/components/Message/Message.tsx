import React from "react";
import "./message.sass";
import classNames from "classnames";
import avatar from "assets/img/default-avatar.jpg";
import { Time } from "components";

interface Photos {
  id: number,
  url: string
}
interface MessageProps {
  isMy: boolean;
  date: Date;
  send?: boolean;
  readed?: boolean;
  text?: string;
  attachments?: Array<Photos>;
}

const Message: React.FC<MessageProps> = ({ isMy, send, readed, text, attachments, date }) => {
  return (
    <div className={classNames("message", isMy ? "my" : "friend")}>
      <div className="message-wrapper">
        {!isMy && (
          <div className="message__avatar">
            <img src={avatar} alt="" />
          </div>
        )}
        {text && (
          <div className="message__bubble">
            <p>{text}</p>
          </div>
        )}
      </div>
      {attachments && (
          <div className="message__attachments">
            {attachments.map((obj, index) =>
              <img src={obj.url} alt="" key={index} />
            )}

          </div>
        )}
      <div className="message-bottom">
        <div className="message__time">
          <Time date={date} prefix={true}/>
        </div>
        {isMy && (
          <div
            className={classNames(
              "message-status",
              send ? "send" : "",
              readed ? "readed" : ""
            )}
          >
            <svg
              width="15"
              height="10"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="firstArrow"
                x1="11.9649"
                y1="19.8587"
                x2="18.8841"
                y2="0.829141"
                stroke="black"
              />
              <line
                className="firstArrow"
                x1="5.39872"
                y1="11.5593"
                x2="12.036"
                y2="20.3312"
                stroke="black"
              />
              <line
                className="secondArrow"
                x1="6.96919"
                y1="19.8587"
                x2="13.8885"
                y2="0.829141"
                stroke="black"
              />
              <line
                className="secondArrow"
                x1="0.403056"
                y1="11.5593"
                x2="7.04036"
                y2="20.3312"
                stroke="black"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
