
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Школа и родители</h3>
            <p className="text-sm text-muted-foreground">
              Проект по созданию эффективной системы цифровой коммуникации между школой и родителями
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">О проекте</Link>
              </li>
              <li>
                <Link to="/rules" className="hover:text-primary transition-colors">Регламент общения</Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-primary transition-colors">Обратная связь</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами:
            </p>
            <p className="text-sm">
              <a 
                href="mailto:school@example.com" 
                className="text-primary hover:underline"
              >
                school@example.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Школа и родители: цифровое партнёрство. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
