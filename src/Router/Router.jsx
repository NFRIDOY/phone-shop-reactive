import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "/login",
                element: <div>Login</div>
            }
        ]
    },
]);

export default router;