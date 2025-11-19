import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>
            }
        ]
    },

    {
        path: '/login',
        element: <h1>This is from login</h1>
    },

    {
        path: '/signup',
        element: <h1>This is signup page</h1>
    },

    {
        path: '/news',
        element: <h2>This is news section</h2>
    },

    {
        path: '/*',
        element: <h2>404 Not Found</h2>
    },

])

export default router;