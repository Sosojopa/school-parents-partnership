
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface UserType {
  value: string;
  label: string;
}

interface UserTypeRadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  userTypes?: UserType[];
}

const UserTypeRadioGroup: React.FC<UserTypeRadioGroupProps> = ({
  value,
  onChange,
  userTypes = [
    { value: "parent", label: "Родитель" },
    { value: "teacher", label: "Педагог" },
    { value: "administrator", label: "Администратор" },
    { value: "other", label: "Другое" },
  ],
}) => {
  return (
    <div className="space-y-2">
      <Label>Кем вы являетесь?</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="flex flex-col sm:flex-row gap-4"
      >
        {userTypes.map((type) => (
          <div key={type.value} className="flex items-center space-x-2">
            <RadioGroupItem value={type.value} id={type.value} />
            <Label htmlFor={type.value}>{type.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default UserTypeRadioGroup;
