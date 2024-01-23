import React from 'react';
import {AppUI} from './AppUI';
import { useLocalStorageCH } from './useLocalStorageCH';

// const defaultTodos = [
//   {text: 'Hacer algo', completed: false},
//   {text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusamus deleniti aspernatur consequatur repudiandae quidem nisi sequi vel. Soluta, alias. Repellat velit rerum sit minus deserunt sint quos nihil ut.', completed: true},
//   {text: 'Comer la picada', completed: false},
//   {text: 'Mirar a mi amorcito cocinar los sorrentinos', completed: true},
//   {text: 'Uno mas', completed: true},
// ]

//--------- Los custom hooks suelen ir en archivos separados, como si fuera otro componente y se exportan e importan.



//componente de React: SIEMPRE EMPIEZAN CON MAYUSCULA
function App() {   

// -------------------PASAMOS EL MANEJO DEL LOCALSTORAGE A UN CUSTOM HOOK -----------------

// Guardar y extraer los datos del localStorage:
//   const localStorageTodos = window.localStorage.getItem('TODOS')
// let parseTodos 
// if (!localStorageTodos) {
//   parseTodos = [];
//   window.localStorage.setItem('TODOS', JSON.stringify(parseTodos))
// } else {
//   parseTodos = JSON.parse(localStorageTodos)
// }
  
//   const saveTodos = (tds) => {
//     window.localStorage.setItem('TODOS', JSON.stringify(tds))
//     setTodos(tds)
//   }
// -----------------------------------------------------------------------------------------

//-------------------- Ya no necesito el state de los todos porque lo tengo en el custom hook ----------
//  //STATE DEL ARRAY DE TODOS:
// const [todos, setTodos] = React.useState(parseTodos);
//-----------------------------------------------------------------------------------------------------

   //USO EL CUSTOM HOOK: 
  const [todos, saveTodos] = useLocalStorageCH('TODOS', [])
/* use el desestructurador para asignar a las variables todos y saveTodos, los elementos retornados por el custom hook */

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
    const newArrayTodos = [...todos]
    newArrayTodos.push({text: newTodo, completed:false})
    saveTodos(newArrayTodos)
    setNewTodo('')
  } {/* setNewTodo('') tengo que hacer eso para actualizar un nuevo estado porque sino no termina de renderizar.
tambien establever el value del input como el estado actual. */}
    

  function completeTodo(index) {
    const newArrayTodos = [...todos]
    newArrayTodos[index].completed !== true ? newArrayTodos[index].completed = true : newArrayTodos[index].completed = false
    saveTodos(newArrayTodos)
  } // ----> La función completeTodo toma un parámetro text que representa el texto de una tarea en una lista de todos. La función busca la tarea en el array todos que tenga el texto proporcionado. Luego, crea una copia del array todos utilizando el operador de propagación ([...todos]). Después, invierte el estado de completitud (completed) de la tarea encontrada: si está actualmente marcada como completada, la marca como no completada, y viceversa. Finalmente, actualiza el estado de todos con la nueva copia del array que refleja el cambio en la tarea completada.

  function deleteTodo(index) {
    const newArrayTodos = [...todos]
    newArrayTodos.splice(index,1)
    saveTodos(newArrayTodos)
  }
  
  return (
    < AppUI 
    totalTodos={totalTodos}
    completeTodos={completeTodos}
    searchTodos={searchTodos}
    crearNewTodo={crearNewTodo}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    setNewTodo={setNewTodo}
    newTodo={newTodo}
    />
  )
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

