
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import RegistrationForm from "@/components/auth/RegistrationForm";
import RegistrationSuccess from "@/components/auth/RegistrationSuccess";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Проверяем URL на наличие '/register/success' для отображения успешной регистрации
    if (location.pathname === '/register/success') {
      setIsRegistered(true);
      // Пытаемся получить email из localStorage, если он был сохранен
      const savedEmail = localStorage.getItem("userEmail");
      if (savedEmail) {
        setEmail(savedEmail);
      }
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleRegistrationSuccess = (userEmail: string) => {
    setEmail(userEmail);
    setIsRegistered(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">
            {isRegistered ? "Регистрация завершена" : "Регистрация"}
          </h1>
          
          <p className="text-muted-foreground mb-8 text-center">
            {isRegistered 
              ? "Благодарим за создание аккаунта" 
              : "Создайте аккаунт для доступа к расширенным возможностям"}
          </p>
          
          {isRegistered ? (
            <RegistrationSuccess email={email} />
          ) : (
            <>
              <RegistrationForm onRegisterSuccess={handleRegistrationSuccess} />
              
              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  Уже есть аккаунт?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Войти
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
