import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/router.jsx'
import ContextProvider from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
    <ToastContainer />
  </StrictMode>,
)
