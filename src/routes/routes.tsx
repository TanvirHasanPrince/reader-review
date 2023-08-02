import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import App from "../App";
import LoginForm from "../pages/login/LoginForm";
import RegisterForm from "../pages/register/RegisterForm";
import AllBooks from "../pages/allBooks/AllBooks";
import AddNewBook from "../pages/allBooks/AddNewBook";
import PrivateRoute from "./PrivateRoute";
import SingleBook from "../pages/allBooks/SingleBook";


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
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/book-details/:id",
        element: <SingleBook></SingleBook>,
      },
      {
        path: "/allbooks/book-details/:id",
        element: <SingleBook></SingleBook>,
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <AddNewBook></AddNewBook>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
