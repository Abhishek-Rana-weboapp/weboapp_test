import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FormContextProvider } from './context/FormContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { routes } from './routes.jsx/routesConfig.jsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(
  document.getElementById(
    'root',
  ),
).render(
  <HelmetProvider>
    <AuthContextProvider>
      <FormContextProvider>
        <RouterProvider router={router} />
      </FormContextProvider>
    </AuthContextProvider>
  </HelmetProvider>,
);
