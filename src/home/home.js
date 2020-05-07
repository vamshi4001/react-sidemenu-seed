import React from 'react';
// import Container from '../container/container'
import Sidemenu from '../sidemenu/sidemenu'
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../navbar/navbar'
import Dashboard from '../dashboard/dashboard'
import Shortcuts from '../shortcuts/shortcuts'
import Overview from '../overview/overview'
import Events from '../events/events'
import Profile from '../profile/profile'
import Status from '../status/status'
import About from '../about/about'
import Contact from '../contact/contact'
import Error404 from '../error404/error404'

function Home() {
  return (
    <div className="App">
      <div className="d-flex wrapper">
        <Sidemenu/>
        <div id="page-content-wrapper">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/shortcuts" component={Shortcuts} />
            <Route path="/overview" component={Overview} />
            <Route path="/events" component={Events} />
            <Route path="/profile" component={Profile} />
            <Route path="/status" component={Status} />
            <Route path="/old-status">
              <Redirect to="/status"/>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>        
      </div>
    </div>
  );
}

export default Home;
