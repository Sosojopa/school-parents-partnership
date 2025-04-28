
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, RegistrationFormValues } from "./FormSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import PasswordField from "./PasswordField";
import TermsCheckbox from "./TermsCheckbox";

interface RegistrationFormProps {
  onRegisterSuccess: (email: string) => void;
}

const RegistrationForm = ({ onRegisterSuccess }: RegistrationFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (values: RegistrationFormValues) => {
    setIsLoading(true);
    
    // Имитация запроса к серверу
    setTimeout(() => {
      console.log("Registration form submitted:", values);
      
      // Сохраняем состояние авторизации (в реальном приложении это делал бы сервер)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", values.name);
      localStorage.setItem("userEmail", values.email);
      
      setIsLoading(false);
      
      // Передаем email в родительский компонент для отображения успешной регистрации
      onRegisterSuccess(values.email);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Создание аккаунта</CardTitle>
        <CardDescription>
          Введите ваши данные для регистрации в системе
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван Иванов" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="example@mail.ru" 
                      type="email" 
                      autoComplete="email"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <PasswordField
              control={form.control}
              name="password"
              label="Пароль"
              placeholder="••••••••"
              autoComplete="new-password"
            />
            
            <PasswordField
              control={form.control}
              name="confirmPassword"
              label="Подтверждение пароля"
              placeholder="••••••••"
              autoComplete="new-password"
            />
            
            <TermsCheckbox control={form.control} />
            
            <Button 
              type="submit" 
              className="w-full mt-2" 
              disabled={isLoading}
            >
              {isLoading ? (
                "Регистрация..."
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" /> Зарегистрироваться
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
