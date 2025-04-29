
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, PenLine, History } from "lucide-react";

interface SuccessCardProps {
  data: any;
  onNewFeedback: () => void;
  onViewHistory: () => void;
}

const SuccessCard = ({ data, onNewFeedback, onViewHistory }: SuccessCardProps) => {
  // Функция для преобразования userType в читаемую строку
  const getUserTypeLabel = (userType: string) => {
    switch (userType) {
      case "parent":
        return "Родитель";
      case "teacher":
        return "Педагог";
      case "admin":
        return "Администратор";
      case "other":
        return "Другое";
      default:
        return "Не указано";
    }
  };

  return (
    <Card className="border-green-200 shadow-md overflow-hidden">
      <div className="bg-green-50 px-6 py-4 flex items-center border-b border-green-100">
        <CheckCircle2 className="h-6 w-6 text-green-600 mr-3" />
        <CardTitle className="text-xl text-green-800">Отзыв успешно отправлен</CardTitle>
      </div>
      
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="p-4 bg-muted/40 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-3">
              {data?.userType && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  {getUserTypeLabel(data.userType)}
                </Badge>
              )}
              {data?.rating && (
                <Badge variant="outline" className="bg-amber-50 text-amber-700">
                  Оценка: {data.rating}/10
                </Badge>
              )}
            </div>
            
            <div className="space-y-2">
              {data?.name && (
                <p><span className="font-medium">Имя:</span> {data.name}</p>
              )}
              {data?.email && (
                <p><span className="font-medium">Email:</span> {data.email}</p>
              )}
              {data?.phone && (
                <p><span className="font-medium">Телефон:</span> {data.phone}</p>
              )}
              <div className="mt-3 pt-3 border-t border-muted">
                <p className="font-medium">Отзыв:</p>
                <p className="mt-1 text-muted-foreground whitespace-pre-line">{data?.feedback}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
            <p className="font-medium mb-2">Что дальше?</p>
            <p>Ваш отзыв будет рассмотрен администрацией. Мы используем все предложения для улучшения коммуникации между школой и родителями.</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t flex flex-col sm:flex-row gap-3 justify-between py-4">
        <Button 
          variant="outline" 
          onClick={onNewFeedback}
          className="flex items-center w-full sm:w-auto"
        >
          <PenLine className="mr-2 h-4 w-4" />
          Отправить еще отзыв
        </Button>
        <Button 
          onClick={onViewHistory}
          className="flex items-center w-full sm:w-auto"
        >
          <History className="mr-2 h-4 w-4" />
          Просмотреть историю отзывов
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SuccessCard;
