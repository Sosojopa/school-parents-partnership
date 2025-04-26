
import React from "react";
import { Lock, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const InfoSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Конфиденциальность</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Все сообщения анонимны и используются только для улучшения системы коммуникации. 
            Персональные данные не передаются третьим лицам.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Что происходит с отзывами?</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Мы регулярно анализируем полученную обратную связь и используем её для:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 pl-5 list-disc">
            <li>Улучшения регламентов коммуникации</li>
            <li>Оптимизации каналов связи</li>
            <li>Обучения педагогов и родителей</li>
            <li>Разработки новых инструментов взаимодействия</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="bg-primary/5 p-4 rounded-lg">
        <h3 className="font-medium mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
            <path d="M9 18h6"/>
            <path d="M10 22h4"/>
          </svg>
          Совет
        </h3>
        <p className="text-sm">
          Чем конкретнее ваш отзыв, тем эффективнее мы сможем улучшить систему. 
          Описывайте реальные ситуации и предлагайте решения.
        </p>
      </div>
    </div>
  );
};

export default InfoSidebar;
