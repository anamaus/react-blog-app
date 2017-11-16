const initialState = {
  name: 'ana',
  users: [],
  user: null,
  isFetched: false,
  currentUser: null,
  currentUserFetched: false,
  currentUserPosts: [],
  author: null
}

const UserReducer = (state=initialState, action) => {
  switch(action.type) {
    case "USERS_FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        isFetched: true,
      }
    case "USERS_SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        currentUserFetched: true,
      }
    case "USERS_GET_CURRENT_USER_POSTS":
      return {
        ...state,
        currentUserPosts: action.payload,
      }
      case "USERS_FETCH_POST_AUTHOR_SUCCESS":
        return {
          ...state,
          author: action.payload,
        }
  }
  return state;
}

export default UserReducer;
