
import { Control } from "react-hook-form";
import { RegistrationFormValues } from "./FormSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface TermsCheckboxProps {
  control: Control<RegistrationFormValues>;
}

const TermsCheckbox = ({ control }: TermsCheckboxProps) => {
  return (
    <FormField
      control={control}
      name="acceptTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-2 space-y-0 mt-1">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Я принимаю{" "}
              <Link to="/rules" className="text-primary hover:underline">
                правила и условия
              </Link>{" "}
              использования платформы
            </label>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default TermsCheckbox;
