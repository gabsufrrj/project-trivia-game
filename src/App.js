import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Config from './pages/Config';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/config" component={ Config } />
      </Switch>
    </div>
  );
}
