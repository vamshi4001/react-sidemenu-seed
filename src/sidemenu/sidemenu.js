import React from 'react';
import {Link} from 'react-router-dom';

function Sidemenu() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">React Sidemenu </div>
        <div className="list-group list-group-flush">
            <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
            <Link to="/shortcuts" className="list-group-item list-group-item-action bg-light">Shortcuts</Link>
            <Link to="/overview" className="list-group-item list-group-item-action bg-light">Overview</Link>
            <Link to="/events" className="list-group-item list-group-item-action bg-light">Events</Link>
            <Link to="/profile" className="list-group-item list-group-item-action bg-light">Profile</Link>
            <Link to="/status" className="list-group-item list-group-item-action bg-light">Status</Link>
        </div>
    </div>
  );
}

export default Sidemenu;
