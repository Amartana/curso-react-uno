import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoEnModal.css'
import { CloseIcon } from "../TodoIcon/CloseIcon";

function TodoEnModal() {
    const { todoModal, modalOpenClose } = useContext(TodoContext)
    console.log(todoModal)
    return (
        <>
            <p> {todoModal.text}</p>
            <span>
                <CloseIcon
                    modalOpenClose={modalOpenClose}
                /> </span>
        </>
    )
} 

export { TodoEnModal }