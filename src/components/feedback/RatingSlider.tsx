
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface RatingSliderProps {
  form: any;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  onChange?: (value: number[]) => void;
}

const RatingSlider: React.FC<RatingSliderProps> = ({
  form,
  label = "Оценка текущей коммуникации",
  min = 1,
  max = 10,
  step = 1,
}) => {
  return (
    <FormField
      control={form.control}
      name="rating"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="space-y-2">
              <Slider
                defaultValue={[field.value || 7]}
                min={min}
                max={max}
                step={step}
                onValueChange={(value) => field.onChange(value[0])}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>Не удовлетворен ({min})</span>
                <span>Средне ({Math.floor((min + max) / 2)})</span>
                <span>Очень доволен ({max})</span>
              </div>
              <div className="text-center font-medium text-xl mt-2">
                {field.value || 7} из {max}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RatingSlider;
