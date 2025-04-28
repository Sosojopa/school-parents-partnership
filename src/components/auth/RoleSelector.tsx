
import { Control } from "react-hook-form";
import { RegistrationFormValues } from "./FormSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, School } from "lucide-react";

interface RoleSelectorProps {
  control: Control<RegistrationFormValues>;
}

const RoleSelector = ({ control }: RoleSelectorProps) => {
  return (
    <FormField
      control={control}
      name="role"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Ваша роль</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-4"
            >
              <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
                <FormControl>
                  <RadioGroupItem value="parent" />
                </FormControl>
                <FormLabel className="cursor-pointer flex items-center gap-2 font-normal">
                  <User className="h-4 w-4" /> Родитель
                </FormLabel>
              </FormItem>

              <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
                <FormControl>
                  <RadioGroupItem value="teacher" />
                </FormControl>
                <FormLabel className="cursor-pointer flex items-center gap-2 font-normal">
                  <School className="h-4 w-4" /> Педагог
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoleSelector;
