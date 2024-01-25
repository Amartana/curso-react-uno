import React from 'react';
import {AppUI} from './AppUI';
import { TodoContextProvider } from '../TodoContext/TodoContext';

function App() {   
  return (
    <TodoContextProvider>
       <AppUI/>
    </TodoContextProvider>
  )
}

export default App;

