const initialState = {
  users: [],
  isFetched: false,
  currentUser: null,
  currentUserFetched: false,
};

const UserReducer = (state=initialState, action) => {
  switch(action.type) {
    case "USERS_SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        currentUserFetched: true,
      };
      case "USERS_REMOVE_CURRENT_USER":
          return {
              ...state,
              currentUser: action.payload,
              currentUserFetched: false,
          };
  }
  return state;
};

export default UserReducer;
