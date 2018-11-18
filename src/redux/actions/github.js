/*
 src/actions/simpleAction.js
*/
const initaction = {
    type: "",
    payload: {}
}
export const github = (action = initaction) => dispatch => {
    console.log("IDS", action)
    dispatch({type: action.type, payload: action.payload})
}