import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import NavBar from "./Routes/NavBar/NavBar";
import Home from "./Routes/Home/Home";
import Shop from "./Routes/Shop/ShopComponent";
// import CategoriesPreview from "./Routes/CategoriesPreview/CategoriesPreview.Component";
import Authentication from "./Routes/Authentication/Authentication";
import CheckOut from "./Routes/CheckOut/CheckOut";

import "./index.scss";

import { UserProvider } from "./contexts/User.context";
import { CartProvider } from "./contexts/Cart.context";
import { CategoriesProvider } from "./contexts/Categories.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop/*",
        element: <Shop/>,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
