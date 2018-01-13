import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../../../actions/postActions';
import {fetchComments} from '../../../actions/commentsActions';
import {withRouter} from "react-router-dom";

import CommentList from '../../../components/Comments/CommentList';
import NewComment from '../../Comments/NewComment/NewComment';

import classes from './SinglePost.css';


class Post extends React.Component {

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    onEditHandler = () => {
       this.props.history.push(this.props.match.url + '/edit');
    };

    onDeleteHandler = () => {
        this.props.deletePost(this.props.post.id,
            () => {
                this.props.history.push('/users/' + this.props.authUser.id )
            });
    };

    render() {
        const {post} = this.props;

        let buttons = null;

        if (this.props.authUser && this.props.authUser.id === post.userId ) {
            buttons =
                <div className="buttons pull-right">
                    <button className="btn btn-success" onClick={this.onEditHandler}>Edit</button>
                    <button className="btn btn-danger" onClick={this.onDeleteHandler}>Delete</button>
                </div>
        }

        let singlePost =
            <div className={classes.SinglePost}>
              <h1>{post.title}</h1>
                <p>by <span>{post.author}</span>, date</p>
                <div className={classes.Content}>{post.content}</div>

                <div className="panel-footer clearfix">
                    {buttons}
                </div>
            </div>;

        let commentList =
            <div className="well">
                There are no comments for this post.
            </div>;

        if(this.props.commentsFetched) {
           commentList = <CommentList  comments={this.props.comments} />;
        }

        let commentControls = null;
        let newComment = null;

        if(this.props.authUser) {
            newComment = <NewComment postId={this.props.match.params.id}/>

        }


        return (
            <div className="container">
                {singlePost}

                <hr/>

                <div className="well">
                    <h3>Comments</h3>
                </div>

                {commentList}

                {newComment}
            </div>
        )
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        post: state.postReducer.post,
        authUser: state.userReducer.currentUser,
        comments: state.commentsReducer.comments,
        commentsFetched: state.commentsReducer.commentsFetched,

    }
};

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, fetchComments })(Post));
