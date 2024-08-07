import Classes from "../pages/Classes";
import Dashboard from "../pages/Dashboard";
import FeeDue from "../pages/FeeDue";
import Login from "../pages/Login";
import Student from "../pages/Student";

export const pageRoutes = {
    dashboard: '/',
    student: '/student',
    classes: '/classes',
    feeDue: '/fee-and-due',
    login: '/login',
    signup: '/signup',
    forgot_password: '/forgot-password',
};

export const AllRoutes = [
    {
        name: 'Dashboard',
        path: pageRoutes?.dashboard,
        element: <Dashboard />,
        isPrivate: true
    },
    {
        name: 'Student',
        path: pageRoutes?.student,
        element: <Student />,
        isPrivate: true
    },
    {
        name: 'Classes',
        path: pageRoutes?.classes,
        element: <Classes />,
        isPrivate: true
    },
    {
        name: 'FeeDue',
        path: pageRoutes?.feeDue,
        element: <FeeDue />,
        isPrivate: true
    },
    {
        name: 'Login',
        path: pageRoutes?.login,
        element: <Login />,
        isPrivate: false
    },
];