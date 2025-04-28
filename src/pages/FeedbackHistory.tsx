
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Clock, User, School, Filter, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Тип для обращения
interface FeedbackMessage {
  id: string;
  date: string;
  timestamp: string;
  category: string;
  status: "pending" | "answered" | "closed";
  subject: string;
  message: string;
  isAdmin?: boolean;
}

const FeedbackHistory = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<FeedbackMessage[]>([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<FeedbackMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

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
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      
      const mockFeedbacks: FeedbackMessage[] = [
        {
          id: "f-" + Date.now(),
          date: format(now, "d MMMM yyyy 'в' HH:mm", { locale: ru }),
          timestamp: now.toISOString(),
          category: "Родитель",
          status: "pending",
          subject: "Вопрос по цифровым коммуникациям",
          message: "Хотелось бы уточнить, как настроить получение уведомлений только по важным событиям класса, без лишних сообщений."
        },
        {
          id: "f-" + (Date.now() - 100000),
          date: format(yesterday, "d MMMM yyyy 'в' HH:mm", { locale: ru }),
          timestamp: yesterday.toISOString(),
          category: "Администратор",
          status: "answered",
          subject: "Важное объявление о родительском собрании",
          message: "Уважаемые родители, информируем вас о переносе родительского собрания с 15 мая на 20 мая. Просим принять к сведению.",
          isAdmin: true
        }
      ];
      
      // Получение сохраненных сообщений из локального хранилища
      const savedFeedbacks = localStorage.getItem("userFeedbacks");
      const parsedFeedbacks = savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
      
      const allFeedbacks = [...parsedFeedbacks, ...mockFeedbacks];
      setFeedbacks(allFeedbacks);
      setFilteredFeedbacks(allFeedbacks);
      setIsLoading(false);
    }, 1000);
  }, [navigate]);

  // Фильтрация отзывов по категории
  useEffect(() => {
    if (filter === "all") {
      setFilteredFeedbacks(feedbacks);
    } else {
      setFilteredFeedbacks(feedbacks.filter(feedback => {
        switch (filter) {
          case "parent":
            return feedback.category === "Родитель";
          case "teacher":
            return feedback.category === "Педагог";
          case "admin":
            return feedback.category === "Администратор";
          case "other":
            return !["Родитель", "Педагог", "Администратор"].includes(feedback.category);
          default:
            return true;
        }
      }));
    }
  }, [filter, feedbacks]);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Родитель":
        return <User className="h-3 w-3 mx-1" />;
      case "Педагог":
        return <School className="h-3 w-3 mx-1" />;
      case "Администратор":
        return <Settings className="h-3 w-3 mx-1" />;
      default:
        return <User className="h-3 w-3 mx-1" />;
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
          
          {!isLoading && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-muted/40 rounded-lg">
              <div className="mb-4 sm:mb-0">
                <span className="font-medium">Всего обращений:</span>{" "}
                <Badge variant="secondary" className="ml-1 text-sm">{feedbacks.length}</Badge>
              </div>
              
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="mr-2 text-sm text-muted-foreground">Фильтр по роли:</span>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Все категории" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="parent">Родители</SelectItem>
                    <SelectItem value="teacher">Педагоги</SelectItem>
                    <SelectItem value="admin">Администраторы</SelectItem>
                    <SelectItem value="other">Другие</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {isLoading ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">Загрузка сообщений...</p>
            </div>
          ) : filteredFeedbacks.length > 0 ? (
            <div className="space-y-4">
              {filteredFeedbacks.map((feedback) => (
                <Card 
                  key={feedback.id} 
                  className={`overflow-hidden ${feedback.isAdmin ? 'bg-amber-50' : ''}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-lg">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {feedback.subject}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" /> {feedback.date} • 
                          {getCategoryIcon(feedback.category)} {feedback.category}
                        </CardDescription>
                      </div>
                      <div>
                        {getStatusBadge(feedback.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <Separator />
                  <CardContent className={`pt-4 ${feedback.isAdmin ? 'bg-amber-50/50' : ''}`}>
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
