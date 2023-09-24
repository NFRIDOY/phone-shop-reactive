import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";
import Login from "../pages/login/Login";
import Phone from "../components/Phones/Phone/Phone";
import Error from '../pages/Error/Error'
import PhoneDetails from "../components/Phones/Phone/PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
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
            }, 
            {
                path: "/phone/:id",
                // loader: ({params}) => fetch(),
                element: <PhoneDetails></PhoneDetails>
            },
            {
                path: "/phone/:id",
                // loader: ({params}) => fetch(),
                element: <Error></Error>
            },
            // {
            //     path: "/phonedetails",
            //     // loader: ({params}) => fetch(),
            //     element: <PhoneDetails></PhoneDetails>
            // }
        ]
    },
]);

export default router;