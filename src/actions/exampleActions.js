//normal action
export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age,
  }
}
//action with thunk, returns a function
export function setName(name) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "SET_NAME",
        payload: name,
      });
    },3000);
  }
}
