import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/posts_index';
import newPost from './components/new_post';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/posts/new" component={newPost}></Route>
        <Route path="/" component={PostIndex}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
