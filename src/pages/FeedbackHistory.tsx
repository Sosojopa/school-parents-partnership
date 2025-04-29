
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Clock, User, School, Filter, Settings, Star } from "lucide-react";
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
  rating?: number;
  senderName?: string;
  isAdmin?: boolean;
}

// Предопределенные отзывы
const predefinedFeedbacks: FeedbackMessage[] = [
  {
    id: "f-20250425131400",
    date: "25 апреля 2025 в 13:14",
    timestamp: "2025-04-25T13:14:00",
    category: "Родитель",
    status: "pending",
    subject: "Отзыв о системе коммуникации",
    message: "Оценка коммуникации: 9/10\n\nЧто нравится: Хорошая система оповещений\n\nПредложения по улучшению: Хотелось бы получать напоминания о важных мероприятиях заранее.\n\nДополнительные комментарии: Всё очень удобно!",
    rating: 9,
    senderName: "Елена"
  },
  {
    id: "f-20250426123400",
    date: "26 апреля 2025 в 12:34",
    timestamp: "2025-04-26T12:34:00",
    category: "Педагог",
    status: "pending",
    subject: "Отзыв о системе коммуникации",
    message: "Оценка коммуникации: 7/10\n\nЧто нравится: Удобный интерфейс\n\nПредложения по улучшению: Ввести чёткие временные рамки для ответов родителей на сообщения.\n\nДополнительные комментарии: Иногда родительские вопросы требуют отдельной консультации — хорошо бы предусмотреть возможность записи на видеовстречи через сайт.",
    rating: 7,
    senderName: "Дмитрий"
  },
  {
    id: "f-20250426124100",
    date: "26 апреля 2025 в 12:41",
    timestamp: "2025-04-26T12:41:00",
    category: "Родитель",
    status: "pending",
    subject: "Отзыв о системе коммуникации",
    message: "Оценка коммуникации: 8/10\n\nЧто нравится: Интуитивно понятный интерфейс\n\nПредложения по улучшению: Добавить единое расписание консультаций классного руководителя.\n\nДополнительные комментарии: Очень нравится наличие памятки по цифровому этикету — теперь меньше недопонимания.",
    rating: 8,
    senderName: "Светлана"
  },
  {
    id: "f-20250426130500",
    date: "26 апреля 2025 в 13:05",
    timestamp: "2025-04-26T13:05:00",
    category: "Педагог",
    status: "pending",
    subject: "Отзыв о системе коммуникации",
    message: "Оценка коммуникации: 6/10\n\nЧто нравится: Оперативность ответов\n\nПредложения по улучшению: Больше обучающих инструкций для родителей по использованию цифровых платформ.\n\nДополнительные комментарии: ",
    rating: 6,
    senderName: "Николай"
  },
  {
    id: "f-20250427143300",
    date: "27 апреля 2025 в 14:33",
    timestamp: "2025-04-27T14:33:00",
    category: "Родитель",
    status: "pending",
    subject: "Отзыв о системе коммуникации",
    message: "Оценка коммуникации: 10/10\n\nЧто нравится: Всё очень хорошо организовано\n\nПредложения по улучшению: Всё устраивает, но возможно добавить быстрые шаблоны для обращения к учителям.\n\nДополнительные комментарии: Очень удобно, что теперь есть централизованный доступ ко всем каналам связи через один сайт!",
    rating: 10,
    senderName: "Анна"
  },
  {
    id: "f-20250427145800",
    date: "27 апреля 2025 в 14:58",
    timestamp: "2025-04-27T14:58:00",
    category: "Педагог",
    status: "pending",
    subject: "Отзыв о системе коммуникации",
    message: "Оценка коммуникации: 8/10\n\nЧто нравится: Наличие четких правил\n\nПредложения по улучшению: Разграничить темы для общения: что обсуждать в мессенджерах, а что через официальный электронный дневник.\n\nДополнительные комментарии: В перспективе можно организовать мини-курсы по цифровому этикету для родителей первоклассников.",
    rating: 8,
    senderName: "Олег"
  }
];

const FeedbackHistory = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<FeedbackMessage[]>([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<FeedbackMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    // Имитация загрузки данных
    setIsLoading(true);
    
    // Получение сохраненных сообщений из локального хранилища
    const savedFeedbacks = localStorage.getItem("userFeedbacks");
    let parsedFeedbacks = savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
    
    // Объединяем сохраненные отзывы с предопределенными
    const allFeedbacks = [...parsedFeedbacks, ...predefinedFeedbacks];
    
    // Сортируем отзывы по дате (от новых к старым)
    const sortedFeedbacks = allFeedbacks.sort((a, b) => {
      // Если есть timestamp, используем его для сортировки
      if (a.timestamp && b.timestamp) {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
      // Иначе используем id (который содержит временную метку)
      return b.id.localeCompare(a.id);
    });
    
    // Удаляем дубликаты по id
    const uniqueFeedbacks = sortedFeedbacks.filter((feedback, index, self) =>
      index === self.findIndex((f) => f.id === feedback.id)
    );
    
    setFeedbacks(uniqueFeedbacks);
    setFilteredFeedbacks(uniqueFeedbacks);
    setIsLoading(false);
  }, []);

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

  // Расчет количества отзывов по категориям
  const countByCategory = {
    total: feedbacks.length,
    parent: feedbacks.filter(f => f.category === "Родитель").length,
    teacher: feedbacks.filter(f => f.category === "Педагог").length,
    admin: feedbacks.filter(f => f.category === "Администратор").length,
    other: feedbacks.filter(f => !["Родитель", "Педагог", "Администратор"].includes(f.category)).length
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
                Все отправленные сообщения и ответы на них
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
            <div className="flex flex-col space-y-4 mb-8">
              <div className="p-5 bg-muted/40 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Статистика обращений</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-white p-3 rounded-md shadow-sm text-center">
                    <div className="text-2xl font-bold">{countByCategory.total}</div>
                    <div className="text-xs text-muted-foreground">Всего</div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm text-center">
                    <div className="text-2xl font-bold">{countByCategory.parent}</div>
                    <div className="text-xs text-muted-foreground">От родителей</div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm text-center">
                    <div className="text-2xl font-bold">{countByCategory.teacher}</div>
                    <div className="text-xs text-muted-foreground">От педагогов</div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm text-center">
                    <div className="text-2xl font-bold">{countByCategory.admin}</div>
                    <div className="text-xs text-muted-foreground">От администрации</div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm text-center">
                    <div className="text-2xl font-bold">{countByCategory.other}</div>
                    <div className="text-xs text-muted-foreground">Другие</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/40 rounded-lg">
                <div className="mb-4 sm:mb-0 flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="mr-2 text-sm text-muted-foreground">Фильтр по роли:</span>
                </div>
                
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
                        <CardDescription className="flex flex-wrap items-center mt-1 gap-1">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {feedback.date}
                          </div>
                          <span className="mx-1">•</span>
                          <div className="flex items-center">
                            {getCategoryIcon(feedback.category)} {feedback.category}
                          </div>
                          {feedback.senderName && (
                            <>
                              <span className="mx-1">•</span>
                              <div className="flex items-center">
                                <User className="h-3 w-3 mr-1" /> {feedback.senderName}
                              </div>
                            </>
                          )}
                          {feedback.rating && (
                            <>
                              <span className="mx-1">•</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 mr-1 text-amber-500" /> {feedback.rating}/10
                              </div>
                            </>
                          )}
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
                <h3 className="text-lg font-medium mb-2">Нет отзывов, соответствующих фильтру</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить параметры фильтрации или отправить новый отзыв
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
