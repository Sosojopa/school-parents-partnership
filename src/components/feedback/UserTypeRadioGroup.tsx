
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
        <FormItem className="space-y-3">
          <FormLabel>Вы являетесь</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="parent" id="parent" />
                  <Label htmlFor="parent" className="flex-grow cursor-pointer">Родитель</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="teacher" id="teacher" />
                  <Label htmlFor="teacher" className="flex-grow cursor-pointer">Педагог</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="admin" id="admin" />
                  <Label htmlFor="admin" className="flex-grow cursor-pointer">Администратор</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="flex-grow cursor-pointer">Другое</Label>
                </div>
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
