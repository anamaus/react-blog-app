import React from 'react';

class EditComment extends React.Component {
    render() {
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
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                    {warningMessage}
                </div>
            </div>
        )
    }

}

export default EditComment;