import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from '../pages/index'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        News
      </div>
      <Top />
    </div>
  );
}

export default App;
