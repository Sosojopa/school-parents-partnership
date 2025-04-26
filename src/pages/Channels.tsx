
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { MessageSquareText, BookOpen, Mail, Video, AlertTriangle } from "lucide-react";

const CommunicationChannels = () => {
  const channelTypes = [
    {
      id: 1,
      name: "WhatsApp / Viber",
      description: "Оперативные уведомления, важные объявления",
      icon: <MessageSquareText className="h-6 w-6 text-green-600" />,
      instructions: [
        "Присоединитесь к официальной группе класса (ссылка предоставляется классным руководителем)",
        "Используйте только для срочных и важных сообщений",
        "Избегайте отправки сообщений вне рабочего времени",
        "Личные вопросы задавайте в приватных сообщениях, а не в общей группе"
      ],
      badge: "Быстрые сообщения"
    },
    {
      id: 2,
      name: "Электронный дневник",
      description: "Оценки, домашние задания, расписание",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      instructions: [
        "Авторизуйтесь на платформе, используя выданные школой логин и пароль",
        "Регулярно проверяйте новые оценки и комментарии педагогов",
        "Следите за актуальным расписанием и домашними заданиями",
        "Используйте встроенную систему сообщений для общения с педагогами"
      ],
      badge: "Официальный портал"
    },
    {
      id: 3,
      name: "Email",
      description: "Индивидуальные сообщения, документы",
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      instructions: [
        "Используйте для отправки более объемных сообщений и документов",
        "Указывайте четкую тему письма для более быстрой обработки",
        "Ожидайте ответа в течение 24 рабочих часов",
        "Всегда прикрепляйте необходимые документы в формате PDF или DOC"
      ],
      badge: "Официальная переписка"
    },
    {
      id: 4,
      name: "Zoom / Google Meet",
      description: "Родительские собрания, консультации",
      icon: <Video className="h-6 w-6 text-red-600" />,
      instructions: [
        "Подключайтесь к онлайн-встречам по предоставленным ссылкам вовремя",
        "Используйте гарнитуру для лучшего качества звука",
        "Подготовьте вопросы заранее для эффективного использования времени",
        "Проверьте свое оборудование перед важными встречами"
      ],
      badge: "Видеоконференции"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Каналы связи
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
          Для эффективной коммуникации между школой и родителями мы используем различные
          цифровые платформы. Выбирайте наиболее подходящий канал в зависимости от типа сообщения.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {channelTypes.map((channel) => (
            <Card key={channel.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {channel.icon}
                    <CardTitle className="text-xl">{channel.name}</CardTitle>
                  </div>
                  <Badge variant="secondary">{channel.badge}</Badge>
                </div>
                <CardDescription className="mt-2">{channel.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-md mb-3">Инструкция:</h3>
                <ul className="space-y-2 mb-4">
                  {channel.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <span className="text-sm">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Alert className="max-w-3xl mx-auto">
          <AlertTriangle className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <p className="font-medium">Важно:</p> 
            <p className="text-sm">
              Все официальные каналы связи утверждаются на родительском собрании. 
              Будьте осторожны с неофициальными каналами коммуникации и всегда проверяйте 
              источник информации.
            </p>
          </AlertDescription>
        </Alert>
      </main>
      <Footer />
    </div>
  );
};

export default CommunicationChannels;
