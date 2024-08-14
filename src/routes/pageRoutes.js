import Home from "../pages";
import Calendar from "../pages/teacher/Calendar";
import Classes from "../pages/teacher/Classes";
import Dashboard from "../pages/teacher/Dashboard";
import EditProfile from "../pages/teacher/EditProfile";
import FeeDue from "../pages/teacher/FeeDue";
import ForgotPassword from "../pages/teacher/ForgotPassword";
import Login from "../pages/teacher/Login";
import Messages from "../pages/teacher/Messages";
import Profile from "../pages/teacher/Profile";
import Signup from "../pages/teacher/Signup";
import Student from "../pages/teacher/Student";

export const pageRoutes = {
  home: "/",
  login: "/login",
  sign_up: "/signup",
  student: "/student",
  classes: "/classes",
  profile: "/profile",
  messages: "/messages",
  calendar: "/calendar",
  feeDue: "/fee-and-due",
  dashboard: "/dashboard",
  editProfile: "/editProfile",
  forgot_password: "/forgot-password",
};

export const AllRoutes = [
  {
    name: "Home",
    path: pageRoutes?.home,
    element: <Home />,
    isPrivate: false,
  },
  {
    name: "Login",
    path: pageRoutes?.login,
    element: <Login />,
    isPrivate: false,
  },
  {
    name: "SignUp",
    path: pageRoutes?.sign_up,
    element: <Signup />,
    isPrivate: false,
  },
  {
    name: "Student",
    path: pageRoutes?.student,
    element: <Student />,
    isPrivate: true,
  },
  {
    name: "Classes",
    path: pageRoutes?.classes,
    element: <Classes />,
    isPrivate: true,
  },
  {
    name: "Profile",
    path: pageRoutes?.profile,
    element: <Profile />,
    isPrivate: true,
  },
  {
    name: "Messages",
    path: pageRoutes?.messages,
    element: <Messages />,
    isPrivate: true,
  },
  {
    name: "Calendar",
    path: pageRoutes?.calendar,
    element: <Calendar />,
    isPrivate: true,
  },
  {
    name: "FeeDue",
    path: pageRoutes?.feeDue,
    element: <FeeDue />,
    isPrivate: true,
  },
  {
    name: "Dashboard",
    path: pageRoutes?.dashboard,
    element: <Dashboard />,
    isPrivate: true,
  },
  {
    name: "EditProfile",
    path: pageRoutes?.editProfile,
    element: <EditProfile />,
    isPrivate: true,
  },
  {
    name: "ForgotPassword",
    path: pageRoutes?.forgot_password,
    element: <ForgotPassword />,
    isPrivate: false,
  },
];
