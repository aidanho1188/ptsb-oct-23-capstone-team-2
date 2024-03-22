import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Homepage from './pages/Homepage/Homepage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import UpdateStatusPage from './pages/UpdateStatusPage/UpdateStatusPage.jsx'
import WorkorderCheckinPage from './pages/WorkorderCheckinPage/WorkorderCheckinPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/update-status',
    element: <UpdateStatusPage />,
  },
  {
    path:'/workorder-checkin',
    element: <WorkorderCheckinPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
