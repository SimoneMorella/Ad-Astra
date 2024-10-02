import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home'
import Launches from './pages/Launches'
import LaunchList from './components/LaunchList'
import loadAllLaunches from './loaders/loaders'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),

  },
  {
    path: '/launches',
    element: (
      <Layout>
        <Launches />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <LaunchList />,
        loader: loadAllLaunches,
      }
    ],
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
