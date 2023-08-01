import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  if (isLoading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  // Check if the user is authenticated (i.e., has a valid email) before rendering the protected content.
  // If the user is not authenticated, redirect them to the login page with the current location path preserved in the state.
  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  // If the user is authenticated, render the 'children' components passed to this PrivateRoute.
  return children;
};

export default PrivateRoute;
