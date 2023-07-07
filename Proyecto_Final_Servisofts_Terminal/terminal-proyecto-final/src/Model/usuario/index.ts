
import Reducer from "./Reducer"
import Action from "./Action"
export type ModelType = {
    key: String,
    nombre?: String,
    apellido?: String
}

export const INFO = {
    NAME: "usuario"
}


export default {
    Action,
    Reducer
}
