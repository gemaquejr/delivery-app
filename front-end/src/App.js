import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Switch>
    </div>
  );
}

export default App;
