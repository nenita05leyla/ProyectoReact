import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PrivateRoute } from './components/private-route/PrivateRoute';
import store from './store';

import './App.css';
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import PrivateHome from './containers/private-home/PrivateHome';
import NotFound from './containers/not-found/NotFound';
import PrivateSaveUser from './containers/private-save-user/PrivateSaveUser';
import PostDetail from './containers/post-detail/PostDetail';
import PrivateSavePost from './containers/private-save-post/PrivateSavePost'; 

import Header from './components/header/Header';
import routes from './routes/routes';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.login} component={Login} />
            <PrivateRoute path={routes.privateHome} exact component={PrivateHome} />
            <PrivateRoute path={routes.privateSaveUser} exact component={PrivateSaveUser} />
            <PrivateRoute path={routes.privateSavePost} exact component={PrivateSavePost} />

            <Route path={routes.postDetail} exact component={PostDetail} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
