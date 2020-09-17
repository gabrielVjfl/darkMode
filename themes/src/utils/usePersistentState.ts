import {useState, useEffect} from 'react'

function usePersistentState(key: string, initialState: any) {
const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if(storageValue) {
        return JSON.parse(storageValue) // pq fez json.stringify tem q recuperar
    }
    else {
        return initialState
    }
})
// Toda vez q o estado é alterado grava no localstorage

useEffect(() => {
localStorage.setItem(key, JSON.stringify(state))

}, [key, state])

return [state, setState]
}

export default usePersistentState