import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/style.scss';
import App from './App';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CatalogPage from './Pages/CatalogPage';
import AboutPage from './Pages/AboutPage';
import ContactsPage from './Pages/ContactsPage';
import PortfolioPage from './Pages/PortfolioPage';
// import { getText } from '../locales'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/catalog" exact element={<CatalogPage />} />
      <Route path="/about" exact element={<AboutPage />} />
      <Route path="/contacts" exact element={<ContactsPage />} />
      <Route path="/portfolio" exact element={<PortfolioPage />} />
    </Routes>
    <Footer />
  </HashRouter>
);