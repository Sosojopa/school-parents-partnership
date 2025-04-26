
import React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import RatingSlider from "./RatingSlider";
import UserTypeRadioGroup from "./UserTypeRadioGroup";
import FeedbackTextarea from "./FeedbackTextarea";
import ContactFields from "./ContactFields";

interface FeedbackFormProps {
  formData: {
    name: string;
    email: string;
    category: string;
    likes: string;
    improvements: string;
    comment: string;
  };
  communicationRating: number[];
  onRatingChange: (value: number[]) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onRadioChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  formData,
  communicationRating,
  onRatingChange,
  onInputChange,
  onRadioChange,
  onSubmit,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Оценка взаимодействия</CardTitle>
        <CardDescription>
          Поделитесь своим мнением о системе коммуникации между школой и родителями
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <RatingSlider
              label="Как вы оцениваете текущую онлайн-коммуникацию? (от 1 до 10)"
              value={communicationRating}
              onChange={onRatingChange}
            />
            
            <UserTypeRadioGroup
              value={formData.category}
              onChange={onRadioChange}
            />
            
            <FeedbackTextarea
              id="likes"
              name="likes"
              label="Что вам нравится в текущей системе коммуникации?"
              value={formData.likes}
              onChange={onInputChange}
              placeholder="Например: удобство использования, быстрота ответов..."
            />
            
            <FeedbackTextarea
              id="improvements"
              name="improvements"
              label="Что бы вы хотели улучшить?"
              value={formData.improvements}
              onChange={onInputChange}
              placeholder="Какие аспекты коммуникации требуют доработки?"
            />
            
            <FeedbackTextarea
              id="comment"
              name="comment"
              label="Дополнительные комментарии или предложения"
              value={formData.comment}
              onChange={onInputChange}
              placeholder="Любые идеи и пожелания..."
            />
            
            <ContactFields
              nameValue={formData.name}
              emailValue={formData.email}
              onChange={onInputChange}
            />
            
            <div className="pt-2">
              <Button type="submit" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" /> Отправить отзыв
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
