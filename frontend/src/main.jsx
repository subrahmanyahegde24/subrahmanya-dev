import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Preview another accent palette with ?accent=violet (see index.css for the list).
const accent = new URLSearchParams(window.location.search).get('accent');
if (accent) document.documentElement.dataset.accent = accent;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
