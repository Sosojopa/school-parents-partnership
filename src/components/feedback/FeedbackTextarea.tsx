
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface FeedbackTextareaProps {
  form: any;
}

const FeedbackTextarea: React.FC<FeedbackTextareaProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="feedback"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Что бы вы хотели улучшить?</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Поделитесь вашим мнением о том, как мы можем улучшить коммуникацию..."
              className="resize-none min-h-[120px]"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FeedbackTextarea;
