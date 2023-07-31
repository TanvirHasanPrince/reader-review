import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import App from "../App";
import LoginForm from "../pages/login/LoginForm";
import RegisterForm from "../pages/register/RegisterForm";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
