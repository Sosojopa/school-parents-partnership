
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FeedbackTextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  minHeight?: string;
}

const FeedbackTextarea: React.FC<FeedbackTextareaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  minHeight = "100px",
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`resize-none min-h-[${minHeight}]`}
      />
    </div>
  );
};

export default FeedbackTextarea;
