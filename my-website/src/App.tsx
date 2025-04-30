import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScriptsPage from './pages/ScriptsPage';
import MobileScriptsPage from './pages/MobileScriptsPage';
import ExecutePage from './pages/ExecutePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/mobile-scripts" element={<MobileScriptsPage />} />
            <Route path="/execute" element={<ExecutePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;