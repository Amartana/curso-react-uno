import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  {text: 'Hacer algo', completed: false},
  {text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusamus deleniti aspernatur consequatur repudiandae quidem nisi sequi vel. Soluta, alias. Repellat velit rerum sit minus deserunt sint quos nihil ut.', completed: true},
  {text: 'Comer la picada', completed: false},
  {text: 'Mirar a mi amorcito cocinar los sorrentinos', completed: true},
  {text: 'Uno mas', completed: true},
]

//componente de React: SIEMPRE EMPIEZAN CON MAYUSCULA
function App() {   
  //STATE DEL ARRAY DE TODOS:
  const [todos, setTodos] = React.useState(defaultTodos);
  //STATE DEL SEARCH:
  const [searchValue, setSearchValue] = React.useState('');
  //SATE DEL NEW TODO:
  const [newTodo, setNewTodo] = React.useState('')

  //ESTADOS DERIVADOS: (son operaciones que hacemos con los states)
  const totalTodos = todos.length;
  const completeTodos = todos.filter(todo=>!!todo.completed).length;

  const searchTodos = todos.filter(todo=>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())  
    )

  //FUNCION PARA CREAR TODOS:      IMPORTANTE!! Una vez que le asigno a un valor inicial de una variable, un set, siempre para usar esa variable tengo que usar el state. En este caso seria usar todos (el state) y no defaultTodos(el valor inicial)
  function crearNewTodo(){
    todos.push({text: newTodo, completed:false})
    setNewTodo('')
  } {/* setNewTodo('') tengo que hacer eso para actualizar un nuevo estado porque sino no termina de renderizar.
tambien establever el value del input como el estado actual. */}
    

  function completeTodo(index) {
    const newArrayTodos = [...todos]
    newArrayTodos[index].completed != true ? newArrayTodos[index].completed = true : newArrayTodos[index].completed = false
    setTodos(newArrayTodos)
  } // ----> La función completeTodo toma un parámetro text que representa el texto de una tarea en una lista de todos. La función busca la tarea en el array todos que tenga el texto proporcionado. Luego, crea una copia del array todos utilizando el operador de propagación ([...todos]). Después, invierte el estado de completitud (completed) de la tarea encontrada: si está actualmente marcada como completada, la marca como no completada, y viceversa. Finalmente, actualiza el estado de todos con la nueva copia del array que refleja el cambio en la tarea completada.

  function deleteTodo(index) {
    const newArrayTodos = [...todos]
    newArrayTodos.splice(index,1)
    setTodos(newArrayTodos)
  }
  
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


//Creamos un nuevo componente: (LO CAMBIAMOS DE ARCHIVO DESPUES)
// function TodoItem(){
//   return (
//     <li>
//       <span>V</span>
//       <span>Llorar con la llorona</span>
//       <span>X</span>
//     </li>
//   );
// }

//export con default, lo mejor es con {}, pero estaba asi ya el proyecto asi que lo dejamos.
export default App;

