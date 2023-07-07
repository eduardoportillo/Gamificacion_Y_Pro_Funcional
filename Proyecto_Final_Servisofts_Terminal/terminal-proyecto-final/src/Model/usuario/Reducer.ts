import { INFO } from ".";

const initState = () => {
    return {
        component: INFO.NAME
    }
}

export default (state, action) => {
    if (!state) state = initState();
    if (action.component != INFO.NAME) return state;
    const FUNCTION = types[action.type];
    if(FUNCTION) FUNCTION(state, action)
    return { ...state }
}

const types = {
    getAll: (state, action) => {
        state.data = action.data
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