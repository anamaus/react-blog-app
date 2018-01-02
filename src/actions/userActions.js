import Axios from "axios";
/* async operations : payload is used later and not when the action is dispatched.
It returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves:*/

const apiUrl = 'http://localhost:2403';

export const setCurrentUser = (currentUser) => {
  return {
    type: 'USERS_SET_CURRENT_USER',
    payload: currentUser,
  }
};

export const authenticateUser = (id, password) => {
  return (dispatch) => {
    Axios.get(apiUrl+"/users")
    .then(function (response) {
        const users = response.data;
        for (let i =0; i< users.length; i++) {
            let user = users[i];
            if(user.id === id && user.password === password) {
                return user;
            } else {
                console.log('not auth')
            }
        }

    })
    .then (user => {
        console.log(user);
        dispatch(setCurrentUser(user));
    })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const removeCurrentUser = () => {
    return {
        type: 'USERS_REMOVE_CURRENT_USER',
        payload: null,
    }
};
