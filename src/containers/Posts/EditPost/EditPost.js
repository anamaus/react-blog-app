import React from 'react';
import { connect } from 'react-redux';
import {fetchPostEdit,updatePost} from '../../../actions/postActions';
import {withRouter} from "react-router-dom";
import classes from './EditPost.css';



class PostEdit extends React.Component {

    state = {
        title: this.props.post.title,
        content: this.props.post.content,
        category:this.props.post.category,
        hasError: false,
    };

    componentDidMount() {
        if (!this.props.userAuth) {
            this.props.history.push('/login');
        } else if (this.props.post.userId !== this.props.userAuth.id ) {
            this.props.history.push('/forbidden');
        } else {
            this.props.fetchPostEdit(this.props.match.params.id)
        }
    }

    onTitleChangeHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    onContentChangeHandler = (event) => {
        this.setState({
            content: event.target.value
        })
    };
    onCategoryChangeHandler = (event) => {
        this.setState({
            category: event.target.value
        })
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        if(this.state.title.length && this.state.content.length  && this.state.category.length) {
            updatePost(this.state.title,this.state.content, this.state.category, this.props.post.id,
                () => {
                    this.props.history.push('/posts/' + this.props.post.id)
                }
            );
        } else {
            this.setState({
                hasError: true,
            })
        }
    };

    render() {
        let warningMessage = null;

        if (this.state.hasError) {
            warningMessage = <div className={classes.WarningMessage}>You can't create an empty post. Please fill out all the fields.</div>
        }

        return (
            <div className={classes.Edit}>
                <div className='col-sm-6 col-sm-offset-3'>
                    <div className="UserPosts-heading">
                        <h1>Edit your post</h1>
                    </div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div>
                            <label>
                                Title:
                                <input type="text" value={this.state.title} onChange={this.onTitleChangeHandler}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Content:
                                <textarea value={this.state.content} onChange={this.onContentChangeHandler}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Category:
                                <input value={this.state.category} onChange={this.onCategoryChangeHandler} />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                    {warningMessage}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.postReducer.post,
        userAuth: state.userReducer.currentUser,
    }
};

export default withRouter(connect(mapStateToProps,  {fetchPostEdit, updatePost})(PostEdit));