/*
 src/reducers/simpleReducer.js
*/
const initialState = {
    search: ""
  };
export default (state = initialState, action) => {
    console.log("1234 : ",action.type)
    switch (action.type) {
     case 'SEARCH':
        state = {
        search: action.payload.SEARCH
       }
       console.log("STATE : ", state)
      return state
     default:
      return state
    }
   }