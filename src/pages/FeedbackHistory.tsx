
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Clock, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Тип для обращения
interface FeedbackMessage {
  id: string;
  date: string;
  category: string;
  status: "pending" | "answered" | "closed";
  subject: string;
  message: string;
}

const FeedbackHistory = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<FeedbackMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setIsLoading(true);
    
    // Проверка авторизации (в реальном приложении)
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    
    // Имитация получения данных с сервера
    setTimeout(() => {
      // В реальном приложении здесь был бы API-запрос
      const mockFeedbacks: FeedbackMessage[] = [
        {
          id: "f-" + Date.now(),
          date: "28 апреля 2025",
          category: "Родитель",
          status: "pending",
          subject: "Вопрос по цифровым коммуникациям",
          message: "Хотелось бы уточнить, как настроить получение уведомлений только по важным событиям класса, без лишних сообщений."
        }
      ];
      
      // Получение сохраненных сообщений из локального хранилища
      const savedFeedbacks = localStorage.getItem("userFeedbacks");
      const parsedFeedbacks = savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
      
      setFeedbacks([...parsedFeedbacks, ...mockFeedbacks]);
      setIsLoading(false);
    }, 1000);
  }, [navigate]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Ожидает ответа</Badge>;
      case "answered":
        return <Badge variant="outline" className="bg-green-100 text-green-800">Есть ответ</Badge>;
      case "closed":
        return <Badge variant="outline" className="bg-gray-100 text-gray-800">Закрыто</Badge>;
      default:
        return <Badge variant="outline">Неизвестно</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">История обращений</h1>
              <p className="text-muted-foreground mt-1">
                Все ваши отправленные сообщения и ответы на них
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/feedback")}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться к форме
            </Button>
          </div>
          
          {isLoading ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">Загрузка сообщений...</p>
            </div>
          ) : feedbacks.length > 0 ? (
            <div className="space-y-4">
              {feedbacks.map((feedback) => (
                <Card key={feedback.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-lg">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {feedback.subject}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" /> {feedback.date} • 
                          <User className="h-3 w-3 mx-1" /> {feedback.category}
                        </CardDescription>
                      </div>
                      <div>
                        {getStatusBadge(feedback.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <Separator />
                  <CardContent className="pt-4">
                    <p className="whitespace-pre-line">{feedback.message}</p>
                    
                    {feedback.status === "answered" && (
                      <div className="mt-4 pt-4 border-t">
                        <h4 className="font-medium mb-2">Ответ:</h4>
                        <p className="text-sm text-muted-foreground">
                          Ответ от администрации будет отображаться здесь.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 pb-6 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-25 mb-4" />
                <h3 className="text-lg font-medium mb-2">У вас пока нет отправленных сообщений</h3>
                <p className="text-muted-foreground mb-4">
                  Когда вы отправите сообщение через форму обратной связи, оно появится здесь
                </p>
                <Button onClick={() => navigate("/feedback")}>
                  Отправить обращение
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeedbackHistory;
