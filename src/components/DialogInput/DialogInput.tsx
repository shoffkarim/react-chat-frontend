import { ButtonSend, Smiles } from "components";
import React from "react";
import "./DialogInput.sass";

const DialogInput: React.FC = () => {
  return (
    <div className="dialog-input">
      <div className="input-wrapper">
        <div className="input-container">
          <textarea
            className="input"
            name=""
            id=""
            placeholder="Type your massage ..."
          ></textarea>
          <Smiles />
        </div>
        <div className="input-send">
          <ButtonSend />
        </div>
      </div>
    </div>
  );
};

export default DialogInput;
