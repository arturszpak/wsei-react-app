import React from 'react';
import PageNav from './components/layout/PageNav/PageNav';
import SideMenu from './components/layout/SideMenu/SideMenu';
import MainPage from './components/pages/MainPage/MainPage';
import './App.scss';

function App() {

  return (
    <div className="app"> 
        <PageNav />
        <div className="wrapper">
          <SideMenu />
          <MainPage />
        </div>
        
    </div>
  );
}

export default App;
