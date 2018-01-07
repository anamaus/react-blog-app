import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    return (
        props.comments.map((comment, index) => {
            return <Comment {...comment} key={index} authUser={props.authUser} commentFromCurrentUser={props.authUser.id === comment.userId}/>
        })
    )
};

export default CommentList;