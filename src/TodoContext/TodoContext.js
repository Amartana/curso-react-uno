import React, { useDeferredValue } from "react";
import { useLocalStorageCH } from "./useLocalStorageCH";


const TodoContext = React.createContext()

function TodoContextProvider({ children }) {
  //CUSTOM HOOK: 
  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorageCH('TODOS', [])

  //STATE DEL SEARCH:
  const [searchValue, setSearchValue] = React.useState('');
  //SATE DEL NEW TODO:
  const [newTodo, setNewTodo] = React.useState('')
  //STATE DEL MODAL:
  const [modal, setModal] = React.useState(false)
  //STATE CONTENIDO DEL MODAL:
  const [todoModal, setTodoModal] = React.useState({})


  //ESTADOS DERIVADOS: 
  const totalTodos = todos.length;
  const completeTodos = todos.filter(todo => !!todo.completed).length;

  const searchTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  //CREAR TODOS:
  function crearNewTodo() {
    const newArrayTodos = [...todos]
    newArrayTodos.push({ text: newTodo, completed: false })
    saveTodos(newArrayTodos)
    setNewTodo('')
  }

  function completeTodo(text) {
    const newArrayTodos = [...todos]
    const i = newArrayTodos.findIndex((todo)=>
      todo.text === text
    )
    newArrayTodos[i].completed !== true ? newArrayTodos[i].completed = true : newArrayTodos[i].completed = false
    saveTodos(newArrayTodos)
  }

  function deleteTodo(text) {
    const newArrayTodos = [...todos]
    const i = newArrayTodos.findIndex((todo)=>
      todo.text === text
    )
    newArrayTodos.splice(i, 1)
    saveTodos(newArrayTodos)
  }

  function modalOpenClose(text) {
    const i = todos.findIndex((todo) => todo.text === text)
    setModal(!modal)
    setTodoModal(todos[i])
  }

  return (
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
  )
}
export { TodoContext, TodoContextProvider };