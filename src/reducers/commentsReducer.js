const initialState = {
    comments: [],
    commentsFetched: false,
};

const CommentsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "COMMENTS_FETCH_COMMENTS_SUCCESS":
            return {
                ...state,
                comments: action.payload,
            };
        case "COMMENTS_FETCHED":
            return {
                ...state,
                commentsFetched:  action.payload,
            };

    }
    return state;
};

export default CommentsReducer;