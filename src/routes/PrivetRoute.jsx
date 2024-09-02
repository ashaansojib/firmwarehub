import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import MyLoader from "../components/MyLoader";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <MyLoader />
    );
  }
  if (user) {
    return children;
  }
    return <Navigate to="/user/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
