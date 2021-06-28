import React from "react";
import "./DialogInput.sass";
import "./Smiles.sass";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import classNames from "classnames";
import axios from "axios";

interface IDialodInput {
  chatId: number;
}

const DialogInput: React.FC<IDialodInput> = ({chatId}) => {
  const [emojiVisible, setEmojiVisible] = React.useState(false);
  const [messageValue, setMessageValue] = React.useState("");

  const addEmoji = (emoji: any) => {
    setMessageValue(messageValue + emoji.native);
    setEmojiVisible(!emojiVisible);
  };

  const newMessage = JSON.stringify({
    chat_id: chatId,
    user_id: 1,
    content: messageValue,
    date_create: new Date(),
    is_read: true
  });
  const sendMessage = () => {
    axios.post('http://localhost:3001/messages/', JSON.parse(newMessage));
  }
  return (
    <div className="dialog-input">
      <div className="input-wrapper">
        <div className="input-container">
          <textarea
            className="input"
            name=""
            id=""
            placeholder="Type your message ..."
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          ></textarea>
          <div className="smiles-wrapper">
            <button
              className={classNames(
                "smiles-icon",
                emojiVisible ? "active" : ""
              )}
              onClick={() => setEmojiVisible(!emojiVisible)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                ></path>
              </svg>
            </button>
            {emojiVisible && (
              <Picker
                set={"apple"}
                onSelect={(emoji) => addEmoji(emoji)}
                showPreview={false}
              />
            )}
          </div>
        </div>
        <div className="input-send">
          <button className="button-send" onClick={() => sendMessage()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogInput;
