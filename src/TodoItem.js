function TodoItem({completed, text}){
    return (
      <li>
        <span>V </span>
        <span>{text}</span>
        <span>X</span>
      </li>
    );
  }

  export { TodoItem }