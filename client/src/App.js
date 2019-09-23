import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserRegistrationForm from './components/UserRegistrationForm.js'
import './App.css';
import KeeperLog from './components/KeeperLog.js';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Registration" component={UserRegistrationForm}/>
          <Route exact path="/KeeperLog" component={KeeperLog}/>
        </Switch>
      </Router> 
    </div>
  );
}
}
export default App;
