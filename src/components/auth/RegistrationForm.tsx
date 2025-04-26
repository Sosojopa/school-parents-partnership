
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { formSchema, FormValues } from "./FormSchema";
import PasswordField from "./PasswordField";
import TermsCheckbox from "./TermsCheckbox";

interface RegistrationFormProps {
  onRegisterSuccess: (email: string) => void;
}

const RegistrationForm = ({ onRegisterSuccess }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Симуляция задержки API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Здесь должен быть реальный API-запрос для регистрации
      console.log("Отправка данных регистрации:", values);
      
      // Вызываем колбэк успешной регистрации
      onRegisterSuccess(values.email);
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Не удалось зарегистрировать пользователя. Пожалуйста, попробуйте снова.",
        variant: "destructive",
      });
      console.error("Ошибка регистрации:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Иван Петров" {...field} />
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
                <Input type="email" placeholder="example@mail.ru" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <PasswordField 
          form={form} 
          name="password" 
          label="Пароль" 
          placeholder="Минимум 8 символов" 
        />
        
        <PasswordField 
          form={form} 
          name="confirmPassword" 
          label="Подтверждение пароля" 
          placeholder="Повторите пароль" 
        />
        
        <TermsCheckbox form={form} />
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Регистрация...
            </>
          ) : (
            "Зарегистрироваться"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
