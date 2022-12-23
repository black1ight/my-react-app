import React from 'react';

import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Messages from './Components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <header className='main-page'>
            <Header />
            <Sidebar />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
              </Routes>
            </div>
          </header>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
