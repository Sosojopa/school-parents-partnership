
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface RegistrationSuccessProps {
  email: string;
}

const RegistrationSuccess = ({ email }: RegistrationSuccessProps) => {
  return (
    <div className="text-center space-y-6 p-8 border rounded-lg bg-card">
      <div className="flex justify-center">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle size={48} className="text-primary" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Регистрация успешно завершена</h2>
        <p className="text-muted-foreground">
          На адрес <span className="font-medium text-foreground">{email}</span> отправлено 
          письмо с инструкциями для подтверждения вашего аккаунта.
        </p>
      </div>
      
      <div className="space-y-4 pt-4">
        <p className="text-sm text-muted-foreground">
          Не получили письмо? Проверьте папку "Спам" или 
          <button className="text-primary hover:underline ml-1 font-medium">
            отправьте письмо повторно
          </button>
        </p>
        
        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link to="/login">Перейти на страницу входа</Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
