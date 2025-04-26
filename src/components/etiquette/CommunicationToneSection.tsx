
import React from "react";
import { MessageSquare } from "lucide-react";
import EtiquetteCard from "./EtiquetteCard";

const CommunicationToneSection: React.FC = () => {
  const toneRules = [
    "Писать уважительно, в корректной форме",
    "Избегать заглавных букв (воспринимается как крик)",
    "Использовать обращение по имени и отчеству",
    "Сохранять нейтральный тон даже при решении сложных вопросов",
  ];

  return (
    <EtiquetteCard title="Тон общения" icon={MessageSquare}>
      <ul className="space-y-4">
        {toneRules.map((rule, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1 bg-primary/10 p-1 rounded-full">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
            </div>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </EtiquetteCard>
  );
};

export default CommunicationToneSection;
