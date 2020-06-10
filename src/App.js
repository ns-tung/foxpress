import React from 'react';
import './App.css';
import HomeContainer from './components/Home/HomeContainer'
import PreloaderContainer from './components/Preloader/PreloaderContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  return (
    <div className="App">
      <PreloaderContainer />
      <HeaderContainer />
      <HomeContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
