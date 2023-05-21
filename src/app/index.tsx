import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../pages/home'
const App: React.FC = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" replace={true} />,
    },
    {
      path: '/home',
        element: <Home />,
        children: []
    },
  ])
  return element
}

export default App
