
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import FeedbackHeader from "@/components/feedback/FeedbackHeader";
import InfoSidebar from "@/components/feedback/InfoSidebar";
import SuccessCard from "@/components/feedback/SuccessCard";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserTypeRadioGroup from "@/components/feedback/UserTypeRadioGroup";
import ContactFields from "@/components/feedback/ContactFields";
import RatingSlider from "@/components/feedback/RatingSlider";
import FeedbackTextarea from "@/components/feedback/FeedbackTextarea";
import { Button } from "@/components/ui/button";
import { History, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Схема валидации для формы обратной связи
const formSchema = z.object({
  userType: z.string().min(1, { message: "Пожалуйста, выберите тип пользователя" }),
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }).optional(),
  email: z.string().email({ message: "Введите корректный email" }).optional(),
  phone: z.string().optional(),
  rating: z.number().min(1).max(10),
  feedback: z.string().optional() // Поле необязательное
});

type FeedbackFormValues = z.infer<typeof formSchema>;

const Feedback = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormValues | null>(null);

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "",
      name: "",
      email: "",
      phone: "",
      rating: 7,
      feedback: "",
    },
  });

  // Обработчик успешной отправки формы
  const onSubmit = (data: FeedbackFormValues) => {
    console.log("Form submitted with data:", data);
    
    // Генерация уникального ID для отзыва
    const id = `feedback-${Date.now()}`;
    
    // Подготовка данных для сохранения
    const feedbackData = {
      id,
      name: data.name || "Аноним",
      date: new Date().toISOString(),
      userType: data.userType,
      rating: data.rating,
      email: data.email,
      phone: data.phone,
      improveSuggestion: data.feedback || "", // Обработка пустого поля
    };
    
    // Добавление отзыва в localStorage
    try {
      const existingFeedbacks = localStorage.getItem("feedbacks");
      const feedbacks = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];
      feedbacks.push(feedbackData);
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
      console.log("Feedback saved to localStorage:", feedbackData);
    } catch (error) {
      console.error("Ошибка при сохранении отзыва:", error);
    }
    
    setFormData(data);
    setSubmitted(true);
  };

  // Обработчик создания нового отзыва
  const handleNewFeedback = () => {
    form.reset();
    setSubmitted(false);
  };

  // Обработчик перехода к истории отзывов
  const handleViewHistory = () => {
    navigate("/feedback-history");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <FeedbackHeader />
        
        <Alert variant="destructive" className="my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Внимание!</AlertTitle>
          <AlertDescription>
            В данный момент отправка новых отзывов ограничена. Приносим извинения за временные неудобства.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Основной контент */}
          <div className="lg:col-span-2">
            {submitted && formData ? (
              // Карточка успешной отправки
              <SuccessCard 
                data={formData}
                onNewFeedback={handleNewFeedback}
                onViewHistory={handleViewHistory}
              />
            ) : (
              // Форма обратной связи
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Выбор роли пользователя */}
                      <UserTypeRadioGroup form={form} />

                      {/* Поля контактной информации */}
                      <ContactFields form={form} />

                      {/* Оценка текущей коммуникации */}
                      <RatingSlider form={form} />

                      {/* Поле для ввода отзыва */}
                      <FeedbackTextarea form={form} />

                      <div className="flex items-center justify-between pt-4">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={handleViewHistory}
                          className="flex items-center"
                        >
                          <History className="mr-2 h-4 w-4" />
                          История отзывов
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={true}
                          title="Отправка отзывов временно ограничена"
                        >
                          Отправить отзыв
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Боковая панель с информацией */}
          <div className="lg:col-span-1">
            <InfoSidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;
