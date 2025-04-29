
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
}

const StatCard = ({ title, value, description }: StatCardProps) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-2xl">{value}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

interface FeedbackStatsProps {
  totalCount: number;
  averageRating: string;
  parentCount: number;
  teacherCount: number;
}

const FeedbackStats = ({ totalCount, averageRating, parentCount, teacherCount }: FeedbackStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard 
        title="Всего отзывов" 
        value={totalCount} 
        description="Всего отзывов" 
      />
      <StatCard 
        title="Средняя оценка" 
        value={averageRating} 
        description="Средняя оценка" 
      />
      <StatCard 
        title="Отзывы родителей" 
        value={parentCount} 
        description="Отзывов от родителей" 
      />
      <StatCard 
        title="Отзывы учителей" 
        value={teacherCount} 
        description="Отзывов от учителей" 
      />
    </div>
  );
};

export default FeedbackStats;
