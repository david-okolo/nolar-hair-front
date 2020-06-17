import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  const links = [
    {
      name: 'about',
      to: '/about'
    },
    {
      name: 'services',
      to: '/services'
    },
    {
      name: 'testimonals',
      to: '/testimonials'
    },
    {
      name: 'store',
      to: '/store'
    }
  ]
  return (
    <Navbar
      textColor='#666'
      links={links}
    ></Navbar>
  );
}

export default App;
