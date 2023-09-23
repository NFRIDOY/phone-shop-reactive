import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";
import Login from "../pages/login/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch('phones.json'),
                element: <Home></Home>
            },
            {
                path: "/favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);

export default router;