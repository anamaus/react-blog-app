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
      return response.data;
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
          dispatch(postsFetched(true));
        })
        .catch(function (error) {
            console.log(error);
        });
      })
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

export const fetchPost = (blogId) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    Axios.get(apiUrl+ "/posts/" + blogId)
        .then(function (response) {
            return response.data;
        })
        .then(function(post){
                Axios.get(apiUrl+"/users/" + post.userId)
                    .then( result => {
                        post.author = result.data.name;
                        return post
                    })
                    .then(post => {
                        dispatch(getPostSuccess(post));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

        })
    .catch(function (error) {
      console.log(error);
    });

  }
};

export const getAllPostFromUserSuccess = (posts) => {
    return {
        type: 'POST_GET_ALL_POSTS_FROM_USER',
        payload: posts,
    }
};

export const fetchAllPostsFromUser = (userId) => {
    return (dispatch) => {
        let allPosts=[];
        Axios.get(apiUrl+ "/posts")
            .then (result => {
                for (let i =0; i < result.data.length; i++){
                    if(result.data[i].userId === userId) {
                        allPosts.push(result.data[i]);
                    }
                }
                return allPosts;
            })
            .then(function(allPosts){
                allPosts.map(post => {
                    Axios.get(apiUrl+"/users/" + post.userId)
                        .then( result => {
                            post.author = result.data.name;
                            return Axios.all(allPosts)
                        })
                        .then(allPosts => {
                            dispatch(getAllPostFromUserSuccess(allPosts));
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const fetchPostEdit = (blogId) => {
    return (dispatch) => {
        Axios.get(apiUrl+ "/posts/" + blogId)
            .then(function (response) {
                return response.data;
            })
            .then(post => {
                dispatch(getPostSuccess(post));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};
