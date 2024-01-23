import React from "react";

function useLocalStorageCH(itemName, valorInicial) {
    /* Yo decido que parametros neccesita mi custom hoook, en este caso itemName es la key en la que voy a guardar la informacion en el objeto JSON, y el valor inicial es el valor inicial que va a tener cuando no haya nada guardado. Osea, va a ser 'TODOS' y un array vacio, pero la idea es abstraer para reutilizar, asi que eso lo defino despues cuando uso el useLocalStorageCH*/
    const [item, setItem] = React.useState(valorInicial)

    const [loading, setLoading] = React.useState(true)

    const [error, setError] = React.useState(false)

   


    React.useEffect( ()=> {
      try {
        // sacar el setTimeout, era solo para ver el cartel de carga
        setTimeout(() => {
          
        const localStorageTodos = window.localStorage.getItem(itemName)

        let parseItem 
  
        if (!localStorageTodos) {
          parseItem = valorInicial;
          window.localStorage.setItem(itemName, JSON.stringify(parseItem))
        } else {
          parseItem = JSON.parse(localStorageTodos)
          setItem(parseItem)
        }
  
        setLoading(false)
        }, 2000);
      }
      catch(error) {
        setLoading(false)
        setError(true)
        //ni idea de si esto se haria asi, no se como simular un error para probarlo:
        alert(`${error}: Reinicia la pagina o buscate otra app porque ni idea!`)
      }

    }, []
    )

    
    
  
  
    const saveItems = (tds) => {
      window.localStorage.setItem(itemName, JSON.stringify(tds))
      setItem(tds)
   }
      //Retorno en un array para poder desestructurarlo y asignar a los elementos a una variable despues
      return {item, saveItems, loading, error}
  }

  export { useLocalStorageCH }
  