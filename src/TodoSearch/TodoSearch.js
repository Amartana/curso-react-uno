import React from "react";
import "./todoSearch.css"

function TodoSearch(prop){
  {/*  const [] se usa para desestructurar arrays */}

    return(
      <form className='search'>
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

   