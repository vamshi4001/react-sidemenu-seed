import React from 'react';
import Dashboard from '../dashboard/dashboard';
import Navbar from '../navbar/navbar';

function Container() {
  return (    
    <div id="page-content-wrapper">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default Container;
