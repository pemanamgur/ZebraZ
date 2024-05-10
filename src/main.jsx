import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

// Import the components
import IndexPage from './routes'
import ContactPage from './routes/contact'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import DashboardPage from './routes/dashboard'
import InvoicesPage from './routes/dashboard.invoices'

//My Pages
import Photos from './Pages/Photos'
import Pricing from './Pages/Pricing'
import Videos from './Pages/Videos'
import Home from './Pages/Home'
import Review from './Pages/Review'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      // { path: "/", element: <Home /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> },
          { path: "/dashboard/photos" , element: <Photos />},
          { path: "/dashboard/pricing" , element: <Pricing />},
          { path: "/dashboard/videos" , element: <Videos />},
          { path: "/dashboard/home" , element: <Home />},
          { path: "/dashboard/review" , element: <Review/>},
          
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

//   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
// </ClerkProvider>