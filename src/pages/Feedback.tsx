
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import FeedbackHeader from "@/components/feedback/FeedbackHeader";
import InfoSidebar from "@/components/feedback/InfoSidebar";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import SuccessCard from "@/components/feedback/SuccessCard";

// Схема валидации для формы обратной связи
const formSchema = z.object({
  userType: z.string().min(1, { message: "Пожалуйста, выберите тип пользователя" }),
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }).optional(),
  email: z.string().email({ message: "Введите корректный email" }).optional(),
  phone: z.string().optional(),
  rating: z.number().min(1).max(10),
  feedback: z.string().min(3, { message: "Пожалуйста, оставьте свой отзыв" }),
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
      improveSuggestion: data.feedback,
    };
    
    // Добавление отзыва в localStorage
    try {
      const existingFeedbacks = localStorage.getItem("feedbacks");
      const feedbacks = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];
      feedbacks.push(feedbackData);
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
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
                  <FeedbackForm 
                    form={form} 
                    onSubmit={onSubmit} 
                    handleViewHistory={handleViewHistory}
                  />
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
