import {QueryClient, QueryClientProvider} from 'react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Layout from './Layout.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import CreateWorkorderPage from './pages/CreateWorkorderPage/CreateWorkorderPage.jsx'
import Demo from './pages/DemoPage/Canva.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import UpdateStatusPage from './pages/UpdateStatusPage/UpdateStatusPage.jsx'
import WorkActivityPage from './pages/WorkActivityPage/WorkActivity.jsx'
import WorkorderCheckinPage from './pages/WorkorderCheckinPage/WorkorderCheckinPage.jsx'
import WorkorderCheckoutPage from './pages/WorkorderCheckoutPage/WorkorderCheckoutPage.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
  },
  {
    path: '/update-status',
    element: (
      <Layout>
        <UpdateStatusPage />
      </Layout>
    ),
  },
  {
    path: '/workorder-checkin',
    element: (
      <Layout>
        <WorkorderCheckinPage />
      </Layout>
    ),
  },
  {
    path: '/workorder-checkout',
    element: (
      <Layout>
        <WorkorderCheckoutPage />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/work-activity',
    element: (
      <Layout>
        <WorkActivityPage />
      </Layout>
    ),
  },
  {
    path: '/workorder-create',
    element: (
      <Layout>
        <CreateWorkorderPage />
      </Layout>
    ),
  },
  {
    path: '/demo',
    element: (
      <Layout>
        <Demo />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
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
