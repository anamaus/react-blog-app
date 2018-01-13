import React from 'react';
import {connect} from'react-redux';
import {fetchComments, deleteComment, updateComment} from "../../../actions/commentsActions";
import classes from './Comment.css';
// You can get access to the history object's properties and the closest <Route>'s match
import {withRouter} from "react-router-dom";


class Comment extends React.Component {

    state = {
        editMode: false,
    };

    onDeleteCommentHandler = () =>{
        this.props.deleteComment(this.props.id)
    };

    onContentChangeHandler = (event) => {
        this.setState({
            content: event.target.value
        })

    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.updateComment(this.props.id, this.state.content,
            () =>{
                this.setState({
                    editMode: false
                })
            })
    };

    toggleEditMode = () => {
        this.setState({
            content: this.props.content,
            editMode: true
        })
    };

    render() {
        let commentControls = null;
        if (this.props.authUser && this.props.authUser.id === this.props.userId) {
            commentControls =
                <div className="buttons pull-right">
                    <button className="btn btn-success"  onClick={this.toggleEditMode}>Edit</button>
                    <button className="btn btn-danger" onClick={this.onDeleteCommentHandler}>Delete</button>
                </div>
        }

        let content = null;

        if(this.state.editMode) {
                content =
                    <div>
                        <form onSubmit={this.onSubmitHandler}>
                        <div>
                            <label>
                                <textarea value={this.state.content} onChange={this.onContentChangeHandler}/>
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
        } else {
            content = <div>{this.props.content}</div>;
        }


        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {content}
                </div>
                <div className="panel-footer">
                    by <span className={this.props.commentFromCurrentUser ? 'Highlighted' : null}>
                     {this.props.author}
                </span>
                    {commentControls}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.currentUser,
    }
};

export default withRouter(connect(mapStateToProps, {fetchComments, deleteComment, updateComment})(Comment));