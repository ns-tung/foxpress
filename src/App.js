import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PreloaderContainer from './components/Preloader/PreloaderContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import RouterContainer from './components/Router/RouterContainer';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  return (
    <Router>
      <PreloaderContainer />
      <HeaderContainer />
      <RouterContainer />
      <FooterContainer />
    </Router>
  );
}

export default App;
