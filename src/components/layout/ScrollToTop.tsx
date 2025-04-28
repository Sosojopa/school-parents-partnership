import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Компонент для автоматической прокрутки страницы вверх
 * при переходе между маршрутами
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
