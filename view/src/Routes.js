import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
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
        path: "/About",
        name: "About",
        icon: "nc-icon nc-bank",
        component: About
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
