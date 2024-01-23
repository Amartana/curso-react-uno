import React from "react";

function useLocalStorageCH(itemName, valorInicial) {
    /* Yo decido que parametros neccesita mi custom hoook, en este caso itemName es la key en la que voy a guardar la informacion en el objeto JSON, y el valor inicial es el valor inicial que va a tener cuando no haya nada guardado. Osea, va a ser 'TODOS' y un array vacio, pero la idea es abstraer para reutilizar, asi que eso lo defino despues cuando uso el useLocalStorageCH*/
    const localStorageTodos = window.localStorage.getItem(itemName)
    let parseItem 
    if (!localStorageTodos) {
      parseItem = valorInicial;
      window.localStorage.setItem(itemName, JSON.stringify(parseItem))
    } else {
      parseItem = JSON.parse(localStorageTodos)
    }
     
    //Defino el state aca para poder usar la variable parseItem como valor inicial del state:
    const [item, setItem] = React.useState(parseItem)
  
  
    const saveItems = (tds) => {
      window.localStorage.setItem(itemName, JSON.stringify(tds))
      setItem(tds)
   }
      //Retorno en un array para poder desestructurarlo y asignar a los elementos a una variable despues
      return [item, saveItems]
  }

  export { useLocalStorageCH }
  