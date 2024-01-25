import React from "react";
import { useLocalStorageCH } from "./useLocalStorageCH";

//CREAMOS EL CONTEXTO (lo usamos para crear el provider y pasar la info al final de la funcion que sigue):
const TodoContext = React.createContext()

//FUNCION PARA CREAR EL PROVIDER Y PODER PASAR LA INFO:
function TodoContextProvider({children}){

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
   const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorageCH('TODOS', [])
/* use el desestructurador para asignar a las variables todos y saveTodos, los elementos retornados por el custom hook */

  //STATE DEL SEARCH:
  const [searchValue, setSearchValue] = React.useState('');
  //SATE DEL NEW TODO:
  const [newTodo, setNewTodo] = React.useState('')
  //STATE DEL MODAL:
  const [modal, setModal] = React.useState(false)
  //STATE CONTENIDO DEL MODAL:
  const [todoModal ,setTodoModal] = React.useState({})


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

  function modalOpenClose(index){
    setModal(!modal)
    setTodoModal(todos[index])
  }


  
return(
    <TodoContext.Provider value={{
        loading,
        error,
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
        todoModal,
        modalOpenClose,
        modal
    }}>
        {children}
    </TodoContext.Provider>
)}
export { TodoContext, TodoContextProvider };