const initialState = {
    posts: [],
    postsFetched: false,
    post: {},
    isPostFetched: false,
    allPostsFromUser: [],
    allPostsFromUserFetched: false,
    allPostsFromUserEmpty: false
};

const PostReducer = (state=initialState, action) => {
  switch(action.type) {
    case "POSTS_FETCH_POSTS_SUCCESS":
        return {
            ...state,
            posts: action.payload,
        };
      case "POSTS_FETCHED":
          return {
              ...state,
              postsFetched:  action.payload,
          };

    case "POST_GET_POST":
        return {
            ...state,
            post: action.payload,
            isPostFetched: true,
        };

      case "POST_GET_ALL_POSTS_FROM_USER":
          return {
              ...state,
              allPostsFromUser: action.payload,
              allPostsFromUserFetched: true,
          };
      case "POST_GET_ALL_POSTS_FROM_USER_EMPTY":
          return {
              ...state,
              allPostsFromUserEmpty: action.payload,
          };
      // case "POST_POST_DELETED":
      //     const postId = action.payload;
      //     return {
      //         ...state,
      //         // posts: state.posts.filter(post => post.id !== postId)
      //     };
      default : return state;
  }

};

export default PostReducer;
