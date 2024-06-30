import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import WishListBooks from './Components/WishListBooks/WishListBooks';
import BooksRead from './Components/BooksRead/BooksRead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('Books.json'),
        children: [
          {
            path: '',
            element: <BooksRead></BooksRead>,
            loader: () => fetch('Books.json'),
          },
          {
            path: 'wishlist-books',
            element: <WishListBooks></WishListBooks>,
            loader: () => fetch('Books.json'),

          },
          {
            path: '',
            element: <div>This Is Reads Book</div>

          },
        ]
      },

      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('Books.json'),
      },
      {
        path: "/pages to read",
        element: <PagesToRead></PagesToRead>,
        loder: () => fetch('Books.json'),
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
