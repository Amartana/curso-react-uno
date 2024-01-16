import './todoList.css'

function TodoList({children}){
    return(
      <ul> 
        {/* Con esto podemos despues agregar los li de la ul.
        React transforma todo lo que esta dentro de un elemento en la propiedad children */}
        {children}
      </ul>
    )
  }
  export { TodoList };