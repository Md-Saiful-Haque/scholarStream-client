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
import ManageScholarships from "../Pages/Dashboard/Admin/ManageScholarships";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageApplications from "../Pages/Dashboard/Modarator/ManageApplications";
import AllReviews from "../Pages/Dashboard/Modarator/AllReviews";
import MyReview from "../Pages/Dashboard/Student/MyReview";
import MyApplications from "../Pages/Dashboard/Student/MyApplications";
import AddScholarship from "../Pages/Dashboard/Admin/AddScholarship"





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
            {
                path: 'manage-application',
                element: <PrivateRoute>
                    <ManageApplications></ManageApplications>
                </PrivateRoute>
            },
            {
                path: 'all-reviews',
                element: <PrivateRoute>
                    <AllReviews />
                </PrivateRoute>
            },
            {
                path: 'my-reviews',
                element: <PrivateRoute>
                    <MyReview />
                </PrivateRoute>
            },
            {
                path: 'my-applications',
                element: <PrivateRoute>
                    <MyApplications />
                </PrivateRoute>
            }
        ]
    }
])