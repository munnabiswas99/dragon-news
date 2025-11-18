import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
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