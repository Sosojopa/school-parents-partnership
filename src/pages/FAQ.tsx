
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqItems = [
    {
      question: "Что делать, если учитель не отвечает на сообщение?",
      answer: "Если педагог не ответил в течение 24 рабочих часов, можно отправить повторное сообщение с вежливым напоминанием. Если ситуация повторяется, обратитесь к классному руководителю или администрации школы, предварительно убедившись, что ваши сообщения были доставлены и не попали в спам."
    },
    {
      question: "Куда обратиться, если не удаётся войти в электронный дневник?",
      answer: "При проблемах с доступом к электронному дневнику следуйте инструкции: 1) Попробуйте восстановить пароль через функцию «Забыли пароль?»; 2) Проверьте корректность логина и введенной почты; 3) Если проблема не решена, обратитесь к техническому специалисту школы по адресу support@school.ru или позвоните по телефону технической поддержки: +7 (XXX) XXX-XX-XX."
    },
    {
      question: "Можно ли писать учителю в выходные, если вопрос срочный?",
      answer: "В экстренных ситуациях допустимо отправить сообщение с пометкой «Срочно» в начале текста, однако стоит понимать, что педагог может ознакомиться с ним только в рабочее время. Для действительно неотложных вопросов, требующих немедленного решения и связанных с безопасностью детей, рекомендуется использовать телефонный звонок руководству школы."
    },
    {
      question: "Как получить личную консультацию у педагога?",
      answer: "Для организации личной встречи с педагогом напишите запрос через электронный дневник или электронную почту с указанием темы консультации и нескольких удобных для вас временных слотов. Учитель предложит конкретное время в рамках своего рабочего графика. Консультации обычно проводятся в заранее оговоренное время на территории школы или через видеоконференцию."
    },
    {
      question: "Какие каналы связи лучше использовать для разных типов вопросов?",
      answer: "Рекомендуется следующее распределение: для общих уведомлений - школьный мессенджер или групповой чат; для вопросов по успеваемости - электронный дневник; для индивидуальных обсуждений - личная встреча или видеозвонок; для документооборота и официальных запросов - email. Срочные организационные вопросы могут решаться в групповых чатах."
    },
    {
      question: "Как часто родители должны проверять электронный дневник?",
      answer: "Рекомендуется просматривать электронный дневник не реже 2-3 раз в неделю. Это позволит своевременно отслеживать успеваемость ребенка, быть в курсе домашних заданий и школьных мероприятий. Система обычно отправляет уведомления на электронную почту при выставлении новых оценок или публикации важных сообщений - рекомендуем активировать эту функцию."
    },
    {
      question: "Как правильно реагировать на негативные оценки в электронном дневнике?",
      answer: "При появлении неудовлетворительных оценок важно сохранять спокойствие. Сначала обсудите ситуацию с ребенком, выясните причины трудностей. Если нужна дополнительная информация, напишите корректное сообщение учителю с просьбой разъяснить, какие темы требуют повторения. Вместо критики сосредоточьтесь на конструктивных шагах по улучшению ситуации."
    },
    {
      question: "Что делать, если родитель не получает уведомления от классного руководителя?",
      answer: "Сначала проверьте настройки уведомлений в своем аккаунте электронного дневника и настройки приложения мессенджера. Удостоверьтесь, что указанный вами номер телефона и email актуальны и правильно записаны в системе. Если технические проблемы исключены, обратитесь к классному руководителю с вежливым напоминанием о необходимости включить вас в рассылку."
    },
    {
      question: "Нужно ли отвечать на информационные сообщения в родительском чате?",
      answer: "На чисто информационные сообщения от педагога в групповом чате необязательно отвечать, если не требуется подтверждение получения информации. Если учитель просит отметиться о прочтении, достаточно лаконичного «Спасибо, информацию получил(а)». Избегайте малосодержательных сообщений типа «ОК», «+», которые создают ненужные уведомления для всех участников чата."
    },
  ];
  
  const filteredFAQs = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow py-10 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Здесь собраны ответы на самые распространенные вопросы о цифровой коммуникации 
              между школой и родителями
            </p>
            
            <div className="relative max-w-md mx-auto mb-12">
              <Input
                type="search"
                placeholder="Поиск по вопросам..."
                className="pl-10 pr-4 py-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2" 
                  onClick={() => setSearchQuery("")}
                >
                  Очистить
                </Button>
              )}
            </div>
          </div>
          
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-muted-foreground">По вашему запросу ничего не найдено</p>
              <p className="mt-2">Попробуйте изменить поисковый запрос или просмотреть все вопросы</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Показать все вопросы
              </Button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="mb-8">
              {filteredFAQs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
                  <AccordionTrigger className="text-left font-medium py-4 hover:no-underline hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          
          <div className="bg-muted p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-3">Не нашли ответ на свой вопрос?</h3>
            <p className="mb-4">Вы можете задать его нам через форму обратной связи</p>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/feedback'}>
              Задать вопрос
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
