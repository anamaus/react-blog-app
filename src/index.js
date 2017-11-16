import React from "react";
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/scss/style.css';

import App from './containers/App';
import { Header } from './components/Header';
import { Login } from './components/Login';
import Register from './components/Register';
import SingleUser from './containers/SingleUser';
import SingleBlogPost from './containers/SingleBlogPost';

//to connect react and redux we import Provider
import { Provider } from 'react-redux';
import store from './store';

const newHistory = createBrowserHistory();

//we pass const store to provider,to connect store with our react app
ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
        <div>
            <Header/>
          {/* switch: render only one of these routes
              exact renders only if exact path
            */}
            <Route exact path="/" component={App} />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            <Route exact path="/users/:id" component={SingleUser}  />
              <Route path="/users/:userId/posts/:postId" component={SingleBlogPost}  />
              {/* or use extended name ie.  /users/id */}
            </Switch>
        </div>
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
