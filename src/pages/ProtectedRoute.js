import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { AUTH_ROUTE } from "../utils/consts";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(AUTH_ROUTE);
  }, [user]);

  // if (!user) {
  //   return <Navigate to={AUTH_ROUTE} replace state={{ from: location }} />; //поменять
  // }
  return children;
};

export default ProtectedRoute;
