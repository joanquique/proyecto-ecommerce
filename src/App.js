import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
//import Registro from './pages/Registro';
import Home from './pages/Home';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
//import PostCheckout from './pages/PostCheckout';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registro" element={<Registro />} /> */}
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/confirmacion" element={<PostCheckout />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
