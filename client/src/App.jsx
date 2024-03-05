import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import Homepage from './pages/Homepage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
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
