import { CompleteIcon } from '../TodoIcon/CompleteIcon.js'
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js'

import "./todoItems.css"

function TodoItem({completed, text, completeTodo, deleteTodo}){
    return (
      <li>
        <CompleteIcon 
          completeTodo= {completeTodo}
          completed={completed}
        />
        {/* <span 
        className={`check ${completed && 'check-complete'}`} 
        onClick={completeTodo}
        > ✔ </span> */}

        <span className={`text ${completed && 'text-complete'}`}>{text}</span>

        <DeleteIcon 
          deleteTodo= {deleteTodo}
        />
        {/* <button 
        className="delete"
        onClick={deleteTodo}
        > x </button> */}

      </li>
    );
  }

  export { TodoItem }