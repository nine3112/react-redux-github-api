const initaction = {
    type: "",
    payload: {}
}
export const github = (action = initaction) => dispatch => {
    dispatch({type: action.type, payload: action.payload})
}