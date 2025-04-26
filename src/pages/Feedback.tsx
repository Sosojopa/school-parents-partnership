
import { useState } from "react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Check, Send, Lock, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Feedback = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [communicationRating, setCommunicationRating] = useState([5]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    likes: "",
    improvements: "",
    comment: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      category: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to a server
    console.log("Form submitted:", formData, "Rating:", communicationRating[0]);
    
    toast({
      title: "Форма отправлена",
      description: "Спасибо за ваш отзыв! Мы учтем ваше мнение для улучшения системы коммуникации.",
      duration: 5000,
    });
    
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      category: "",
      likes: "",
      improvements: "",
      comment: ""
    });
    setCommunicationRating([5]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow py-10 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Обратная связь</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ваше мнение помогает нам улучшать систему цифровой коммуникации и делать
              взаимодействие между школой и родителями более эффективным
            </p>
          </div>
          
          {formSubmitted ? (
            <Card className="mb-10 max-w-lg mx-auto text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Спасибо за ваш отзыв!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Мы внимательно изучим вашу обратную связь и учтем ее при совершенствовании 
                  нашей системы коммуникации.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setFormSubmitted(false)}
                >
                  Отправить еще один отзыв
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Оценка взаимодействия</CardTitle>
                    <CardDescription>
                      Поделитесь своим мнением о системе коммуникации между школой и родителями
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="communication-rating">
                            Как вы оцениваете текущую онлайн-коммуникацию? (от 1 до 10)
                          </Label>
                          <div className="flex items-center gap-4">
                            <Slider
                              id="communication-rating"
                              min={1}
                              max={10}
                              step={1}
                              value={communicationRating}
                              onValueChange={setCommunicationRating}
                              className="flex-1"
                            />
                            <span className="bg-primary/10 px-3 py-1 rounded-md font-medium text-primary min-w-10 text-center">
                              {communicationRating[0]}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Кем вы являетесь?</Label>
                          <RadioGroup 
                            value={formData.category} 
                            onValueChange={handleRadioChange}
                            className="flex flex-col sm:flex-row gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="parent" id="parent" />
                              <Label htmlFor="parent">Родитель</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="teacher" id="teacher" />
                              <Label htmlFor="teacher">Педагог</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="administrator" id="administrator" />
                              <Label htmlFor="administrator">Администратор</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Другое</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="likes">Что вам нравится в текущей системе коммуникации?</Label>
                          <Textarea
                            id="likes"
                            name="likes"
                            value={formData.likes}
                            onChange={handleInputChange}
                            placeholder="Например: удобство использования, быстрота ответов..."
                            className="resize-none min-h-[100px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="improvements">Что бы вы хотели улучшить?</Label>
                          <Textarea
                            id="improvements"
                            name="improvements"
                            value={formData.improvements}
                            onChange={handleInputChange}
                            placeholder="Какие аспекты коммуникации требуют доработки?"
                            className="resize-none min-h-[100px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="comment">Дополнительные комментарии или предложения</Label>
                          <Textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            placeholder="Любые идеи и пожелания..."
                            className="resize-none min-h-[100px]"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя (по желанию)</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Как к вам обращаться"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email (по желанию)</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Для обратной связи"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <Button type="submit" className="w-full sm:w-auto">
                            <Send className="mr-2 h-4 w-4" /> Отправить отзыв
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-1">
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Конфиденциальность</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Все сообщения анонимны и используются только для улучшения системы коммуникации. 
                        Персональные данные не передаются третьим лицам.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Что происходит с отзывами?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Мы регулярно анализируем полученную обратную связь и используем её для:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2 pl-5 list-disc">
                        <li>Улучшения регламентов коммуникации</li>
                        <li>Оптимизации каналов связи</li>
                        <li>Обучения педагогов и родителей</li>
                        <li>Разработки новых инструментов взаимодействия</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                        <path d="M9 18h6"/>
                        <path d="M10 22h4"/>
                      </svg>
                      Совет
                    </h3>
                    <p className="text-sm">
                      Чем конкретнее ваш отзыв, тем эффективнее мы сможем улучшить систему. 
                      Описывайте реальные ситуации и предлагайте решения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Другие способы связи</h2>
            <p className="mb-6">
              Если у вас есть срочный вопрос или предложение, вы также можете связаться с нами:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-1">Электронная почта</h3>
                <p className="text-sm text-primary">digital@school-example.ru</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-1">Телефон</h3>
                <p className="text-sm text-primary">+7 (XXX) XXX-XX-XX</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;
