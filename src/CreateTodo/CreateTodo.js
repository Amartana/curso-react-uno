import "./createTodo.css"

function CreateTodo({setNewTodo, crearNewTodo, newTodo}){
    return (

        //MUY MAL!! ME FALTO EL LABEL!!!
        <div className="container">
        <textarea 
        className="input-agregar" 
        type="text" 
        value={newTodo}
        placeholder="Algo nuevo y super interesante"
        onChange={(event)=>{
            setNewTodo(event.target.value)
        }}
        />
        <button 
        className="create-mobile" 
        onClick={
            ()=> {
                newTodo.length > 0 && crearNewTodo()
            }
        }
        > ➕ </button>
        <button 
        className="create" 
        onClick={
            ()=> {
                newTodo.length > 0 && crearNewTodo()
            }
        }
        > Add Task </button>
        </div>
    )
}
export { CreateTodo };