import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import AppLayout from './AppLayout.jsx';
import { FormContextProvider } from './context/FormContext.jsx';

ReactDOM.createRoot(
  document.getElementById(
    'root',
  ),
).render(
  <HelmetProvider>
    <BrowserRouter>
      <FormContextProvider>
          <App />
      </FormContextProvider>
    </BrowserRouter>
  </HelmetProvider>,
);
