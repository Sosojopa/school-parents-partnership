
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Школа и родители: цифровое партнёрство</h3>
            <p className="text-muted-foreground">© {new Date().getFullYear()} Все права защищены</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-center md:text-right text-sm text-muted-foreground">
              Нам важно ваше мнение о проекте
            </p>
            <div className="flex justify-center md:justify-end">
              <Button 
                variant="outline" 
                onClick={() => window.open("https://forms.google.com/feedback", "_blank")}
              >
                Обратная связь
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            Контакт администрации: admin@school-parents.ru | +7 (XXX) XXX-XX-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
