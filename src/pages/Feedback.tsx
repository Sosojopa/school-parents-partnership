
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";

// Импорт компонентов обратной связи
import FeedbackHeader from "@/components/feedback/FeedbackHeader";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import SuccessCard from "@/components/feedback/SuccessCard";
import InfoSidebar from "@/components/feedback/InfoSidebar";
import ContactInfo from "@/components/feedback/ContactInfo";

const Feedback = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [communicationRating, setCommunicationRating] = useState([5]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    likes: "",
    improvements: "",
    comment: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      category: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном приложении здесь был бы API-запрос для отправки на сервер
    console.log("Form submitted:", formData, "Rating:", communicationRating[0]);
    
    // Сохраняем сообщение в локальное хранилище (в реальном приложении будет API)
    const message = {
      id: `f-${Date.now()}`,
      date: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      category: formData.category || "Не указано",
      status: "pending",
      subject: "Обратная связь по работе системы",
      message: `${formData.likes ? `Что нравится: ${formData.likes}\n\n` : ""}${formData.improvements ? `Предложения по улучшению: ${formData.improvements}\n\n` : ""}${formData.comment ? `Дополнительно: ${formData.comment}` : ""}`
    };
    
    const savedFeedbacks = localStorage.getItem("userFeedbacks");
    const feedbacks = savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
    localStorage.setItem("userFeedbacks", JSON.stringify([message, ...feedbacks]));
    
    // Имитация отправки на email
    console.log(`Отправка на email: karramba881@gmail.com`, message);
    
    toast({
      title: "Форма отправлена",
      description: "Спасибо за ваш отзыв! Мы учтем ваше мнение для улучшения системы коммуникации.",
      duration: 5000,
    });
    
    setFormSubmitted(true);
    
    // Сброс формы после отправки
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      category: "",
      likes: "",
      improvements: "",
      comment: ""
    });
    setCommunicationRating([5]);
  };

  const handleResetSubmission = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow py-10 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <FeedbackHeader 
            title="Обратная связь"
            description="Ваше мнение помогает нам улучшать систему цифровой коммуникации и делать
              взаимодействие между школой и родителями более эффективным"
          />
          
          {formSubmitted ? (
            <SuccessCard onReset={handleResetSubmission} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="md:col-span-2">
                <FeedbackForm 
                  formData={formData}
                  communicationRating={communicationRating}
                  onRatingChange={setCommunicationRating}
                  onInputChange={handleInputChange}
                  onRadioChange={handleRadioChange}
                  onSubmit={handleSubmit}
                />
              </div>
              
              <div className="md:col-span-1">
                <InfoSidebar />
              </div>
            </div>
          )}
          
          <ContactInfo />
          
          {/* Кнопка для перехода к истории обращений */}
          <div className="mt-8 text-center">
            <Link to="/feedback-history">
              <Button variant="outline" className="flex items-center mx-auto">
                <History className="mr-2 h-4 w-4" />
                История обращений
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;
