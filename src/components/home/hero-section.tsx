
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Эффективная и уважительная онлайн-коммуникация: вместе для будущего детей
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Наш проект создан для улучшения цифрового взаимодействия между школой и родителями, 
              обеспечивая комфортное и продуктивное общение всех участников образовательного процесса.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Здесь вы найдете регламенты и рекомендации, которые помогут сделать онлайн-коммуникацию 
              более эффективной и уважительной.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg">
                <Link to="/rules">Перейти к памятке</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/channels">Инструкции по входу в электронный дневник</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/feedback">Задать вопрос педагогу</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/feedback">Оценить взаимодействие</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600&h=500" 
              alt="Взаимодействие педагогов с родителями и детьми" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
