import { useLocation } from 'react-router-dom';

import { publicRoutes } from '../routes';

const NotAuthRoute = ({ children }) => {
  const location = useLocation();

  const checkIsPublicRoute = () => {
    const pathParts = location.pathname.split('/').filter((p) => p);

    const isPublicRoute = publicRoutes.some((route) => {
      const routeParts = route.path.split('/').filter((p) => p);
      return routeParts.every((part, index) => {
        if (part.startsWith(':')) {
          return true;
        }
        return part === pathParts[index];
      });
    });
    return isPublicRoute;
  };
  if (checkIsPublicRoute()) return;

  return children;
};

export default NotAuthRoute;
