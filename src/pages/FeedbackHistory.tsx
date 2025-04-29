
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Star } from "lucide-react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";

// Интерфейс для отзыва
interface Feedback {
  id: string;
  name: string;
  date: string;
  rating: number;
  role: string;
  improveSuggestion?: string;
  additionalComments?: string;
  userType?: string;
}

// Предопределенные отзывы
const predefinedFeedbacks: Feedback[] = [
  {
    id: "pre-1",
    name: "Елена",
    date: "2025-04-25T13:14:00",
    rating: 9,
    role: "Родитель",
    improveSuggestion: "Хотелось бы получать напоминания о важных мероприятиях заранее.",
    additionalComments: "Всё очень удобно!",
    userType: "Родитель"
  },
  {
    id: "pre-2",
    name: "Дмитрий",
    date: "2025-04-26T12:34:00",
    rating: 7,
    role: "Педагог",
    improveSuggestion: "Ввести чёткие временные рамки для ответов родителей на сообщения.",
    additionalComments: "Иногда родительские вопросы требуют отдельной консультации — хорошо бы предусмотреть возможность записи на видеовстречи через сайт.",
    userType: "Педагог"
  },
  {
    id: "pre-3",
    name: "Светлана",
    date: "2025-04-26T12:41:00",
    rating: 8,
    role: "Родитель",
    improveSuggestion: "Добавить единое расписание консультаций классного руководителя.",
    additionalComments: "Очень нравится наличие памятки по цифровому этикету — теперь меньше недопонимания.",
    userType: "Родитель"
  },
  {
    id: "pre-4",
    name: "Николай",
    date: "2025-04-26T13:05:00",
    rating: 6,
    role: "Педагог",
    improveSuggestion: "Больше обучающих инструкций для родителей по использованию цифровых платформ.",
    userType: "Педагог"
  },
  {
    id: "pre-5",
    name: "Анна",
    date: "2025-04-27T14:33:00",
    rating: 10,
    role: "Родитель",
    improveSuggestion: "Всё устраивает, но возможно добавить быстрые шаблоны для обращения к учителям.",
    additionalComments: "Очень удобно, что теперь есть централизованный доступ ко всем каналам связи через один сайт!",
    userType: "Родитель"
  },
  {
    id: "pre-6",
    name: "Олег",
    date: "2025-04-27T14:58:00",
    rating: 8,
    role: "Педагог",
    improveSuggestion: "Разграничить темы для общения: что обсуждать в мессенджерах, а что через официальный электронный дневник.",
    additionalComments: "В перспективе можно организовать мини-курсы по цифровому этикету для родителей первоклассников.",
    userType: "Педагог"
  }
];

const FeedbackHistory = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [userFilter, setUserFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Извлекаем пользовательские отзывы из localStorage
    const storedFeedbacks = getAllFeedbacks();
    
    // Объединяем предопределенные и пользовательские отзывы
    const allFeedbacks = [...predefinedFeedbacks, ...storedFeedbacks];
    
    // Сортируем по дате (от новых к старым)
    allFeedbacks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setFeedbacks(allFeedbacks);
    setIsLoading(false);
  }, []);

  // Функция для получения всех отзывов из localStorage
  const getAllFeedbacks = (): Feedback[] => {
    try {
      const feedbacksString = localStorage.getItem("feedbacks");
      if (feedbacksString) {
        return JSON.parse(feedbacksString);
      }
    } catch (error) {
      console.error("Ошибка при получении отзывов:", error);
    }
    return [];
  };

  // Фильтрация отзывов по типу пользователя
  const getFilteredFeedbacks = () => {
    if (userFilter === "all") {
      return feedbacks;
    }
    return feedbacks.filter(feedback => 
      feedback.userType?.toLowerCase() === userFilter.toLowerCase() || 
      feedback.role?.toLowerCase() === userFilter.toLowerCase()
    );
  };

  // Получение количества каждого типа отзывов
  const getCountsByType = () => {
    const counts = {
      all: feedbacks.length,
      parent: feedbacks.filter(f => 
        f.userType?.toLowerCase() === "родитель" || 
        f.role?.toLowerCase() === "родитель"
      ).length,
      teacher: feedbacks.filter(f => 
        f.userType?.toLowerCase() === "педагог" || 
        f.role?.toLowerCase() === "педагог"
      ).length,
      other: feedbacks.filter(f => 
        (f.userType?.toLowerCase() !== "родитель" && 
         f.userType?.toLowerCase() !== "педагог" &&
         f.role?.toLowerCase() !== "родитель" && 
         f.role?.toLowerCase() !== "педагог" &&
         (f.userType || f.role))
      ).length,
    };
    return counts;
  };

  const counts = getCountsByType();
  const filteredFeedbacks = getFilteredFeedbacks();
  const averageRating = feedbacks.length > 0 
    ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1) 
    : "N/A";

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd MMMM yyyy, HH:mm", { locale: ru });
    } catch (error) {
      return "Дата неизвестна";
    }
  };

  // Рендер звездочек для оценки
  const renderStars = (rating: number) => {
    const maxRating = 10;
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm font-medium">({rating}/10)</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">История отзывов</h1>
        <p className="text-muted-foreground mb-8">
          Все отзывы пользователей о системе коммуникации в школе
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Статистика */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{feedbacks.length}</CardTitle>
                  <CardDescription>Всего отзывов</CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{averageRating}</CardTitle>
                  <CardDescription>Средняя оценка</CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{counts.parent}</CardTitle>
                  <CardDescription>Отзывов от родителей</CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{counts.teacher}</CardTitle>
                  <CardDescription>Отзывов от учителей</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            {/* Табы фильтрации */}
            <Tabs defaultValue="all" onValueChange={setUserFilter} className="mb-6">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Все отзывы ({counts.all})</TabsTrigger>
                <TabsTrigger value="родитель">Родители ({counts.parent})</TabsTrigger>
                <TabsTrigger value="педагог">Учителя ({counts.teacher})</TabsTrigger>
                {counts.other > 0 && (
                  <TabsTrigger value="other">Другие ({counts.other})</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                {filteredFeedbacks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredFeedbacks.map(feedback => (
                      <Card key={feedback.id} className="h-full">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{feedback.name}</CardTitle>
                              <CardDescription className="mt-1">
                                {formatDate(feedback.date)}
                              </CardDescription>
                            </div>
                            <Badge variant={feedback.userType?.toLowerCase() === "родитель" || feedback.role?.toLowerCase() === "родитель" ? "default" : "secondary"}>
                              {feedback.userType || feedback.role || "Неизвестно"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <div className="font-medium text-sm mb-1">Оценка:</div>
                            {renderStars(feedback.rating)}
                          </div>
                          
                          {feedback.improveSuggestion && (
                            <div>
                              <div className="font-medium text-sm mb-1">Предложения по улучшению:</div>
                              <p className="text-sm">{feedback.improveSuggestion}</p>
                            </div>
                          )}
                          
                          {feedback.additionalComments && (
                            <div>
                              <div className="font-medium text-sm mb-1">Дополнительные комментарии:</div>
                              <p className="text-sm">{feedback.additionalComments}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">Отзывов не найдено</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="родитель" className="mt-0">
                {/* Контент такой же, как и в основной вкладке, отображается автоматически благодаря фильтрации */}
              </TabsContent>
              
              <TabsContent value="педагог" className="mt-0">
                {/* Контент такой же, как и в основной вкладке, отображается автоматически благодаря фильтрации */}
              </TabsContent>
              
              {counts.other > 0 && (
                <TabsContent value="other" className="mt-0">
                  {/* Контент такой же, как и в основной вкладке, отображается автоматически благодаря фильтрации */}
                </TabsContent>
              )}
            </Tabs>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default FeedbackHistory;
