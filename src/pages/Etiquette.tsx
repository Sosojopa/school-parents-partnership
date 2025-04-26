
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ThumbsUp, ThumbsDown, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Etiquette = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow py-10 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Цифровой этикет</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Правила корректной онлайн-коммуникации помогают создать уважительное 
              и эффективное взаимодействие между педагогами и родителями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Тон общения</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Писать уважительно, в корректной форме</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Избегать заглавных букв (воспринимается как крик)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Использовать обращение по имени и отчеству</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Сохранять нейтральный тон даже при решении сложных вопросов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Структура сообщения</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex justify-center mt-1">
                      <span className="inline-block px-2 py-1 rounded-full bg-primary text-white text-xs">1</span>
                    </div>
                    <span><strong>Приветствие:</strong> "Здравствуйте, Имя Отчество"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex justify-center mt-1">
                      <span className="inline-block px-2 py-1 rounded-full bg-primary text-white text-xs">2</span>
                    </div>
                    <span><strong>Суть вопроса:</strong> кратко и четко сформулированная проблема</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex justify-center mt-1">
                      <span className="inline-block px-2 py-1 rounded-full bg-primary text-white text-xs">3</span>
                    </div>
                    <span><strong>Ожидания:</strong> какой информации или помощи вы ожидаете</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-6 flex justify-center mt-1">
                      <span className="inline-block px-2 py-1 rounded-full bg-primary text-white text-xs">4</span>
                    </div>
                    <span><strong>Завершение:</strong> "Спасибо за ответ", "С уважением"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center gap-2">
                  <ThumbsDown className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Чего не следует делать</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-5 text-red-500 font-bold">❌</div>
                    <span>Писать в личные социальные сети педагогов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-5 text-red-500 font-bold">❌</div>
                    <span>Отправлять сообщения в ночное время (после 20:00)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-5 text-red-500 font-bold">❌</div>
                    <span>Переписываться в родительских группах на повышенных тонах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-5 text-red-500 font-bold">❌</div>
                    <span>Пересылать личные сообщения в общие группы без согласия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-5 text-red-500 font-bold">❌</div>
                    <span>Обсуждать других родителей или детей в групповых чатах</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Примеры корректных сообщений</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="italic text-sm">
                    «Здравствуйте, Мария Ивановна! Хотела уточнить, верно ли мы поняли задание по литературе на следующую неделю: нужно прочитать главы 1-3 и ответить на вопросы в конце? Спасибо за разъяснение. С уважением, Анна Петрова»
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="italic text-sm">
                    «Добрый день, Александр Сергеевич! У Антона возникли трудности с решением задач по геометрии. Подскажите, пожалуйста, на что стоит обратить внимание при подготовке? Может быть, есть дополнительные материалы? Благодарю за помощь!»
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="italic text-sm">
                    «Здравствуйте! Сообщаю, что Ирина не сможет присутствовать на занятиях 12-13 сентября по причине планового медицинского обследования. Справку предоставим. Подскажите, пожалуйста, как можно будет получить материалы уроков. Спасибо за понимание!»
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-lg mb-4">Важно помнить</h3>
            <p className="mb-2">
              Цель цифровой коммуникации — сделать процесс образования более эффективным и комфортным для всех. 
              Вежливость и уважение — основа успешного взаимодействия.
            </p>
            <p>
              Если возникла сложная ситуация, требующая подробного обсуждения — лучше перенести коммуникацию 
              в формат личной встречи или видеозвонка.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-lg bg-muted/50 p-6 rounded-lg border border-accent">
              <h3 className="font-semibold text-center mb-3">Памятка по цифровому этикету</h3>
              <div className="flex items-center justify-center mb-4">
                <a href="#" className="text-primary hover:text-primary/80 inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Скачать PDF-версию
                </a>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Распечатайте и используйте как шпаргалку для быстрого доступа к основным правилам
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Etiquette;
