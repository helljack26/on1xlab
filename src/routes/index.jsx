import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Navigate } from "react-router-dom";
// Variables
import RouteName from "../assets/routeName";
import { UnprotectedRoute } from "./UnprotectedRoute";
// Auth
import MainPage from "../pages/MainPage/MainPage";

const Routes = observer(() => {
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <UnprotectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "*",
                    element: <Navigate to={RouteName.main} />, // Redirect all unmatched routes to /login
                },
                {
                    path: RouteName.main,
                    element: <MainPage />,
                },
            ],
        },
    ];

    const router = createBrowserRouter(routesForNotAuthenticatedOnly);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
});

export default Routes;
