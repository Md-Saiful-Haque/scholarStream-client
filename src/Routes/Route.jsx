import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
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
import AllScholarship from "../Pages/AllScholarship";
import ScholarshipDetails from "../Pages/ScholarshipDetails";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import Analytics from "../Pages/Dashboard/Common/Analytics";
import PaymentFailed from "../Pages/Payment/PaymentFailed";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import ErrorPage from "../Pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/all-scholarships',
                element: <AllScholarship />
            },
            {
                path: '/scholarship/:id',
                element: <ScholarshipDetails />
            },
            {
                path: '/payment-success',
                element: <PaymentSuccess />
            },
            {
                path: '/payment-failed/:id',
                element: <PaymentFailed />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayouts />,
        errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'analytics',
                element: <PrivateRoute>
                    <AdminRoute>
                        <Analytics />
                    </AdminRoute>
                </PrivateRoute>
            },
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
                        <AdminRoute>
                            <ManageScholarships />
                        </AdminRoute>
                    </PrivateRoute>
                ),
            },
            {
                path: 'add-scholarship',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AddScholarship />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'manage-users',
                element: (
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageUsers />
                        </AdminRoute>
                    </PrivateRoute>
                ),
            },
            {
                path: 'manage-application',
                element: <PrivateRoute>
                    <ModeratorRoute>
                        <ManageApplications></ManageApplications>
                    </ModeratorRoute>
                </PrivateRoute>
            },
            {
                path: 'all-reviews',
                element: <PrivateRoute>
                    <ModeratorRoute>
                        <AllReviews />
                    </ModeratorRoute>
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