import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../../../actions/postActions';
import {fetchComments} from '../../../actions/commentsActions';
import {withRouter} from "react-router-dom";

import CommentList from '../../../components/Comments/CommentList';

import './SinglePost.css';

class Post extends React.Component {

    /*
    * Commented out sections are a version of editing post with state.
    * The working version is the one without state, using redux.
    * */

    // state = {
    //     editMode: false,
    //     title: '',
    //     content: '',
    // };

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
        // this.setState({
        //     title: this.props.post.title,
        //     content: this.props.post.content,
        // })
    }



    //
    // componentWillReceiveProps(nextProps) {
    //     // You don't have to do this check first, but it can help prevent an unneeded render
    //     if (nextProps.post.title !== this.state.title) {
    //         this.setState({
    //             title: nextProps.post.title,
    //             content: nextProps.post.content,
    //         });
    //     }
    // }

    onEditHandler = () => {
       this.props.history.push(this.props.match.url + '/edit');
    };

    onDeleteHandler = () => {
        deletePost(this.props.post.id,
            () => {
                this.props.history.push('/users/' + this.props.authUser.id )
            });
    };

    render() {
        console.log(this.props.comments)
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
            <div className="panel panel-default">
                <div className="panel-heading"><h2>{post.title}</h2></div>
                <div className="panel-body">
                    <div className="panel-content">{post.content}</div>
                </div>
                <div className="panel-footer clearfix">
                    date
                    {buttons}
                </div>
            </div>;

        // if (this.state.editMode) {
        //    singlePost =
        //         <div className='Edit col-sm-6 col-sm-offset-3'>
        //             <form onSubmit={this.onSubmitHandler}>
        //                 <div>
        //                     <label>
        //                         Title:
        //                         <input type="text" value={this.state.title} />
        //                     </label>
        //                 </div>
        //                 <div>
        //                     <label>
        //                         Content:
        //                         <textarea value={this.state.content} />
        //                     </label>
        //                 </div>
        //                 <div>
        //                     <input type="submit" value="Submit" />
        //                 </div>
        //             </form>
        //         </div>
        // }

        let commentList = <div className="well">
            There are no comments for this post.
        </div>;

        if(this.props.commentsFetched) {
           commentList = <CommentList  comments={this.props.comments} authUser={this.props.authUser}/>;
        }

        let commentControls = null;

        if(this.props.authUser) {
            commentControls =
                <div className="buttons">
                    <Link to={this.props.match.url + '/new-comment'} className="btn btn-success">Add comment</Link>
                </div>
        }


        return (
            <div className="container">
                <div className="UserPosts-heading">
                   <h1>{post.author}</h1>
                </div>
                {singlePost}


                <hr/>

                <div className="well">
                    <h3>Comments</h3>
                </div>
                {commentControls}

                {commentList}

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