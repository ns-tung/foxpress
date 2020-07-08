import React from 'react';
import './App.css';
import PreloaderContainer from './components/Preloader/PreloaderContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import HomeContainer from './components/Home/HomeContainer';
import FooterContainer from './components/Footer/FooterContainer';
import PostsDetailContainer from './components/PostsDetail/PostsDetailContainer';

function App() {
  return (
    <div className="App">
      <PreloaderContainer />
      <HeaderContainer />
      {/* <HomeContainer /> */}
      <PostsDetailContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
