import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';

const defaultTodos = [
  {text: 'Hacer algo', completed: false},
  {text: 'Hacer otra cosa', completed: false},
  {text: 'Hacer ir al cumple de ale', completed: false},
  {text: 'Ir a lo de mama', completed: false},
  {text: 'Uno mas', completed: false},
]

//componente de React: SIEMPRE EMPIEZAN CON MAYUSCULA
function App() {
  //esto ya no es un componente, es lo que retorna el componente:
  return (
    
    //en lugar de retornar un div con todos los componentes, retornamos un Fragment que es invisible en html. Porque no podemos retornar todos los componentes, React solo nos permite retornar UN elemento.
    // Comentamos el div:
    //<div className="App">
    <React.Fragment>
 {/* Para insertar los componentes: < NombreDelComponente />
                                 o  < NombreDelComponente> </NombreDelComponente>
 Lo podemos insertar tantas veces como queramos y borrarlo.*/}

 {/* ATAJO DEL TECLADO❗❗❗ seleccionamos el componente que queremos importar y hacemos ctrl + space, despues damos enter y js nos importa automaticamente el componente */}
      <TodoCounter completed = {16} total = {25} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          /> 
        ))}
      </TodoList>

      <CreateTodoButton />

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

