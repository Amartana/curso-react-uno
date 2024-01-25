import React from "react";
import { TodoIcon } from './TodoIcon'

function CloseIcon({modalOpenClose}) {
    return (
        <TodoIcon 
            type="close"
            onClick={modalOpenClose}
        />
    )
}

export { CloseIcon }