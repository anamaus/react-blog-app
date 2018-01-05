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

export const currentUserExists = (bool) => {
    return {
        type: 'USERS_CURRENT_USER_EXISTS',
        payload: bool,
    }
};

export const authenticateUser = (username, password, successCallback) => {
  return (dispatch) => {
    /* Because I work with Deployd and dummy data, and I can only search by id,
     I have to fetch all users and then check for existing user by username and password.
     Not a way to do it in a real app with a real backend.
    */
    Axios.get(apiUrl+"/users")
    .then(function (response) {
        const users = response.data;
        for (let i =0; i< users.length; i++) {
            let user = users[i];
            if(user.username === username && user.password === password) {
                return user;
            }
        }
    })
    .then (user => {
        if(user) {
            dispatch(setCurrentUser(user));
            dispatch(currentUserExists(true));
            successCallback();
        } else {
            dispatch(currentUserExists(false));
        }

    })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const registerUser = (username,name, password, successCallback) => {
    return (dispatch) => {
        Axios.post(apiUrl+"/users", {
            username: username,
            password: password,
            name: name,
        })
            .then(function (response) {
                console.log(response);
                dispatch(setCurrentUser(response.data));
                dispatch(currentUserExists(true));
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

export const resetState = () => {
    return {
        type: 'LOG_OUT',
        payload: undefined,
    }
};

export const signOutHandler = () => {
    return (dispatch) => {
        dispatch(resetState());
        window.localStorage.clear();
    }
};

