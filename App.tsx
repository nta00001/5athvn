
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import StoryPage from './pages/StoryPage';
import SplashPage from './pages/SplashPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
