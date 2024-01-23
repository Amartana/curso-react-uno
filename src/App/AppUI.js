
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { TodoItem } from '../TodoItem/TodoItem';

function AppUI({
    totalTodos, 
    completeTodos,
    searchTodos,
    crearNewTodo,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
    setNewTodo,
    newTodo,
}){

    return (
    //en lugar de retornar un div con todos los componentes, retornamos un Fragment que es invisible en html. Porque no podemos retornar todos los componentes, React solo nos permite retornar UN elemento.
    // Comentamos el div:
    //<div className="App">
    <React.Fragment>
 {/* Para insertar los componentes: < NombreDelComponente />
                                 o  < NombreDelComponente> </NombreDelComponente>
 Lo podemos insertar tantas veces como queramos y borrarlo.*/}

 {/* ATAJO DEL TECLADO❗❗❗ seleccionamos el componente que queremos importar y hacemos ctrl + space, despues damos enter y js nos importa automaticamente el componente */}
      <TodoCounter completed = {completeTodos} total = {totalTodos} />
      
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <main>
        <TodoList>
          {searchTodos.map((todo, index) => (
            <TodoItem 
            key={index}    
            text={todo.text}
            completed={todo.completed}
            completeTodo= {()=> completeTodo(index)}
            deleteTodo={()=> deleteTodo(index)}
            /> 
          ))}
        </TodoList>
  {/* para renderizar un array tengo agregarles una prop KEY que tiene que identificar a cada elemento del array, es decir que tiene que ser diferente para cada elemento */}

        <CreateTodo 
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        crearNewTodo={()=>crearNewTodo()}
        />
      </main>
      </React.Fragment>
   // </div>
  );
}

export { AppUI };