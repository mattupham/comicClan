import { useEffect, FC } from "react";
import { useLocation } from "react-router-dom";

// scrolls to the top of the page whenever a route is changed (React Router)
export const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
