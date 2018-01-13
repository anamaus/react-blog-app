import Axios from "axios";
/* async operations : payload is used later and not when the action is dispatched.
It returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves:*/

const apiUrl = 'http://localhost:2403';

export const fetchCommentsSuccess = (comments) => {
    return {
        type: 'COMMENTS_FETCH_COMMENTS_SUCCESS',
        payload: comments,
    }
};

export const commentsFetched = (bool) => {
    return {
        type: 'COMMENTS_FETCHED',
        payload: bool,
    }
};

export const fetchComments = (postId) => {
    return (dispatch) => {
        Axios.get(apiUrl+"/comments?postId=" + postId)
            .then(function (response) {
                return response.data;
            })
            .then(function(comments) {
                if (comments.length) {
                    comments.map(comment => {
                        Axios.get(apiUrl + "/users/" + comment.userId)
                            .then(result => {
                                comment.author = result.data.name;
                                return Axios.all(comments)
                            })
                            .then(comments => {
                                dispatch(fetchCommentsSuccess(comments)) ;
                                dispatch(commentsFetched(true)) ;
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    })
                } else {
                    dispatch(commentsFetched(false)) ;
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};

export const addComment = (comment) => {
    return {
        type: 'COMMENT_ADDED',
        payload: comment,
    }
};

export const addNewComment = (postId, userId, content, successCallback) => {
    return (dispatch) => {
        Axios.post(apiUrl + "/comments", {
            postId: postId,
            userId: userId,
            content: content
        })
            .then(function (response) {
                console.log(response);
                dispatch(addComment(response.data));
                dispatch(commentsFetched(true)) ;
                successCallback();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const deleteSingleComment = (id) => {
    return {
        type: 'COMMENT_DELETED',
        payload: id,
    }
};
export const deleteComment = (commentId) => {
    return (dispatch) => {

        Axios.delete(apiUrl + "/comments/" + commentId)
            .then(function (response) {
                dispatch(deleteSingleComment(commentId));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const updateSingleComment= (comment) => {
    return {
        type: 'COMMENT_UPDATED',
        payload: comment,
    }
};

export const updateComment = (commentId, content, successCallback) => {
    return (dispatch) => {

        Axios.post(apiUrl + "/comments/" + commentId,
            {
                content: content
            })
            .then(function (response) {
                dispatch(updateSingleComment(response.data));
                successCallback();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};