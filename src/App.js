import React from 'react';

import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='main-page'>
          <Header />
          <Sidebar />
          <Content />
        </header>
      </div>
    </div>
  );
}

export default App;
