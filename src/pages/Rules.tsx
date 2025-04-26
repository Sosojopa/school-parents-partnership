
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Clock, MessageSquare, AlertTriangle, Users } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Регламент онлайн-общения
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
          Соблюдение регламента помогает всем участникам процесса общаться эффективно, 
          уважительно и в рамках профессиональной этики.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Временные рамки общения</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span><strong>Рабочее время:</strong> Понедельник – Пятница, с 9:00 до 18:00</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span><strong>Ответы на сообщения:</strong> в течение 24 рабочих часов</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span><strong>Важно:</strong> не рекомендуется отправлять сообщения в выходные дни и поздно вечером</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Темы для онлайн-обсуждения</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Домашние задания (уточнение, разъяснение)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Индивидуальные успехи ученика</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Поведенческие особенности (общие вопросы)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Общие вопросы учебного процесса</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Темы для личной встречи</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-sm text-muted-foreground">
                Следующие темы требуют очного обсуждения и не рекомендуются для онлайн-переписки:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Конфликтные ситуации между учениками или с педагогами</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Психологические особенности и глубокие личностные вопросы</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <span>Сложные семейные ситуации, влияющие на обучение</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Обязанности сторон</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-4">
                <h3 className="font-semibold text-md mb-2">Педагог обязуется:</h3>
                <ul className="space-y-2 pl-5 list-disc text-sm">
                  <li>Своевременно информировать о важных событиях и изменениях</li>
                  <li>Отвечать на сообщения в рамках установленного времени</li>
                  <li>Соблюдать профессиональный формат общения</li>
                </ul>
              </div>
              <Separator className="my-4" />
              <div>
                <h3 className="font-semibold text-md mb-2">Родитель обязуется:</h3>
                <ul className="space-y-2 pl-5 list-disc text-sm">
                  <li>Уважать личные и временные границы педагогов</li>
                  <li>Придерживаться вежливого тона в любой ситуации</li>
                  <li>Следовать рекомендациям по формату и времени общения</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="font-bold text-lg mb-4 text-center">Важное напоминание</h3>
          <p className="text-center">
            Соблюдение регламента помогает создать комфортную и продуктивную среду коммуникации. 
            В случае возникновения ситуаций, требующих более глубокого обсуждения, 
            всегда можно записаться на личную консультацию с педагогом или психологом школы.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
