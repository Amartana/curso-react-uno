import React from "react";
import "./todoSearch.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  const prop = React.useContext(TodoContext)
  return (
    <form className='search'
      onSubmit={(event) => {
        event.preventDefault();
        prop.setSearchValue('')
      }}
    >
      <input
        placeholder="Aprender react"
        value={prop.searchValue}
        onChange={(event) => {
          prop.setSearchValue(event.target.value)
        }}
        className="ingreso-busqueda"
      />
      <input translate="no" type="submit" value="New search 🔍"
        className="boton-busqueda"
      />
    </form>
  )
}
export { TodoSearch };

