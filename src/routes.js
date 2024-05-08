import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./index.js";
import App from './pages/App';
import About from "./pages/About";
import Shop from "./pages/Shop";
import Careers from './pages/Careers';
import Faq from './pages/Faq.js';
import Cart from './pages/Cart.js';
import CupcakeDesigner from './pages/CupcakeDesigner.js';
import ErrorPage from './pages/ErrorPage.js';


const routes = [
    {
        path: "/",
        element:  <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/shop",
        element: <Shop />,
        errorElement: <ErrorPage />
    },
    {
        path: "/careers",
        element: <Careers />,
        errorElement: <ErrorPage />
    },
    {
        path: "/faq",
        element: <Faq />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cupcakedesignergame",
        element: <CupcakeDesigner />,
        errorElement: <ErrorPage />
    }
];

export default routes