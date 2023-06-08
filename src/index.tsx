import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListingPage, { loader as ListingLoader } from './pages/ListingPage';
import NewListing from './pages/New';
import MyListings from './pages/MyListings';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "listing/new",
    element: <NewListing />,
  },
  {
    path: "listing/my",
    element: <MyListings />,
  },
  {
    path: "listing/:listingId",
    element: <ListingPage />,
    loader: ListingLoader
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
