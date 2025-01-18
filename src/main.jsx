import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Nav from './pages/nav/Nav'
import ErrorPage from './pages/ErrorPage'
import App from './App'
import Detail from './pages/home/Detail'
import Listed from './pages/listed-book/Listed';
import PagesToRead from './pages/pages-to-read/PagesToRead';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <ErrorPage />,
    children : [
      {
       path: '/' ,
       element: <App />,
      },
      {
        path: '/detail/:id',
        loader: () => fetch('/books.json'),
        element: <Detail />,
      },
      {
        path: '/listed-books',
        element: <Listed />,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead />,
        loader: () => fetch('/books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
