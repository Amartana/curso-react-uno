import React from "react";
import "./todoSearch.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch(){
  {/*  const [] se usa para desestructurar arrays */}
    const prop = React.useContext(TodoContext) 
    return(
      <form className='search'
        onSubmit={(event)=>{
          event.preventDefault();
          prop.setSearchValue('')}}
      >
        <input 
        placeholder="Aprender react"
        value={prop.searchValue}
        onChange={(event)=> {
          prop.setSearchValue(event.target.value)
          // console.log("ingresaste datos en search")
          // console.log(event)
          // console.log(event.target)
          // console.log(event.target.value)
        }}
        className="ingreso-busqueda"
        />
        <input type="submit" value= "New search 🔍" 
        className="boton-busqueda"
        />
      </form>
    )
  }
  export { TodoSearch };

   