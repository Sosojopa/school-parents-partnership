
import React from "react";
import { Slider } from "@/components/ui/slider";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface RatingSliderProps {
  form: any;
  label?: string;
  value?: number[];
  onChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

const RatingSlider: React.FC<RatingSliderProps> = ({ 
  form, 
  label = "Оценка текущей коммуникации",
  min = 1,
  max = 10,
  step = 1
}) => {
  return (
    <FormField
      control={form.control}
      name="rating"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="space-y-2">
            <FormControl>
              <Slider
                min={min}
                max={max}
                step={step}
                value={[field.value || 7]}
                onValueChange={(values) => field.onChange(values[0])}
                className="py-4"
              />
            </FormControl>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Очень плохо ({min})</span>
              <span>Нейтрально ({Math.floor((max - min) / 2) + min})</span>
              <span>Отлично ({max})</span>
            </div>
            <div className="text-center font-semibold text-lg">
              Ваша оценка: {field.value || 7}/{max}
            </div>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default RatingSlider;
