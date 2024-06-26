import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import Homepage from './pages/Homepage/Homepage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import UpdateStatusPage from './pages/UpdateStatusPage/UpdateStatusPage.jsx'
import WorkorderCheckinPage from './pages/WorkorderCheckinPage/WorkorderCheckinPage.jsx'
import WorkorderCheckoutPage from './pages/WorkorderCheckoutPage/WorkorderCheckoutPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import CreateWorkorderPage from './pages/CreateWorkorderPage/CreateWorkorderPage.jsx'
import WorkActivityPage from './pages/WorkActivityPage/WorkActivity.jsx'
import Demo from './pages/Canva.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    path: '/workorder-checkin',
    element: <WorkorderCheckinPage />,
  },
  {
    path: '/workorder-checkout',
    element: <WorkorderCheckoutPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/create-workorder',

    element: <CreateWorkorderPage />,
  },
  {
    path: '/work-activity',
    element: <WorkActivityPage />,
  },
  {
    path: '/workorder-create',
    element: <CreateWorkorderPage />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
