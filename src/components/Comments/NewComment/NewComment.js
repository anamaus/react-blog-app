import React from 'react';
import { connect } from 'react-redux';

import {addNewComment} from '../../../actions/commentsActions';


class NewComment extends React.Component {
    state = {
        content: '',
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        addNewComment(this.props.match.params.postId,this.props.userAuth.id, this.state.content,
            () => {
                this.props.history.push('/');
            }
            )
    };

    render() {
        return (
            <div className='Edit col-sm-6 col-sm-offset-3'>
                <div className="UserPosts-heading">
                    <h1>Create new comment</h1>
                </div>

                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label>
                            Content:
                            <textarea value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}  />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
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

export default connect(mapStateToProps, {addNewComment})(NewComment);