import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Authentication, { PageType } from './pages/Authentication.jsx'
import { CookiesProvider } from 'react-cookie';
import AddChallenge from './pages/AddChallenge.jsx'

  const router = createBrowserRouter([
  {
  path: '/login',
  element: <Authentication pageType={PageType.LOGIN} />

  },  
  {
  path: '/register',
  element: <Authentication pageType={PageType.REGISTER}/>, 

  }, 
  {
    path: '/add-challenge',
    element: <AddChallenge />, 
  
    }, 

    {
      path: '/*',
      element: <App />
    
      }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <RouterProvider router={router}/>
    </CookiesProvider>

  </StrictMode>,
)
