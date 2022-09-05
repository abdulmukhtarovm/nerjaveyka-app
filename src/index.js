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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
    <Footer />
  </HashRouter>
);