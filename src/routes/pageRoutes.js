import Calendar from "../pages/Calendar";
import Classes from "../pages/Classes";
import Dashboard from "../pages/Dashboard";
import EditProfile from "../pages/EditProfile";
import FeeDue from "../pages/FeeDue";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import Student from "../pages/Student";

export const pageRoutes = {
  dashboard: "/",
  student: "/student",
  classes: "/classes",
  feeDue: "/fee-and-due",
  messages: "/messages",
  calendar: "/calendar",
  editProfile: "/editProfile",
  profile: "/profile",
  login: "/login",
  signup: "/signup",
  forgot_password: "/forgot-password",
};

export const AllRoutes = [
  {
    name: "Dashboard",
    path: pageRoutes?.dashboard,
    element: <Dashboard />,
    isPrivate: true,
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
    name: "FeeDue",
    path: pageRoutes?.feeDue,
    element: <FeeDue />,
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
    name: "Profile",
    path: pageRoutes?.profile,
    element: <Profile />,
    isPrivate: true,
  },
  {
    name: "EditProfile",
    path: pageRoutes?.editProfile,
    element: <EditProfile />,
    isPrivate: true,
  },
  {
    name: "Login",
    path: pageRoutes?.login,
    element: <Login />,
    isPrivate: false,
  },
];
