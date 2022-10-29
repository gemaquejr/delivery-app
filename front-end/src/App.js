import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" element={ <Login /> } />
        <Route
          path="/"
          element={ <Navigate to="/login" replace /> }
        />
        <Route path="/register" element={ <Register /> } />
      </Switch>
    </div>
  );
}

export default App;
