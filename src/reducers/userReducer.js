//reducers are responsible for changing the state.
const initialState ={
  name: "Max",
  age: 27
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
          return {
            ...state,
            name: action.payload
          }

        case "SET_AGE":
          return {
            ...state,
            age: action.payload
          }
    }
    return state;
};
export default  userReducer;
