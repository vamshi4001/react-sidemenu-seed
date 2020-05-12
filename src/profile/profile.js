import React from 'react';
import {Route, Link } from 'react-router-dom';
import ProfileDetails from './profile-details'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './profile.css'

import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function Profile() {
  return (
    <Provider store={store}>
      <div className="mt-4">
        <ul>
          <li><Link to="/profile/vamshi4001">Vamshi4001</Link></li>
          <li><Link to="/profile/pradyumnad">prady</Link></li>
          <li><Link to="/profile/srameshr">Sid</Link></li>
        </ul>
        <div className="mt-4">
          <Route path="/profile/:id" component={ProfileDetails} />
        </div>
      </div>
    </Provider>
  )
  
}

export default Profile;
