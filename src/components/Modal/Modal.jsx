import React from "react";

export const Modal = (props) => {
  return props.show ? (
    <div className="modal">
      <div className="modal-center">
        <div className="modal-header">
          <h2>{props.title ? props.title : `Modal heading`}</h2>
          <button onClick={() => props.onClose()}>X</button>
        </div>

        <div className="modal-content"> {props.children}</div>
      </div>
    </div>
  ) : null;
};
