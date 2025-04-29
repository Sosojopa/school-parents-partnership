
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { History } from "lucide-react";
import UserTypeRadioGroup from "@/components/feedback/UserTypeRadioGroup";
import ContactFields from "@/components/feedback/ContactFields";
import RatingSlider from "@/components/feedback/RatingSlider";
import FeedbackTextarea from "@/components/feedback/FeedbackTextarea";

interface FeedbackFormProps {
  form: any;
  onSubmit: (data: any) => void;
  handleViewHistory: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  form,
  onSubmit,
  handleViewHistory,
}) => {
  // Проверяем наличие функции onSubmit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)(e);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Выбор роли пользователя */}
        <UserTypeRadioGroup form={form} />

        {/* Поля контактной информации */}
        <ContactFields form={form} />

        {/* Оценка текущей коммуникации */}
        <RatingSlider 
          label="Оценка текущей коммуникации"
          value={[form.watch("rating") || 7]}
          onChange={(value) => form.setValue("rating", value[0])}
          min={1}
          max={10}
          step={1}
        />

        {/* Поле для ввода отзыва */}
        <FeedbackTextarea form={form} />

        <div className="flex items-center justify-between pt-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={handleViewHistory}
            className="flex items-center"
          >
            <History className="mr-2 h-4 w-4" />
            История отзывов
          </Button>
          <Button type="submit">Отправить отзыв</Button>
        </div>
      </form>
    </Form>
  );
};

export default FeedbackForm;
