import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GAListener from '../../utils/GAListener'
import './App.scss'
import Top from '../pages/Top'
import Stocks from '../pages/Stocks'
import Footer from '../molecules/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GAListener trackingId={ "UA-146747386-1" }>
          <>
            <Route exact path="/" component={ Top } />
            <Route path="/stocks" component={ Stocks } />
          </>
        </GAListener>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
