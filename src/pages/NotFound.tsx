
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-muted-foreground mb-8">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
