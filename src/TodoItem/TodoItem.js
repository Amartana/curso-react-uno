import { CompleteIcon } from '../TodoIcon/CompleteIcon.js'
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js'

import "./todoItems.css"

function TodoItem({ completed, text, completeTodo, deleteTodo, modalOpenClose }) {
  return (
    <li>
      <CompleteIcon
        completeTodo={completeTodo}
        completed={completed}
      />

      <span
        className={`text ${completed && 'text-complete'}`}
        onClick={modalOpenClose}
      >{text}</span>

      <DeleteIcon
        deleteTodo={deleteTodo}
      />
    </li>
  );
}

export { TodoItem }