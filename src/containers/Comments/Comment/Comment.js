import React from 'react';
import {connect} from'react-redux';
import {fetchComments, deleteComment, updateComment} from "../../../actions/commentsActions";
import classes from './Comment.css';
// You can get access to the history object's properties and the closest <Route>'s match
import {withRouter} from "react-router-dom";
import "../../../index.css";


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
        if(this.state.content.length) {
            this.props.updateComment(this.props.id, this.state.content,
                () =>{
                    this.setState({
                        editMode: false
                    })
                })
        } else {
            this.setState({
                hasErrored: true,
            })
        }

    };

    toggleEditMode = () => {
        this.setState({
            content: this.props.content,
            editMode: true,
            hasErrored: false,
        })
    };

    render() {
        let commentControls = null;
        if (this.props.authUser && this.props.authUser.id === this.props.userId && !this.state.editMode) {
            commentControls =
                <div className={classes.Buttons}>
                    <button className={classes.Button}  onClick={this.toggleEditMode}>Edit</button>
                    <button className={classes.Button} onClick={this.onDeleteCommentHandler}>Delete</button>
                </div>
        }

        let content = null;

        if(this.state.editMode) {
                content =
                    <div className={classes.EditComment}>
                        <form onSubmit={this.onSubmitHandler}>
                        <div>
                            <textarea value={this.state.content} onChange={this.onContentChangeHandler}/>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className={classes.Button} />
                        </div>
                    </form>
                        <div className={classes.WarningMessage} style={{ display: this.state.hasErrored ? 'block' : 'none' }}>Please enter your comment</div>
                </div>
        } else {
            content = <div>{this.props.content}</div>;
        }


        return (
            <div className={classes.Comment}>
                 <p style={{ color:  this.props.authUser && this.props.userId === this.props.authUser.id ? 'mediumpurple': null}}>
                     {this.props.author}:
                </p>
                <div className="panel-body">
                    {content}
                </div>

                <div className="">
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