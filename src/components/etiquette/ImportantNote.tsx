
import React from "react";

const ImportantNote: React.FC = () => {
  return (
    <div className="bg-primary/5 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-lg mb-4">Важно помнить</h3>
      <p className="mb-2">
        Цель цифровой коммуникации — сделать процесс образования более эффективным и комфортным для всех. 
        Вежливость и уважение — основа успешного взаимодействия.
      </p>
      <p>
        Если возникла сложная ситуация, требующая подробного обсуждения — лучше перенести коммуникацию 
        в формат личной встречи или видеозвонка.
      </p>
    </div>
  );
};

export default ImportantNote;
