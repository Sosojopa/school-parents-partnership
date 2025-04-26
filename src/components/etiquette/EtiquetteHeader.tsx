
import React from "react";

const EtiquetteHeader: React.FC = () => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Цифровой этикет</h1>
      <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Правила корректной онлайн-коммуникации помогают создать уважительное 
        и эффективное взаимодействие между педагогами и родителями
      </p>
    </div>
  );
};

export default EtiquetteHeader;
