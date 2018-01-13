const initialState = {
  currentUser: null,
  currentUserFetched: true,
};

const UserReducer = (state=initialState, action) => {
  switch(action.type) {
      case "USERS_SET_CURRENT_USER":
          return {
            ...state,
            currentUser: action.payload,
          };
      case "USERS_CURRENT_USER_EXISTS":
          return {
              ...state,
              currentUserFetched: action.payload,
          };
      case "USERS_REMOVE_CURRENT_USER":
          return {
              ...state,
              state: undefined,
          };

      default : return state;
  }

};

export default UserReducer;
