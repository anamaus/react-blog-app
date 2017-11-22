const initialState = {
  blogs: [],
  blogsFetched: false,
  post: {},
  isPostFetched: false,

}

const PostReducer = (state=initialState, action) => {
  switch(action.type) {
    case "POSTS_FETCH_POSTS_SUCCESS":
      return {
        ...state,
        blogs: action.payload,
        blogsFetched: true,
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
