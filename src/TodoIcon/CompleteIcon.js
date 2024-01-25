import React from "react";
import { TodoIcon } from './TodoIcon'

function CompleteIcon({ completeTodo, completed }) {
    return (
        <TodoIcon
            type="check"
            onClick={completeTodo}
            completed={completed}
        />
    )
}

export { CompleteIcon }