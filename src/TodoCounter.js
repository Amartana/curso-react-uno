import './todoCounter.css'

function TodoCounter({total, completed}){

    return(
      <>
     {total != completed && (
      <h2>
      Has completado <span className="contador-num">{completed}</span>  / <span className="contador-num">{total}</span> TASKs 
      </h2>
       )
     }  
        {total == completed && (
      <h2>
      No tienes TASKs pendientes!!
      </h2>
       )
     }  
    </>
    )
  }

  //en lugar de usar el export default usamos el export {}
  export { TodoCounter };
        //asi, al importarlo, vamos a tener que llamarlo si so si con ese nombre


        {/*
      function TodoHeader({ completedTodos, totalTodos }) {

  let completionMsg = "";
  if (totalTodos === 0) {
    completionMsg = "❄️ No hay tareas pendientes";
  } else if (completedTodos === totalTodos) {
    completionMsg = "🥳 Todas las tareas completadas";
  } else {
    completionMsg = `Tasks: ${completedTodos} of ${totalTodos} completed`;
  }

  return (
    <div className="header">
      <h1>To-Do App</h1>
      <p className="TodoCounter">{completionMsg}</p>
    </div>
  );
}
      */}