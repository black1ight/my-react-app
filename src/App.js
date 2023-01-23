import React from 'react';

import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dialogs from './Components/Dialogs/Dialogs';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <header className='main-page'>
            <Header />
            <Sidebar />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/profile' element={<Profile {...props.state.profilePage} dispatch={props.dispatch}/>} />
                <Route path='/Dialogs/*' element={<Dialogs {...props.state.dialogsPage}/>} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/news' element={<News />} />
              </Routes>
            </div>
          </header>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
