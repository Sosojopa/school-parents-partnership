
import React from "react";
import { FileText } from "lucide-react";
import EtiquetteCard from "./EtiquetteCard";

const MessageStructureSection: React.FC = () => {
  const messageStructure = [
    { number: 1, part: "Приветствие:", example: "\"Здравствуйте, Имя Отчество\"" },
    { number: 2, part: "Суть вопроса:", example: "кратко и четко сформулированная проблема" },
    { number: 3, part: "Ожидания:", example: "какой информации или помощи вы ожидаете" },
    { number: 4, part: "Завершение:", example: "\"Спасибо за ответ\", \"С уважением\"" },
  ];

  return (
    <EtiquetteCard title="Структура сообщения" icon={FileText}>
      <ul className="space-y-4">
        {messageStructure.map((item) => (
          <li key={item.number} className="flex items-start gap-2">
            <div className="min-w-6 flex justify-center mt-1">
              <span className="inline-block px-2 py-1 rounded-full bg-primary text-white text-xs">{item.number}</span>
            </div>
            <span><strong>{item.part}</strong> {item.example}</span>
          </li>
        ))}
      </ul>
    </EtiquetteCard>
  );
};

export default MessageStructureSection;
