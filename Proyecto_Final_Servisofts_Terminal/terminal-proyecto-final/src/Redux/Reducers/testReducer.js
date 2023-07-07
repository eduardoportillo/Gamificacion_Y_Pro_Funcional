const NAME = "test";
const initState = () => {
    return {
        component: NAME
    }
}

export default (state, action) => {
    if (!state) state = initState();
    if (action.component != NAME) return state;
    const FUNCTION = types[action.type];
    if(FUNCTION) FUNCTION(state, action)
    return { ...state }
}

const types = {
    cambiar_nombre: (state, action) => {
        state.nombre = action.nombre
    }
    // create: (state, action) => {
    //     console.log("[ registro ] TODO, Method not implement");
    // },
    // edit: (state, action) => {
    //     console.log("[ registro ] TODO, Method not implement");
    // },
    // delete: (state, action) => {
    //     console.log("[ registro ] TODO, Method not implement");
    // }
}