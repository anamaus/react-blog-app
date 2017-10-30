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

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age,
  }
}
