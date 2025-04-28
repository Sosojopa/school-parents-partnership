
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import InfoSidebar from "@/components/feedback/InfoSidebar";
import SuccessCard from "@/components/feedback/SuccessCard";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface FormDataType {
  name: string;
  email: string;
  category: string;
  likes: string;
  improvements: string;
  comment: string;
}

const Feedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [communicationRating, setCommunicationRating] = useState([5]);
  const [formData, setFormData] = useState<FormDataType>({
    name: localStorage.getItem("userName") || "",
    email: localStorage.getItem("userEmail") || "",
    category: localStorage.getItem("userRole") === "teacher" ? "Педагог" : "Родитель",
    likes: "",
    improvements: "",
    comment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleRatingChange = (value: number[]) => {
    setCommunicationRating(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Получаем существующие отзывы из localStorage или создаем пустой массив
    const existingFeedbacks = localStorage.getItem("userFeedbacks") 
      ? JSON.parse(localStorage.getItem("userFeedbacks") || "[]") 
      : [];
    
    // Формируем новый отзыв
    const newFeedback = {
      id: "f-" + Date.now(),
      date: format(new Date(), "d MMMM yyyy 'в' HH:mm", { locale: ru }),
      timestamp: new Date().toISOString(),
      category: formData.category,
      status: "pending",
      subject: "Отзыв о системе коммуникации",
      message: `Оценка коммуникации: ${communicationRating[0]}/10\n\nЧто нравится: ${formData.likes}\n\nПредложения по улучшению: ${formData.improvements}\n\nДополнительные комментарии: ${formData.comment}`,
      isAdmin: formData.category === "Администратор"
    };
    
    // Добавляем новый отзыв в массив
    const updatedFeedbacks = [newFeedback, ...existingFeedbacks];
    
    // Сохраняем обновленный массив в localStorage
    localStorage.setItem("userFeedbacks", JSON.stringify(updatedFeedbacks));
    
    // Показываем toast и устанавливаем флаг успешной отправки
    toast({
      title: "Отзыв отправлен",
      description: "Спасибо за ваш отзыв! Он успешно сохранен.",
    });
    
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCommunicationRating([5]);
    setFormData({
      name: localStorage.getItem("userName") || "",
      email: localStorage.getItem("userEmail") || "",
      category: localStorage.getItem("userRole") === "teacher" ? "Педагог" : "Родитель",
      likes: "",
      improvements: "",
      comment: "",
    });
  };

  const handleViewHistory = () => {
    navigate("/feedback-history");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {!isSubmitted ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Обратная связь</h1>
              <p className="text-muted-foreground mb-8">
                Помогите нам улучшить коммуникацию между школой и родителями
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <FeedbackForm
                    formData={formData}
                    communicationRating={communicationRating}
                    onRatingChange={handleRatingChange}
                    onInputChange={handleInputChange}
                    onRadioChange={handleRadioChange}
                    onSubmit={handleSubmit}
                  />
                </div>
                
                <div className="md:col-span-1">
                  <InfoSidebar onViewHistory={handleViewHistory} />
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  variant="outline" 
                  onClick={handleViewHistory}
                  className="flex items-center mx-auto"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> 
                  Просмотреть историю отзывов
                </Button>
              </div>
            </>
          ) : (
            <>
              <SuccessCard onReset={handleReset} />
              
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  onClick={handleViewHistory}
                  className="flex items-center mx-auto"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> 
                  Просмотреть историю отзывов
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;
