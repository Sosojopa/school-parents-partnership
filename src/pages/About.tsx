
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    {
      title: "Упрощает взаимодействие",
      description: "Создаёт понятные правила и каналы коммуникации между всеми участниками образовательного процесса"
    },
    {
      title: "Устраняет перегрузку",
      description: "Помогает избежать информационного перенасыщения и соблюдать баланс рабочего и личного времени"
    },
    {
      title: "Помогает родителям быть вовлечёнными",
      description: "Предоставляет удобные инструменты для участия в образовательном процессе ребёнка"
    },
    {
      title: "Повышает качество сопровождения детей",
      description: "Обеспечивает эффективное взаимодействие всех сторон для лучшей поддержки учеников"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow py-10 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">О проекте</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Актуальность проблемы</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                В современном мире цифровой коммуникации педагоги и родители всё чаще сталкиваются с проблемами виртуального взаимодействия. Отсутствие чётких регламентов общения в мессенджерах и социальных сетях приводит к размыванию границ рабочего времени, информационной перегрузке и эмоциональному выгоранию.
              </p>
              <p className="text-lg text-muted-foreground">
                Наш проект направлен на создание здоровой коммуникативной среды, где все участники образовательного процесса могут эффективно взаимодействовать, соблюдая взаимное уважение и профессиональные границы.
              </p>
            </div>
          </section>
          
          <section className="mb-12 bg-accent p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Цель проекта</h2>
            <p className="text-lg">
              Разработка и внедрение модели цифровой коммуникации между школой и родителями, основанной на принципах уважения, эффективности и профессиональной этики, для создания комфортной образовательной среды для всех участников.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Что даёт этот сайт</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <CardTitle>{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Присоединяйтесь к проекту</h2>
            <p className="mb-3">
              Приглашаем всех участников образовательного процесса — педагогов, администрацию школ, родителей и учеников — принять участие в создании комфортной и эффективной среды цифрового взаимодействия.
            </p>
            <p>
              Ваши отзывы и предложения помогут нам сделать коммуникацию еще лучше!
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
