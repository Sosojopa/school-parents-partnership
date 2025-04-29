
import { useState, useEffect } from "react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import FeedbackStats from "@/components/feedback/feedback-history/FeedbackStats";
import FeedbackFilter from "@/components/feedback/feedback-history/FeedbackFilter";
import LoadingSpinner from "@/components/feedback/feedback-history/LoadingSpinner";
import { 
  getAllFeedbacks, 
  getCountsByType, 
  filterFeedbacksByType, 
  calculateAverageRating, 
  type Feedback 
} from "@/components/feedback/feedback-history/feedback-data";

const FeedbackHistory = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [userFilter, setUserFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Загружаем отзывы при монтировании компонента
    const loadFeedbacks = () => {
      const allFeedbacks = getAllFeedbacks();
      setFeedbacks(allFeedbacks);
      setIsLoading(false);
    };
    
    loadFeedbacks();
  }, []);

  // Получаем статистику и отфильтрованные отзывы
  const counts = getCountsByType(feedbacks);
  const filteredFeedbacks = filterFeedbacksByType(feedbacks, userFilter);
  const averageRating = calculateAverageRating(feedbacks);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">История отзывов</h1>
        <p className="text-muted-foreground mb-8">
          Все отзывы пользователей о системе коммуникации в школе
        </p>
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Блок статистики */}
            <FeedbackStats 
              totalCount={counts.all}
              averageRating={averageRating}
              parentCount={counts.parent}
              teacherCount={counts.teacher}
            />
            
            {/* Блок фильтрации и отображения отзывов */}
            <FeedbackFilter 
              feedbacks={filteredFeedbacks}
              counts={counts}
              onFilterChange={setUserFilter}
              currentFilter={userFilter}
            />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default FeedbackHistory;
