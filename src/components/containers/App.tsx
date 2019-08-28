import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss'
import Top from '../pages/Top'
import Stocks from '../pages/Stocks'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Top } />
        <Route path="/stocks" component={ Stocks } />
      </BrowserRouter>
      <div id="footer">
        <div className="footerContents">
          <div className="operatorContent">
            <div className="label">運営者</div>
            <div className="icon">
              <a
                href="https://twitter.com/hand12_k"
                target="_blank"
                rel="noopener noreferrer">
                  hand12_k
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
