import React from "react";
import { TodoIcon } from './TodoIcon'

function DeleteIcon({deleteTodo}) {
    return (
        <TodoIcon 
            type="delete"
            onClick={deleteTodo}
        />
    )
}

export { DeleteIcon }