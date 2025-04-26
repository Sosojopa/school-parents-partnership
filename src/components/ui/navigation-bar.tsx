
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Главная", path: "/" },
    { name: "О проекте", path: "/about" },
    { name: "Регламент общения", path: "/rules" },
    { name: "Каналы связи", path: "/channels" },
    { name: "Цифровой этикет", path: "/etiquette" },
    { name: "Вопросы и ответы", path: "/faq" },
    { name: "Обратная связь", path: "/feedback" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-3 px-4 md:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-primary">
            Школа и родители: цифровое партнёрство
          </Link>
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <div className={`md:flex flex-wrap items-center gap-1 md:gap-2 ${isMenuOpen ? 'flex flex-col pt-4' : 'hidden'}`}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
