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
        case "COMMENT_DELETED":
            const commentId = action.payload;
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== commentId)
            };
        case "COMMENT_ADDED":
            const newComment = action.payload;
            return {
                ...state,
                comments: [...state.comments, newComment]
            };
        case "COMMENT_UPDATED":
            const editedComment = action.payload;
            return {
                ...state,
                comments: state.comments.map( (item) => {
                    if(item.id !== editedComment.id) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }
                    // Otherwise, this is the one we want - return an updated value
                    return {
                        ...item,
                        ...editedComment
                    };
                })
            }
    }
    return state;
};


export default CommentsReducer;