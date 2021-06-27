import { ButtonSend } from "components";
import React from "react";
import "./DialogInput.sass";
import "./Smiles.sass";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import classNames from "classnames";


const DialogInput: React.FC = () => {
  const [emojiVisible, setEmojiVisible] = React.useState(false);
  const [messageValue, setMessageValue] = React.useState("")

  const addEmoji = (emoji: any) => {
    setMessageValue(messageValue + emoji.native)
    setEmojiVisible(!emojiVisible)
  };


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
            onChange={e => setMessageValue(e.target.value)}
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
          <ButtonSend />
        </div>
      </div>
    </div>
  );
};

export default DialogInput;
