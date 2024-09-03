import Home from "../pages";
import Calendar from "../pages/teacher/Calendar";
import Classes from "../pages/teacher/Classes";
import Dashboard from "../pages/teacher/Dashboard";
import EditProfile from "../pages/teacher/EditProfile";
import ForgotPassword from "../pages/teacher/ForgotPassword";
import Login from "../pages/teacher/Login";
import Messages from "../pages/teacher/Messages";
import Profile from "../pages/teacher/Profile";
import Signup from "../pages/teacher/Signup";
import Student from "../pages/teacher/Student";
import Billing from "../pages/teacher/Billing";
import ChangePassword from "../pages/teacher/ChangePassword";
import StepForm from "../pages/teacher/StepForm";
//student page
import FeesAndDues from "../pages/students/FeesAndDues";
import MyClass from "../pages/students/MyClass";
import StudentChangePassword from "../pages/students/StudentChangePassword";
import StudentEditProfile from "../pages/students/StudentEditProfile";
import StudentForgetPassword from "../pages/students/StudentForgetPassword";
import StudentMessage from "../pages/students/StudentMessage";
import StudentLogin from "../pages/students/StudentLogin";
import StudentProfile from "../pages/students/StudentProfile";
import CreateStudent from "../pages/teacher/CreateStudent";
import EditStudentDetail from "../pages/teacher/EditStudentDetail";
import CreateClass from "../pages/teacher/CreateClass";


export const pageRoutes = {
  home: "/",
  login: "/login",
  sign_up: "/signup",
  student: "/student-list",
  classes: "/classes",
  profile: "/profile",
  messages: "/messages",
  calendar: "/calendar",
  billing: "/fee-and-due",
  dashboard: "/dashboard",
  editProfile: "/editProfile",
  forgotPassword: "/forgot-password",
  changePassword: "/change-password",
  stepForm: "/step-form",
  createStudent: "/add-student",
  createClass: "/create-class",
  editStudentDetail: "/edit-student-details",
  // studentProfie
  studentchangePassword: "/student/change-password",
  studenteditProfile: "/student/edit-profile",
  studentfeesAndDues: "/student/fees-and-dues",
  studentforgetPassword: "/student/forget-password",
  studentlogin: "/student/login",
  studentmessages: "/student/messages",
  studentmyClass: "/student/myClass",
  studentprofile: "/student/profile",
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
    name: "billing",
    path: pageRoutes?.billing,
    element: <Billing />,
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
    path: pageRoutes?.forgotPassword,
    element: <ForgotPassword />,
    isPrivate: false,
  },
  {
    name: "ChangePassword",
    path: pageRoutes?.changePassword,
    element: <ChangePassword />,
    isPrivate: true,
  },
  {
    name: "StepForm",
    path: pageRoutes?.stepForm,
    element: <StepForm />,
    isPrivate: false,
  },
  {
    name: "CreateStudent",
    path: pageRoutes?.createStudent,
    element: <CreateStudent />,
    isPrivate: false,
  },
  {
    name: "editStudentDetail",
    path: pageRoutes?.editStudentDetail,
    element: <EditStudentDetail />,
    isPrivate: false,
  },
  {
    name: "CreateClass",
    path: pageRoutes?.createClass,
    element: <CreateClass />,
    isPrivate: false,
  },

  // Students
  {
    name: "studentchangePassword",
    path: pageRoutes?.studentchangePassword,
    element: <StudentChangePassword />,
    isPrivate: true,
  },
  {
    name: "studenteditProfile",
    path: pageRoutes?.studenteditProfile,
    element: <StudentEditProfile />,
    isPrivate: true,
  },
  {
    name: "studentfeesAndDues",
    path: pageRoutes?.studentfeesAndDues,
    element: <FeesAndDues />,
    isPrivate: true,
  },
  {
    name: "studentforgetPassword",
    path: pageRoutes?.studentforgetPassword,
    element: <StudentForgetPassword />,
    isPrivate: false,
  },
  {
    name: "studentlogin",
    path: pageRoutes?.studentlogin,
    element: <StudentLogin />,
    isPrivate: false,
  },
  {
    name: "studentmessages",
    path: pageRoutes?.studentmessages,
    element: <StudentMessage />,
    isPrivate: false,
  },
  {
    name: "studentmyClass",
    path: pageRoutes?.studentmyClass,
    element: <MyClass />,
    isPrivate: true,
  },
  {
    name: "studentprofile",
    path: pageRoutes?.studentprofile,
    element: <StudentProfile />,
    isPrivate: true,
  },
];
