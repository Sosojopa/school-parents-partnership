
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { MessageSquareText, BookOpen, Mail, Video, AlertTriangle, ExternalLink } from "lucide-react";

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
      actionLink: "#",
      actionText: "Правила общения в группе",
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
      actionLink: "#",
      actionText: "Видео-инструкция по входу",
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
      actionLink: "#",
      actionText: "Справочник контактов педагогов",
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
      actionLink: "#",
      actionText: "Расписание онлайн-встреч",
      badge: "Видеоконференции"
    }
  ];

  const upcomingMeetings = [
    {
      title: "Родительское собрание 5 класс",
      date: "28 апреля 2025",
      time: "18:00",
      platform: "Zoom",
      link: "#",
    },
    {
      title: "Консультация по итоговым работам",
      date: "4 мая 2025",
      time: "19:00",
      platform: "Google Meet",
      link: "#",
    },
    {
      title: "Собрание родительского комитета",
      date: "10 мая 2025",
      time: "18:30",
      platform: "Zoom",
      link: "#",
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
                <a 
                  href={channel.actionLink} 
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  {channel.actionText}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Запланированные онлайн-встречи</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Событие</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead>Платформа</TableHead>
                  <TableHead className="text-right">Ссылка</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingMeetings.map((meeting, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{meeting.title}</TableCell>
                    <TableCell>{meeting.date}</TableCell>
                    <TableCell>{meeting.time}</TableCell>
                    <TableCell>{meeting.platform}</TableCell>
                    <TableCell className="text-right">
                      <a 
                        href={meeting.link} 
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        Подключиться
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
