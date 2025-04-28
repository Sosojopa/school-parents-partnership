
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn } from "lucide-react";

// Схема валидации формы
const formSchema = z.object({
  email: z.string().email("Введите корректный email адрес"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsLoading(true);
    
    // Имитация запроса к серверу
    setTimeout(() => {
      // В реальном приложении здесь будет проверка учетных данных
      console.log("Login attempt:", values);
      
      // Сохраняем состояние авторизации в localStorage (для демонстрации)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", values.email);
      
      setIsLoading(false);
      
      toast({
        title: "Вход выполнен",
        description: "Вы успешно вошли в систему",
        duration: 3000,
      });
      
      // Перенаправление в личный кабинет
      navigate("/profile");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Вход в аккаунт</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Войдите, чтобы получить доступ к вашему личному кабинету
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Вход в систему</CardTitle>
              <CardDescription>
                Введите ваш email и пароль для входа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Пароль</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="••••••••" 
                            type="password"
                            autoComplete="current-password" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-2" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Выполняется вход..."
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" /> Войти
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center w-full">
                <Link to="#" className="text-primary hover:underline">
                  Забыли пароль?
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Ещё нет аккаунта?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
