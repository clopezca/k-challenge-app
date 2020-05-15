import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home/index'

function App() {

  return (
    <>
    <Route exact path="/" render={() => <Home /> } />
    </>
  );
}

export default App;
