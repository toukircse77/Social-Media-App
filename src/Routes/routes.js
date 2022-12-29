import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Media from "../Pages/Media/Media";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
           {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children: [
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/home',
                    element:<Home></Home>
                },
                {
                    path:'/about',
                    element:<PrivateRoute><About></About></PrivateRoute> 
                },
                {
                    path:'/media',
                    element: <PrivateRoute> <Media></Media></PrivateRoute>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/signup',
                    element:<Signup></Signup>
                },
            ]
           }
])