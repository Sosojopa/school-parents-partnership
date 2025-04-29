
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, MessageCircle } from "lucide-react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import FeedbackHeader from "@/components/feedback/FeedbackHeader";
import InfoSidebar from "@/components/feedback/InfoSidebar";
import SuccessCard from "@/components/feedback/SuccessCard";
import FeedbackForm from "@/components/feedback/FeedbackForm";

// Схема валидации для формы
const formSchema = z.object({
  userType: z.enum(["parent", "teacher", "admin", "other"], {
    required_error: "Пожалуйста, выберите вашу роль",
  }),
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }).optional(),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }).optional(),
  phone: z.string().min(10, {
    message: "Телефон должен содержать минимум 10 цифр",
  }).optional(),
  rating: z.number({
    required_error: "Пожалуйста, оцените текущую коммуникацию",
  }).min(1).max(10),
  feedback: z.string().min(10, {
    message: "Отзыв должен содержать минимум 10 символов",
  }),
});

// Типы данных формы
type FormData = z.infer<typeof formSchema>;

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Инициализация формы с значениями по умолчанию
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "parent",
      rating: 7,
      feedback: "",
    },
  });

  // Функция обработки отправки формы
  const onSubmit = (data: FormData) => {
    // Сохраняем отправленные данные для отображения
    setSubmittedData(data);
    
    // Генерация ID на основе текущего времени
    const timestamp = new Date();
    const feedbackId = `f-${format(timestamp, "yyyyMMddHHmmss")}`;
    
    // Форматирование даты для отображения
    const formattedDate = format(timestamp, "d MMMM yyyy 'в' HH:mm", { locale: ru });
    
    // Определение категории на основе userType
    const categoryMap: Record<string, string> = {
      parent: "Родитель",
      teacher: "Педагог",
      admin: "Администратор",
      other: "Другое",
    };
    
    // Создание сообщения на основе данных формы
    const feedbackMessage = {
      id: feedbackId,
      date: formattedDate,
      timestamp: timestamp.toISOString(),
      category: categoryMap[data.userType],
      status: "pending", // Изначальный статус - "ожидает ответа"
      subject: "Отзыв о системе коммуникации",
      message: `Оценка коммуникации: ${data.rating}/10\n\nЧто бы вы хотели улучшить?: ${data.feedback}\n\nДополнительные комментарии или предложения: `,
      senderName: data.name || undefined,
      rating: data.rating,
      isAdmin: data.userType === "admin",
    };
    
    // Получаем существующие отзывы из localStorage или создаем пустой массив
    const existingFeedbacks = localStorage.getItem("userFeedbacks");
    const parsedFeedbacks = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];
    
    // Добавляем новый отзыв в начало массива
    parsedFeedbacks.unshift(feedbackMessage);
    
    // Сохраняем обновленный массив отзывов в localStorage
    localStorage.setItem("userFeedbacks", JSON.stringify(parsedFeedbacks));
    
    // Устанавливаем состояние отправки
    setIsSubmitted(true);
  };

  // Функция для сброса формы и начала нового отзыва
  const handleNewFeedback = () => {
    form.reset({
      userType: "parent",
      rating: 7,
      feedback: "",
    });
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  // Функция для перехода к истории отзывов
  const handleViewHistory = () => {
    navigate("/feedback-history");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <FeedbackHeader />

          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Форма обратной связи
                    </CardTitle>
                    <CardDescription>
                      Поделитесь своими впечатлениями о системе коммуникации школы
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FeedbackForm 
                      form={form} 
                      onSubmit={onSubmit} 
                      handleViewHistory={handleViewHistory} 
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <InfoSidebar />
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <SuccessCard 
                data={submittedData} 
                onNewFeedback={handleNewFeedback} 
                onViewHistory={handleViewHistory}
              />
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={handleViewHistory}
              className="flex items-center mx-auto"
            >
              <History className="mr-2 h-4 w-4" />
              Просмотреть историю отзывов
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeedbackPage;
