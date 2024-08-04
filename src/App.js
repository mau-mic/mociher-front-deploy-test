import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Misionvision from './components/Misionvision';
import Servicios from './components/Servicios';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Bienvenidos from './components/Bienvenidos';

function App()  {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <Bienvenidos />
      <Servicios />
      <Misionvision />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;