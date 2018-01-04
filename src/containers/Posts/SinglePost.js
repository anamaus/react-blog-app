import React from 'react';
import { connect } from 'react-redux';
import {fetchPost, deletePost} from '../../actions/postActions';
import {withRouter} from "react-router-dom";


import './SinglePost.css';

class Post extends React.Component {

    // state = {
    //     editMode: false,
    //     title: '',
    //     content: '',
    // };

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
        // this.setState({
        //     title: this.props.post.title,
        //     content: this.props.post.content,
        // })
    }


    componentWillUnmount(){
        console.log('unmounted');
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

    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log('submitted!')
    // };

    onDeleteHandler = () => {
        deletePost(this.props.post.id,
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
            <div className="panel panel-default">
                <div className="panel-heading">{post.title}</div>
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

        return (
            <div className="container">
                <div className="UserPosts-heading">
                   <h1>{post.author}</h1>
                </div>
                {singlePost}
            </div>
        )
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        post: state.postReducer.post,
        authUser: state.userReducer.currentUser,
    }
};

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost })(Post));