import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './pages/Login/index.jsx';
import './pages/Login/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
