
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { registrationSchema, RegistrationFormValues } from "./FormSchema";
import PasswordField from "./PasswordField";
import TermsCheckbox from "./TermsCheckbox";
import RoleSelector from "./RoleSelector";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "parent",
      acceptTerms: false,
    },
  });

  const onSubmit = (values: RegistrationFormValues) => {
    setIsLoading(true);
    
    // В реальном приложении здесь был бы вызов API для регистрации
    setTimeout(() => {
      console.log("Form values:", values);
      
      // Сохраняем данные в localStorage (для демонстрации)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", values.email);
      localStorage.setItem("userName", values.name);
      localStorage.setItem("userRole", values.role);
      localStorage.setItem("userJoinedDate", new Date().toISOString());
      
      setIsLoading(false);
      navigate("/register/success");
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Создать аккаунт</CardTitle>
        <CardDescription>
          Введите свои данные для регистрации
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
                    <Input placeholder="Введите ваше имя" {...field} />
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
                    <Input placeholder="email@example.com" type="email" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <PasswordField 
              control={form.control} 
              showPassword={showPassword} 
              toggleVisibility={togglePasswordVisibility}
            />
            
            <RoleSelector control={form.control} />
            
            <TermsCheckbox control={form.control} />
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          variant="link" 
          className="px-0" 
          onClick={() => navigate("/login")}
        >
          Уже есть аккаунт? Войти
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegistrationForm;
