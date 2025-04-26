
import React from "react";
import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SuccessCardProps {
  onReset: () => void;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ onReset }) => {
  return (
    <Card className="mb-10 max-w-lg mx-auto text-center">
      <CardHeader className="pb-2">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <CardTitle>Спасибо за ваш отзыв!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6">
          Мы внимательно изучим вашу обратную связь и учтем ее при совершенствовании 
          нашей системы коммуникации.
        </p>
        <Button 
          variant="outline"
          onClick={onReset}
        >
          Отправить еще один отзыв
        </Button>
      </CardContent>
    </Card>
  );
};

export default SuccessCard;
