import React from "react";
import Layout from "../features/public/components/layout";
import HomePage from "../features/public/pages/HomePage";
import ShopPage from "../features/public/pages/ShopPage";
import ProductDetailPage from "../features/public/pages/ProductDetailPage";
import ErrorPage from "../features/public/pages/ErrorPage";
import ViewCartPage from "../features/public/pages/ViewCartPage";
import AuthRoute from "./AuthRoute";

const PublicRoute = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "viewcart",
        element: <ViewCartPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      ...AuthRoute,
    ],
  },
];

export default PublicRoute;
