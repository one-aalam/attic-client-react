import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import SignIn from './SignIn';
import ProfilePage from './ProfilePage';
import AdminProfilePage from './AdminProfilePage';


const App = () => (
  <div className="App flex flex-col w-3/4 mx-auto my-12 items-center">
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <AdminRoute path="/admin" exact component={AdminProfilePage}></AdminRoute>
        <PrivateRoute path="/profile" exact component={ProfilePage}></PrivateRoute>
      </Switch>
    </Router>
  </div>
)

export default App;
