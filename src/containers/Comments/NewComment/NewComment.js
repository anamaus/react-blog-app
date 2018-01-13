import React from 'react';
import { connect } from 'react-redux';

import {addNewComment} from '../../../actions/commentsActions';
import {withRouter} from 'react-router-dom';

import classes from './NewComment.css';

class NewComment extends React.Component {
    state = {
        content: '',
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addNewComment(this.props.postId,this.props.userAuth.id, this.state.content,
            () => {
                this.setState({
                    content: ''
                })
            }
        )
    };

    render() {
        return (
            <div className={classes.NewComment}>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <textarea value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}  />
                    </div>
                        <input type="submit" value="Add comment" className={classes.Button} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.userReducer.currentUser,

    }
};

export default withRouter(connect(mapStateToProps, {addNewComment})(NewComment));