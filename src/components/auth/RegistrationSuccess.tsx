
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface RegistrationSuccessProps {
  email?: string;
}

const RegistrationSuccess = ({ email = "вашу почту" }: RegistrationSuccessProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-2 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold">Регистрация успешна!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p className="text-muted-foreground">
          Благодарим за регистрацию в нашей системе. Ваш аккаунт успешно создан.
        </p>
        
        <p>
          Мы отправили письмо с подтверждением на <span className="font-medium">{email}</span>.
          Пожалуйста, проверьте вашу электронную почту и подтвердите регистрацию.
        </p>
        
        <div className="pt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link to="/login">Войти в систему</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">На главную</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegistrationSuccess;
