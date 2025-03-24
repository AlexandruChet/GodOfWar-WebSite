import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css'
import Header from './Header';
import Card from './Card'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>
);