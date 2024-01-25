import React from "react";

function useLocalStorageCH(itemName, valorInicial) {

  const [item, setItem] = React.useState(valorInicial)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    try {
      // remover el setTimeout, es solo para ver el cartel de carga
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
      }, 1500);
    }
    catch (error) {
      setLoading(false)
      setError(true)
      //Aprender manejo de errores y arreglar esto
      alert(`${error}: Reinicia la pagina o buscate otra app porque ni idea!`)
    }

  }, []
  )

  const saveItems = (tds) => {
    window.localStorage.setItem(itemName, JSON.stringify(tds))
    setItem(tds)
  }

  return { item, saveItems, loading, error }
}

export { useLocalStorageCH }
