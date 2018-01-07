import React from "react";
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/scss/style.css';

import App from './App';
import Header  from './components/UI/Header/Header';
import Login from './containers/Login';
import Register from './containers/Register';
import Post from "./containers/Posts/SinglePost/SinglePost";
import UserPosts from './containers/Users/UserPosts/UserPosts';
import PostEdit from './containers/Posts/EditPost/EditPost';
import ForbiddenPage from './components/Utils/Forbidden';
import NewPost from './containers/Posts/NewPost/NewPost';

import Wrapper from "./hoc/Wrapper";

//to connect react and redux we import Provider
import { Provider } from 'react-redux';
import store from './store';

const newHistory = createBrowserHistory();

//set state to local storage
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

//we pass const store to provider,to connect store with our react app
ReactDOM.render(

  <Provider store={store}>
    <Router history={newHistory}>
        <Wrapper>
            <Header/>
            {/* switch: render only one of these routes
              exact renders only if exact path
            */}

            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact  path="/forbidden" component={ForbiddenPage}  />
                <Route path="/users/:userId/new" component={NewPost}  />
                <Route exact path="/posts/:id/edit" component={PostEdit}  />
                <Route exact path="/posts/:id" component={Post}  />
                <Route path="/users/:userId" component={UserPosts}  />
                <Route exact path="/" component={App} />

            </Switch>
        </Wrapper>
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
