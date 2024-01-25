
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { TodoItem } from '../TodoItem/TodoItem';
import { Loading } from '../Loading/Loading'
import { Errors } from '../Errors/Errors'
import { CreaTuPrimerTodo } from '../CreaTuPrimerTodo/CreaTuPrimerTodo'
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';
import { TodoEnModal } from '../TodoEnModal/TodoEnModal';



function AppUI(){
    const {
        loading,
        error,
        searchTodos,
        crearNewTodo,
        completeTodo,
        deleteTodo,
        setNewTodo,
        newTodo,
        modalOpenClose,
        modal,
    } = React.useContext(TodoContext)

    return (
    //en lugar de retornar un div con todos los componentes, retornamos un Fragment que es invisible en html. Porque no podemos retornar todos los componentes, React solo nos permite retornar UN elemento.
    // Comentamos el div:
    //<div className="App">
    <>
 {/* Para insertar los componentes: < NombreDelComponente />
                                 o  < NombreDelComponente> </NombreDelComponente>
 Lo podemos insertar tantas veces como queramos y borrarlo.*/}

 {/* ATAJO DEL TECLADO❗❗❗ seleccionamos el componente que queremos importar y hacemos ctrl + space, despues damos enter y js nos importa automaticamente el componente */}
      <TodoCounter />
      
      <TodoSearch />

      {modal && 
        <Modal>
            <TodoEnModal />
        </Modal>}
      
      <main>
            <>
                <TodoList>
                {/* TODO ESTO SERIA CONDICIONAL: */}
                    {loading &&
                        <>
                            <Loading />
                            <Loading />
                            <Loading />
                        </>
                    }
                    {error && <Errors />}
                    {(!loading && searchTodos.length === 0) && <CreaTuPrimerTodo />}
                    {searchTodos.map((todo, index) => (
                        <TodoItem 
                        key={index} /* → para renderizar un array tengo agregarles una prop KEY que tiene que identificar a cada elemento del array, es decir que tiene que ser diferente para cada elemento */
                        text={todo.text}
                        completed={todo.completed} 
                        completeTodo= {()=> completeTodo(index)}
                        deleteTodo={()=> deleteTodo(index)}
                        modalOpenClose={()=> modalOpenClose(index)}
                        /> 
                    ))}
                </TodoList>
            
        <CreateTodo 
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        crearNewTodo={()=>crearNewTodo()}
        />
        </>
      </main>
      </>
   // </div>
  );
}

export { AppUI };