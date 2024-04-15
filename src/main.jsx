import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './assets/pages/login.jsx'
import Cadastro from './assets/pages/cadastro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
