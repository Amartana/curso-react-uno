import "./createTodo.css"

function CreateTodo({setNewTodo, crearNewTodo, newTodo}){
    return (
        <div className="container">
        <input 
        className="input-agregar" 
        type="text" 
        value={newTodo}
        placeholder="Algo nuevo y super interesante"
        onChange={(event)=>{
            setNewTodo(event.target.value)
            console.log(event.target.value)
        }}
        />
        <button 
        className="create" 
        onClick={crearNewTodo}
        > Add Task </button>
        </div>
    )
}
export { CreateTodo };