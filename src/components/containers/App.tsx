import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Top from '../pages/Top'
import Stocks from '../pages/Stocks'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Top } />
        <Route path="/stocks" component={ Stocks } />
      </BrowserRouter>
    </div>
  );
}

export default App;
