import React from 'react';
import {connect} from 'react-redux';
import {createNewPost} from '../../../actions/postActions';
import classes from './NewPost.css';

class NewPost extends React.Component {

    state = {
        title: '',
        content: '',
        category:'',
        hasError: false,
    };

    componentDidMount() {
        //if the user isn't logged in, redirect to login
        if (!this.props.userAuth) {
            this.props.history.push('/login');
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
        if(this.state.title.length && this.state.content.length && this.state.category.length) {
           createNewPost(this.state.title,this.state.content, this.state.category, this.props.userAuth.id,
                () => {
                    this.props.history.push('/users/' + this.props.userAuth.id )
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
          <div className={classes.NewPost}>
              <div className='col-sm-6 col-sm-offset-3'>
                  <div className="UserPostsHeading">
                      <h1>Create new post</h1>
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
                              <textarea value={this.state.content} onChange={this.onContentChangeHandler} />
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
        userAuth: state.userReducer.currentUser,
    }
};

export default connect(mapStateToProps, { createNewPost })(NewPost);