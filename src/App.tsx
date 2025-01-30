import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/inicio';
import History from './pages/History';
import SaoNicolau from './components/SaoNicolau';
import Founders from './components/Founders';
import Priests from './components/Priests';
import Communities from './components/Communities';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/saonicolau" element={<SaoNicolau />} />
        <Route path="/fundadores" element={<Founders />} />
        <Route path="/padres" element={<Priests />} />
        <Route path="/comunidades" element={<Communities />} />
      </Routes>
    </div>
  );
}

export default App;
