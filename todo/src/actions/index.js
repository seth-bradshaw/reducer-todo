export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const CLEAR = "CLEAR"

export const addTask = (task) => {
    return({type:ADD, payload:task})
}

export const setToggle = (id) => {
    return({type:TOGGLE, payload:id})
}

export const clear = () => {
    return({type:CLEAR})
}

export default { addTask, setToggle, clear }