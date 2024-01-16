import "./todoItems.css"

function TodoItem({completed, text, completeTodo, deleteTodo}){
    return (
      <li>
        <span 
        className={`palomita ${completed && 'palomita-complete'}`} 
        onClick={completeTodo}
        > ✔ </span>
        <span className={`text ${completed && 'text-complete'}`}>{text}</span>
        <button 
        className="x"
        onClick={deleteTodo}
        > x </button>
      </li>
    );
  }

  export { TodoItem }