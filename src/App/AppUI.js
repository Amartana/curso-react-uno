
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


function AppUI() {
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

        <>
            <TodoCounter />
            <TodoSearch />
            {modal &&
                <Modal>
                    <TodoEnModal />
                </Modal>}
            <main>
                <>
                    <TodoList>
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
                                key={index}
                                text={todo.text}
                                completed={todo.completed}
                                completeTodo={() => completeTodo(index)}
                                deleteTodo={() => deleteTodo(index)}
                                modalOpenClose={() => modalOpenClose(index)}
                            />
                        ))}
                    </TodoList>
                    <CreateTodo
                        setNewTodo={setNewTodo}
                        newTodo={newTodo}
                        crearNewTodo={() => crearNewTodo()}
                    />
                </>
            </main>
        </>
    );
}

export { AppUI };