
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { LogOut, User, Settings, MessageSquare } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userData, setUserData] = useState({
    name: "Пользователь",
    email: "user@example.com",
    role: "Родитель",
    joined: "Апрель 2025"
  });

  // В реальном приложении здесь будет проверка авторизации
  useEffect(() => {
    // Симуляция проверки авторизации
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      // Здесь бы загружались данные пользователя с сервера
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        setUserData(prev => ({
          ...prev,
          email: storedEmail
        }));
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    // Очистка данных авторизации
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы",
      duration: 3000,
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground mb-8">
            Управляйте своим аккаунтом и просматривайте историю взаимодействия
          </p>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="messages">Сообщения</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" /> 
                    Информация о пользователе
                  </CardTitle>
                  <CardDescription>
                    Основная информация о вашем профиле
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Имя</h3>
                        <p className="text-base">{userData.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                        <p className="text-base">{userData.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Роль</h3>
                        <p className="text-base">{userData.role}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Дата регистрации</h3>
                        <p className="text-base">{userData.joined}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="destructive" 
                        onClick={handleLogout} 
                        className="flex items-center"
                      >
                        <LogOut className="mr-2 h-4 w-4" /> Выйти из аккаунта
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" /> 
                    История сообщений
                  </CardTitle>
                  <CardDescription>
                    Ваши отправленные обращения и ответы на них
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">У вас пока нет отправленных сообщений</p>
                    <Button onClick={() => navigate("/feedback-history")}>
                      Перейти к истории обращений
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" /> 
                    Настройки профиля
                  </CardTitle>
                  <CardDescription>
                    Управляйте настройками вашего аккаунта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Настройки профиля будут доступны в ближайшем обновлении</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
