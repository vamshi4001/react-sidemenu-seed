import React from 'react';
import {Route, Link } from 'react-router-dom';
import ProfileDetails from './profile-details'
import './profile.css'

function Profile() {
  return (
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
  )
  
}

export default Profile;
