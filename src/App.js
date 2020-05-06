import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home'
import Dashboard from './dashboard/dashboard'
import Shortcuts from './shortcuts/shortcuts'
import Overview from './overview/overview'
import Events from './events/events'
import Profile from './profile/profile'
import Status from './status/status'
import About from './about/about'
import Contact from './contact/contact'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/shortcuts" component={Shortcuts} />
      <Route path="/overview" component={Overview} />
      <Route path="/events" component={Events} />
      <Route path="/profile" component={Profile} />
      <Route path="/status" component={Status} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
