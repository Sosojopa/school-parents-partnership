
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface Feedback {
  id: string;
  name: string;
  date: string;
  rating: number;
  role?: string;
  improveSuggestion?: string;
  additionalComments?: string;
  userType?: string;
}

interface FeedbackCardProps {
  feedback: Feedback;
}

const FeedbackCard = ({ feedback }: FeedbackCardProps) => {
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

  const userType = feedback.userType || feedback.role || "Неизвестно";
  const isParent = userType.toLowerCase() === "родитель";
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{feedback.name}</CardTitle>
            <CardDescription className="mt-1">
              {formatDate(feedback.date)}
            </CardDescription>
          </div>
          <Badge variant={isParent ? "default" : "secondary"}>
            {userType}
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
  );
};

export default FeedbackCard;
