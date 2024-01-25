import React from 'react';
import {AppUI} from './AppUI';
import { TodoContextProvider } from '../TodoContext/TodoContext';

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
  return (
    <TodoContextProvider>
       <AppUI/>
    </TodoContextProvider>
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

