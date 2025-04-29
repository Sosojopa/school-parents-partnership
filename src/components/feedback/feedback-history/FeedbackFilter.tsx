
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeedbackCard from "./FeedbackCard";

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

interface FeedbackFilterProps {
  feedbacks: Feedback[];
  counts: {
    all: number;
    parent: number;
    teacher: number;
    other: number;
  };
  onFilterChange: (value: string) => void;
  currentFilter: string;
}

const FeedbackFilter = ({ feedbacks, counts, onFilterChange, currentFilter }: FeedbackFilterProps) => {
  // Функция для отображения карточек с отзывами
  const renderFeedbackGrid = () => {
    if (feedbacks.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Отзывов не найдено</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbacks.map(feedback => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue={currentFilter} onValueChange={onFilterChange} className="mb-6">
      <TabsList className="mb-4">
        <TabsTrigger value="all">Все отзывы ({counts.all})</TabsTrigger>
        <TabsTrigger value="родитель">Родители ({counts.parent})</TabsTrigger>
        <TabsTrigger value="педагог">Учителя ({counts.teacher})</TabsTrigger>
        {counts.other > 0 && (
          <TabsTrigger value="other">Другие ({counts.other})</TabsTrigger>
        )}
      </TabsList>
      
      <TabsContent value="all" className="mt-0">
        {renderFeedbackGrid()}
      </TabsContent>
      
      <TabsContent value="родитель" className="mt-0">
        {renderFeedbackGrid()}
      </TabsContent>
      
      <TabsContent value="педагог" className="mt-0">
        {renderFeedbackGrid()}
      </TabsContent>
      
      {counts.other > 0 && (
        <TabsContent value="other" className="mt-0">
          {renderFeedbackGrid()}
        </TabsContent>
      )}
    </Tabs>
  );
};

export default FeedbackFilter;
