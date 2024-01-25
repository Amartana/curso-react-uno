import React from 'react'
import './todoCounter.css'
import { CgSandClock } from "react-icons/cg";
import { TodoContext } from '../TodoContext/TodoContext'

function TodoCounter(){

    const {totalTodos: total, completeTodos: completed, loading}  = React.useContext(TodoContext)

    let msj = ''
    
    if(loading){
      msj = <p className='h2'>Cargando... <CgSandClock color='grey' size={20}/></p>
    } else if (total === 0) {
      msj = 'No tienes TASKs pendientes. Add TASK para comenzar.'
    } else if (total === completed) {
      msj = 'Bien hecho, ¡¡Haz completado todas tus TASKs!!'
    } else {
      msj = <>
        Has completado {<span className="contador-num">{completed}</span>}  / {<span className="contador-num">{total}</span>} TASKs
      </>
    }

    return (
      <>
      <h2>
        {msj}
      </h2>
      </>
    )

    // return(
    //   <>
    //  {total != completed && (
    //   <h2>
    //   Has completado <span className="contador-num">{completed}</span>  / <span className="contador-num">{total}</span> TASKs 
    //   </h2>
    //    )
    //  }  
    //     {total == completed && (
    //   <h2>
    //   No tienes TASKs pendientes!!
    //   </h2>
    //    )
    //  }  
    // </>
    // )
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