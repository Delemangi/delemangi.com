// eslint-disable-next-line import/no-unassigned-import
import './style.css';
import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
