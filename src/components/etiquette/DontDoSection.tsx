
import React from "react";
import { ThumbsDown } from "lucide-react";
import EtiquetteCard from "./EtiquetteCard";

const DontDoSection: React.FC = () => {
  const donts = [
    "Писать в личные социальные сети педагогов",
    "Отправлять сообщения в ночное время (после 20:00)",
    "Переписываться в родительских группах на повышенных тонах",
    "Пересылать личные сообщения в общие группы без согласия",
    "Обсуждать других родителей или детей в групповых чатах",
  ];

  return (
    <EtiquetteCard title="Чего не следует делать" icon={ThumbsDown}>
      <ul className="space-y-4">
        {donts.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1 min-w-5 text-red-500 font-bold">❌</div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </EtiquetteCard>
  );
};

export default DontDoSection;
