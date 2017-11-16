import Axios from "axios";
/* async operations : payload is used later and not when the action is dispatched.
It returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves:*/

const apiUrl = 'http://localhost:2403/users/';

/*action: a function that returns an object with type and payload*/
export const fetchUsersSuccess = (users) => {
  return {
    type: 'USERS_FETCH_USERS_SUCCESS',
    payload: users,
  }
};

export const fetchUsers = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    Axios.get(apiUrl)
    .then(function (response) {
      // Dispatch another action
        // to consume data
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const setCurrentUser = (currentUser) => {
  return {
    type: 'USERS_SET_CURRENT_USER',
    payload: currentUser,
  }
};

export const getCurrentUserPosts= (posts) => {
  return {
    type: 'USERS_GET_CURRENT_USER_POSTS',
    payload: posts,
  }
};

export const fetchCurrentUser = (id) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    Axios.get(apiUrl+"/"+id)
    .then(function (response) {
      // Dispatch another action
        // to consume data
      dispatch(setCurrentUser(response.data));
      dispatch(getCurrentUserPosts(response.data.posts));
    })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const fetchAuthor = (userId) => {

  return (dispatch) => {

    Axios.get(apiUrl+userId)
    .then(function (response) {
      dispatch(fetchPostAuthorSuccess(response.data.name));
    })

    .catch(function (error) {
      console.log(error);
    });

  }
};

export const fetchPostAuthorSuccess = (authorName) => {
  return {
    type: 'USERS_FETCH_POST_AUTHOR_SUCCESS',
    payload: authorName,
  }
};
