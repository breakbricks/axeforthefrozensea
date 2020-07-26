import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Search } from './pages/Search'
import { Saved } from './pages/Saved'




export const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </Fragment>
  )
}


