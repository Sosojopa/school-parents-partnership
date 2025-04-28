
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Проверка авторизации при загрузке и изменении пути
  useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };
    
    checkLogin();
    
    // Закрываем меню при изменении пути
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О проекте" },
    { path: "/rules", label: "Регламент" },
    { path: "/channels", label: "Каналы связи" },
    { path: "/etiquette", label: "Цифровой этикет" },
    { path: "/faq", label: "Вопросы и ответы" },
    { path: "/feedback", label: "Обратная связь" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="font-semibold text-primary">Школа и родители: цифровое партнёрство</span>
          </Link>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink(link.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Link to="/profile" className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">П</AvatarFallback>
                </Avatar>
                <span>Профиль</span>
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/register">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  Регистрация
                </Button>
              </Link>
              <Link to="/login">
                <Button size="sm" className="hidden md:flex">Вход</Button>
              </Link>
            </>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background pt-2 md:hidden">
          <div className="container space-y-4 pb-6 bg-background shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-md ${
                    isActiveLink(link.path)
                      ? "bg-muted text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t">
              {isLoggedIn ? (
                <Link to="/profile" onClick={closeMenu}>
                  <Button className="w-full flex items-center justify-center">
                    <User className="mr-2 h-4 w-4" />
                    Личный кабинет
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/register" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Регистрация
                    </Button>
                  </Link>
                  <Link to="/login" onClick={closeMenu}>
                    <Button className="w-full">Вход</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
