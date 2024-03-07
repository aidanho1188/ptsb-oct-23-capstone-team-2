import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Homepage from './pages/Homepage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import UpdateStatus from './pages/UpdateStatus.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/UpdateStatus',
    element: <UpdateStatus />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
