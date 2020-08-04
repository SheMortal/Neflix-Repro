import React from 'react';
import './css/App.css';
import {Switch, Route} from "react-router-dom";
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </div>
  );
}

export default App;
