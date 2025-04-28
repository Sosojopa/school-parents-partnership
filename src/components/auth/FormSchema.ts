
import { z } from "zod";

// Определение схемы валидации для регистрации
export const registrationSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  role: z.enum(["parent", "teacher"], {
    required_error: "Выберите вашу роль",
  }),
  password: z.string().min(8, {
    message: "Пароль должен содержать минимум 8 символов",
  }),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "Необходимо принять условия использования",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

// Определение схемы валидации для входа
export const loginSchema = z.object({
  email: z.string().email({
    message: "Введите корректный email",
  }),
  password: z.string().min(1, {
    message: "Введите пароль",
  }),
  rememberMe: z.boolean().optional(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

// Схема для обратной связи
export const feedbackSchema = z.object({
  name: z.string().min(2, { message: "Введите ваше имя" }),
  email: z.string().email({ message: "Введите корректный email" }),
  subject: z.string().min(2, { message: "Введите тему сообщения" }),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
  userType: z.enum(["client", "partner", "other"], { 
    required_error: "Выберите тип пользователя" 
  }),
  rating: z.number().min(1).max(5),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;
