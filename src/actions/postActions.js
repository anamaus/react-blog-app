import Axios from "axios";
/* async operations : payload is used later and not when the action is dispatched.
It returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves:*/

const apiUrl = 'http://localhost:2403';

export const fetchPostsSuccess = (blogs) => {
  return {
    type: 'POSTS_FETCH_POSTS_SUCCESS',
    payload: blogs,
  }
};

export const postsFetched = (bool) => {
  return {
    type: 'POSTS_FETCHED',
    payload: bool,
  }
};

export const fetchPosts = () => {

  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    dispatch(postsFetched(false));
    // Returns a promise
    Axios.get(apiUrl+"/posts")
    .then(function (response) {

      let blogs = response.data;

      return blogs;
    })
    .then(function(blogs){
      blogs.map(blog => {
        Axios.get(apiUrl+"/users/" + blog.userId)
        .then( result => {
          blog.author = result.data.name;
          return Axios.all(blogs)
        })
        .then(blogs => {
          dispatch(fetchPostsSuccess(blogs));
        });
      })
    })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const getPostSuccess = (blog) => {
  return {
    type: 'POST_GET_POST',
    payload: blog,
  }
};

export const getPost = (userId, blogId) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    Axios.get(apiUrl+blogId)
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
