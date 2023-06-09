import {
      createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../components/NotFound/NotFound";
import Classes from "../pages/Classes/Classes";

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
                  }

            ],
            errorElement: <NotFound></NotFound>
      },
    
]);