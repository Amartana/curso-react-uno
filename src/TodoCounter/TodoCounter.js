import React from 'react'
import './todoCounter.css'
import { CgSandClock } from "react-icons/cg";
import { TodoContext } from '../TodoContext/TodoContext'

function TodoCounter() {

  const { totalTodos: total, completeTodos: completed, loading } = React.useContext(TodoContext)

  let msj = ''

  if (loading) {
    msj = <p className='h2'>Cargando... <CgSandClock color='grey' size={20} /></p>

  } else if (total === 0) {
    msj =
     <span className="h3" >No tienes TASKs pendientes. Add TASK para comenzar</span>

  } else if (total === completed) {
       msj =
     <span className="h3">Bien hecho, ¡¡Haz completado todas tus TASKs!!</span>

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
}

export { TodoCounter };