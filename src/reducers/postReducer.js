const initialState = {
  posts: [],
  postsFetched: false,
  post: {},
  isPostFetched: false,

}

const PostReducer = (state=initialState, action) => {
  switch(action.type) {
    case "POSTS_FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        postsFetched: true,
      }
    case "POST_GET_POST":
      return {
        ...state,
        post: action.payload,
        isPostFetched: true,
      }

  }
  return state;
}

export default PostReducer;
