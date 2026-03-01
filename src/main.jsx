import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes'
import './assets/styles/global.css'
import './assets/styles/variables.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}/>
  </React.StrictMode>
)
