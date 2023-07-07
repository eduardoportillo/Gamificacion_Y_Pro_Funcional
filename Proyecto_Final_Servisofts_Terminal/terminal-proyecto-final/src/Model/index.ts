import usuario from "./usuario"

let store;
export const setStore = (_store) => {
    store = _store;
}
export const getStore = () => {
    return store;
}
export const getReducer = () => {
    return {
        usuario: usuario.Reducer,
    }
}

export default {
    usuario
}



