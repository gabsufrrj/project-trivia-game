import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Config from './pages/Config';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/config" component={ Config } />
        <Route exact path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}
