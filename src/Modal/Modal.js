import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        //que queremos teletransportar:
        <div className="modal-todos">
            {children}
        </div>,
        //a donde queremos teletransportarlo:
        document.getElementById('modal-todos')
    )
}

export {Modal}