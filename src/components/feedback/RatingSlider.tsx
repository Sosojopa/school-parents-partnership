
import React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface RatingSliderProps {
  label: string;
  value: number[];
  onChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  form?: any; // Для совместимости с предыдущим использованием
}

const RatingSlider: React.FC<RatingSliderProps> = ({
  label,
  value,
  onChange,
  min = 1,
  max = 10,
  step = 1,
  form,
}) => {
  // Если компонент вызван через form
  if (form) {
    return (
      <div className="space-y-2">
        <Label htmlFor="rating">Оценка текущей коммуникации</Label>
        <div className="flex items-center gap-4">
          <Slider
            id="rating"
            min={1}
            max={10}
            step={1}
            value={[form.watch("rating") || 7]}
            onValueChange={(value) => form.setValue("rating", value[0])}
            className="flex-1"
          />
          <span className="bg-primary/10 px-3 py-1 rounded-md font-medium text-primary min-w-10 text-center">
            {form.watch("rating") || 7}
          </span>
        </div>
      </div>
    );
  }

  // Убедимся, что value - массив
  const safeValue = Array.isArray(value) ? value : [7];
  
  return (
    <div className="space-y-2">
      <Label htmlFor="communication-rating">{label}</Label>
      <div className="flex items-center gap-4">
        <Slider
          id="communication-rating"
          min={min}
          max={max}
          step={step}
          value={safeValue}
          onValueChange={onChange}
          className="flex-1"
        />
        <span className="bg-primary/10 px-3 py-1 rounded-md font-medium text-primary min-w-10 text-center">
          {safeValue[0]}
        </span>
      </div>
    </div>
  );
};

export default RatingSlider;
