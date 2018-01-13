import React from 'react';
import Comment from '../../containers/Comments/Comment/Comment';

const CommentList = (props) => {
    return (
        props.comments.map((comment, index) => {
            return <Comment {...comment} key={index}/>
        })
    )
};

export default CommentList;