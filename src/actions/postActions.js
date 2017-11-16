import Axios from "axios";
/* async operations : payload is used later and not when the action is dispatched.
It returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves:*/

const apiUrl = 'http://localhost:2403';

export const fetchPostsSuccess = (posts) => {
  return {
    type: 'POSTS_FETCH_POSTS_SUCCESS',
    payload: posts,
  }
};

export const fetchPosts = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    Axios.get(apiUrl+"/posts")
    .then(function (response) {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const getPostSuccess = (post) => {
  return {
    type: 'POST_GET_POST',
    payload: post,
  }
};

export const getPost = (userId, postId) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    Axios.get(apiUrl+postId)
    .then(function (response) {
      // Dispatch another action
        // to consume data
      dispatch(getPostSuccess(response.data));
      console.log('actionPost', response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
};
