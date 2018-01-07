import React from 'react';
import './Comment.css';

const Comment = (props) => {
    let commentControls = null;
    if (props.authUser && props.authUser.id === props.userId ) {
        commentControls =
            <div className="buttons pull-right">
                <button className="btn btn-success" >Edit</button>
                <button className="btn btn-danger" >Delete</button>
            </div>
    }
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                {props.content}
            </div>
            <div className="panel-footer">
                by <span className={props.commentFromCurrentUser ? 'Highlighted' : null}>
                     {props.author}
                </span>
                {commentControls}
            </div>
        </div>
    )
};

export default Comment;