function TodoCounter({total, completed}){
    return(
      <h1>Haz completado {completed} / {total} Todos </h1>
    )
  }

  //en lugar de usar el export default usamos el export {}
  export { TodoCounter };
        //asi, al importarlo, vamos a tener que llamarlo si so si con ese nombre