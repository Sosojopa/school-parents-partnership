
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Главная", path: "/" },
    { name: "О проекте", path: "/about" },
    { name: "Регламент общения", path: "/rules" },
    { name: "Каналы связи", path: "/channels" },
    { name: "Цифровой этикет", path: "/etiquette" },
    { name: "Вопросы и ответы", path: "/faq" },
    { name: "Обратная связь", path: "/feedback" },
  ];

  return (
    <nav className="bg-white shadow-sm py-3 px-4 md:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-primary">
            Школа и родители
          </Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
        
        <div className="hidden md:flex flex-wrap items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
              }`}
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
