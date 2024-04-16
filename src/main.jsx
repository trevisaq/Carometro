import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './assets/pages/login.jsx'
import Cadastro from './assets/pages/cadastro.jsx'
import Home from './assets/pages/home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  },
  {
    path: "/Home",
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
