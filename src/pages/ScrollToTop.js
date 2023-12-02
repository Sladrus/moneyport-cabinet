import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.getElementsByClassName('wrapper-scroll')[0].scrollTo(0, 0);
  }, [location.pathname]);
};

export default ScrollToTop;
