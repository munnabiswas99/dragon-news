import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";
import About from "../components/pages/About";
import Career from "../components/pages/Carrer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
  },

  {
    path: "/signup",
    element: <h1>This is signup page</h1>,
  },

  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },

  {
    path: '/about',
    element: <About></About>
  },

  {
    path: '/career',
    element: <Career></Career>
  },

  {
    path: "/*",
    element: <h2>404 Not Found</h2>,
  },
]);

export default router;
