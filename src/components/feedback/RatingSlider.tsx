
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
}

const RatingSlider: React.FC<RatingSliderProps> = ({
  label,
  value,
  onChange,
  min = 1,
  max = 10,
  step = 1,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="communication-rating">{label}</Label>
      <div className="flex items-center gap-4">
        <Slider
          id="communication-rating"
          min={min}
          max={max}
          step={step}
          value={value}
          onValueChange={onChange}
          className="flex-1"
        />
        <span className="bg-primary/10 px-3 py-1 rounded-md font-medium text-primary min-w-10 text-center">
          {value[0]}
        </span>
      </div>
    </div>
  );
};

export default RatingSlider;
