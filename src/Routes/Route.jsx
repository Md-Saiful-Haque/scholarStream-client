import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllScholarships from "../Pages/AllScholarships";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Dashboard/Common/Profile";
import AddScholarship from "../Pages/Dashboard/Admin/AddScholarship";
import ManageScholarships from "../Pages/Dashboard/Admin/ManageScholarships";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/all-scholarships',
                element: <AllScholarships />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayouts />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: 'manage-scholarships',
                element: (
                    <PrivateRoute>
                        <ManageScholarships />
                    </PrivateRoute>
                ),
            },
            {
                path: 'add-scholarship',
                element: <PrivateRoute>
                    <AddScholarship />
                </PrivateRoute>
            },
            {
                path: 'manage-users',
                element: (
                    <PrivateRoute>
                            <ManageUsers />
                    </PrivateRoute>
                ),
            },
        ]
    }
])