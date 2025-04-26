
const FeaturesSection = () => {
  const features = [
    {
      icon: "📝",
      title: "Понятный регламент",
      description: "Четкие правила коммуникации между родителями и педагогами"
    },
    {
      icon: "🔄",
      title: "Удобные каналы связи", 
      description: "Обзор и инструкции по всем доступным платформам для общения"
    },
    {
      icon: "🤝",
      title: "Цифровой этикет",
      description: "Рекомендации по уважительному и эффективному онлайн-общению"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Что предлагает наш проект
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
