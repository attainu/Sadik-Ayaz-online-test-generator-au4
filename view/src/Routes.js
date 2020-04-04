import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Logout from './Components/Logout';


var routes = [
    {
        path: "/sign-in",
        name: "Login",
        icon: "",
        component: Login
      },
      {
        path: "/sign-up",
        name: "Signup",
        icon: "nc-icon nc-bank",
        component: SignUp
      },
      {
        path: "/",
        name: "Home",
        icon: "nc-icon nc-bank",
        component: Home
      },
      {
        path: "/dashboard",
        name: "dashboard",
        icon: "nc-icon nc-bank",
        component: Dashboard
      },
      {
        path: "/logout",
        name: "logout",
        icon: "nc-icon nc-bank",
        component: Logout
      }

]


export default routes;
