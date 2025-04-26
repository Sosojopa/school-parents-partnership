
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ContactFieldsProps {
  nameValue: string;
  emailValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactFields: React.FC<ContactFieldsProps> = ({
  nameValue,
  emailValue,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Имя (по желанию)</Label>
        <Input
          id="name"
          name="name"
          value={nameValue}
          onChange={onChange}
          placeholder="Как к вам обращаться"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email (по желанию)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={emailValue}
          onChange={onChange}
          placeholder="Для обратной связи"
        />
      </div>
    </div>
  );
};

export default ContactFields;
