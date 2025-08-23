import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter } from 'react-router-dom'; // <-- add this

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>          {/* <-- wrap here */}
      <App />
    </HashRouter>
  </StrictMode>
);
