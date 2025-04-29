
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface UserTypeRadioGroupProps {
  form: any;
}

const UserTypeRadioGroup: React.FC<UserTypeRadioGroupProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="userType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Ваша роль</FormLabel>
          <FormControl>
            <RadioGroup
              className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
              value={field.value}
              onValueChange={field.onChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Родитель" id="parent" />
                <Label htmlFor="parent">Родитель</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Педагог" id="teacher" />
                <Label htmlFor="teacher">Педагог</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Ученик" id="student" />
                <Label htmlFor="student">Ученик</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Другое" id="other" />
                <Label htmlFor="other">Другое</Label>
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default UserTypeRadioGroup;
