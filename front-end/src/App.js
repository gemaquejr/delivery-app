import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" element={ <Login /> } />
        <Route
          path="/"
          element={ <Navigate to="/Login" replace /> }
        />
      </Switch>
    </div>
  );
}

export default App;
