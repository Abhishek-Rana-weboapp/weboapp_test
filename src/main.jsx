import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Career from './pages/career/Career.jsx'
import Container from './pages/Container.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element:<App/>,
    children : [
      {
        path:"/",
        element:<Container/>,
        index:true,
      },
      {
        path:"/career",
        element:<Career/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
