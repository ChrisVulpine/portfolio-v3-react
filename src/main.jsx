
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      },
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
