
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Другие способы связи</h2>
      <p className="mb-6">
        Если у вас есть срочный вопрос или предложение, вы также можете связаться с нами:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-medium mb-1">Электронная почта</h3>
          <p className="text-sm text-primary">digital@school-example.ru</p>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-medium mb-1">Телефон</h3>
          <p className="text-sm text-primary">+7 (XXX) XXX-XX-XX</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
