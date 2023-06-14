import {
      createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../components/NotFound/NotFound";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import AddClass from "../pages/AddClass/AddClass";
import DashBoard from "../Layout/DashBoard";
import AllUser from "../pages/DashBoard/AllUser";
import AdminHome from "../pages/DashBoard/AdminHome";
import ManageBooking from "../pages/DashBoard/ManageClasses";
import ManageClasses from "../pages/DashBoard/ManageClasses";
import InstructorHome from "../pages/DashBoard/InstructorHome";
import InstructorClasses from "../pages/DashBoard/InstructorClasses";
import MyClasses from "../pages/DashBoard/MyClasses";
import UserHome from "../pages/DashBoard/UserHome";
import EnrolledClasses from "../pages/DashBoard/EnrolledClasses";
import Blog from "../pages/Blog/Blog";
import Payment from "../pages/DashBoard/Payment";
import StudentPaymentHistory from "../pages/DashBoard/StudentPaymentHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path: '/signup',
                        element: <SignUp></SignUp>
                  },
                  {
                        path:'/classes',
                        element:<Classes></Classes>
                  },
                  {
                        path:"/instructors",
                        element:<Instructors></Instructors>
                  },
                  {
                        path: '/blog',
                        element: <Blog></Blog>
                  }


            ],
            errorElement: <NotFound></NotFound>
      },
      {
            path: "dashboard",
            element: <DashBoard></DashBoard>,
            children: [
                  {
                        path:'addclass',
                        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
                  },
                  {
                        path:"alluser",
                        element:<AdminRoute><AllUser></AllUser></AdminRoute>
                  },
                  {
                        path:'adminhome',
                        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
                  },
                  {
                        path:'instructorhome',
                        element:<InstructorHome></InstructorHome>
                  },
                  {
                        path:'manageclass',
                        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
                  },
                  {
                        path:'classbyinstructor',
                        element:<InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
                  },
                  {
                        path: 'myclasses',
                        element: <MyClasses></MyClasses>
                  },
                  {
                        path: "userhome",
                        element: <UserHome></UserHome>     
                  },
                  {
                        path:'enrolledclasses',
                        element:<EnrolledClasses></EnrolledClasses>
                  },
                  {
                        path: 'payment',
                        element: <Payment></Payment>
                  },
                  {
                        path:'paymenthistory',
                        element:<StudentPaymentHistory></StudentPaymentHistory>
                  }
            ]

      }
    
]);