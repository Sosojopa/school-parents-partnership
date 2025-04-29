
// Интерфейс для отзыва
export interface Feedback {
  id: string;
  name: string;
  date: string;
  rating: number;
  role?: string;
  improveSuggestion?: string;
  additionalComments?: string;
  userType?: string;
  email?: string;
  phone?: string;
}

// Предопределенные отзывы
export const predefinedFeedbacks: Feedback[] = [
  {
    id: "pre-1",
    name: "Елена",
    date: "2025-04-25T13:14:00",
    rating: 9,
    role: "Родитель",
    improveSuggestion: "Хотелось бы получать напоминания о важных мероприятиях заранее.",
    additionalComments: "Всё очень удобно!",
    userType: "Родитель"
  },
  {
    id: "pre-2",
    name: "Дмитрий",
    date: "2025-04-26T12:34:00",
    rating: 7,
    role: "Педагог",
    improveSuggestion: "Ввести чёткие временные рамки для ответов родителей на сообщения.",
    additionalComments: "Иногда родительские вопросы требуют отдельной консультации — хорошо бы предусмотреть возможность записи на видеовстречи через сайт.",
    userType: "Педагог"
  },
  {
    id: "pre-3",
    name: "Светлана",
    date: "2025-04-26T12:41:00",
    rating: 8,
    role: "Родитель",
    improveSuggestion: "Добавить единое расписание консультаций классного руководителя.",
    additionalComments: "Очень нравится наличие памятки по цифровому этикету — теперь меньше недопонимания.",
    userType: "Родитель"
  },
  {
    id: "pre-4",
    name: "Николай",
    date: "2025-04-26T13:05:00",
    rating: 6,
    role: "Педагог",
    improveSuggestion: "Больше обучающих инструкций для родителей по использованию цифровых платформ.",
    userType: "Педагог"
  },
  {
    id: "pre-5",
    name: "Анна",
    date: "2025-04-27T14:33:00",
    rating: 10,
    role: "Родитель",
    improveSuggestion: "Всё устраивает, но возможно добавить быстрые шаблоны для обращения к учителям.",
    additionalComments: "Очень удобно, что теперь есть централизованный доступ ко всем каналам связи через один сайт!",
    userType: "Родитель"
  },
  {
    id: "pre-6",
    name: "Олег",
    date: "2025-04-27T14:58:00",
    rating: 8,
    role: "Педагог",
    improveSuggestion: "Разграничить темы для общения: что обсуждать в мессенджерах, а что через официальный электронный дневник.",
    additionalComments: "В перспективе можно организовать мини-курсы по цифровому этикету для родителей первоклассников.",
    userType: "Педагог"
  },
  // Добавленные новые отзывы
  {
    id: "pre-7",
    name: "Марина",
    date: "2025-04-28T11:12:00",
    rating: 9,
    role: "Родитель",
    improveSuggestion: "Было бы удобно видеть шаблоны для самых частых обращений, например, о пропуске занятий.",
    userType: "Родитель"
  },
  {
    id: "pre-8",
    name: "Алексей",
    date: "2025-04-28T12:27:00",
    rating: 7,
    role: "Педагог",
    improveSuggestion: "Упростить структуру сайта, чтобы родителям было легче ориентироваться.",
    userType: "Педагог"
  },
  {
    id: "pre-9",
    name: "Наталья",
    date: "2025-04-28T14:03:00",
    rating: 8,
    role: "Родитель",
    improveSuggestion: "Хотелось бы получать небольшие отчёты о прогрессе ребёнка хотя бы раз в месяц.",
    additionalComments: "В целом сайт удобный, особенно форма обратной связи и памятка по этикету.",
    userType: "Родитель"
  },
  {
    id: "pre-10",
    name: "Иван",
    date: "2025-04-28T15:56:00",
    rating: 6,
    role: "Педагог",
    additionalComments: "Предлагаю проводить мини-вебинары для родителей, где можно сразу обсудить важные вопросы, а не писать всё в чат.",
    userType: "Педагог"
  }
];

// Функция для инициализации отзывов из предопределенного списка, если они отсутствуют
export const initializePredefinedFeedbacks = () => {
  try {
    // Получаем текущие отзывы из localStorage
    const feedbacksString = localStorage.getItem("feedbacks");
    let storedFeedbacks = feedbacksString ? JSON.parse(feedbacksString) : [];
    
    // Проверяем, есть ли уже предопределенные отзывы в localStorage
    const hasPreFeedbacks = storedFeedbacks.some((f: Feedback) => f.id.startsWith('pre-'));
    
    // Если предопределенных отзывов нет, добавляем их
    if (!hasPreFeedbacks) {
      storedFeedbacks = [...predefinedFeedbacks, ...storedFeedbacks];
      localStorage.setItem("feedbacks", JSON.stringify(storedFeedbacks));
      console.log("Predefined feedbacks initialized in localStorage");
    }
  } catch (error) {
    console.error("Ошибка при инициализации отзывов:", error);
  }
};

// Функция для получения всех отзывов
export const getAllFeedbacks = (): Feedback[] => {
  try {
    // Инициализируем предопределенные отзывы, если они отсутствуют
    initializePredefinedFeedbacks();
    
    // Получаем все отзывы из localStorage
    const feedbacksString = localStorage.getItem("feedbacks");
    const storedFeedbacks = feedbacksString ? JSON.parse(feedbacksString) : [];
    
    // Сортируем отзывы по дате (от новых к старым)
    storedFeedbacks.sort((a: Feedback, b: Feedback) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    return storedFeedbacks;
  } catch (error) {
    console.error("Ошибка при получении отзывов:", error);
    return [];
  }
};

// Функция для получения количества отзывов по типам
export const getCountsByType = (feedbacks: Feedback[]) => {
  return {
    all: feedbacks.length,
    parent: feedbacks.filter(f => 
      (f.userType?.toLowerCase() === "родитель" || f.role?.toLowerCase() === "родитель")
    ).length,
    teacher: feedbacks.filter(f => 
      (f.userType?.toLowerCase() === "педагог" || f.role?.toLowerCase() === "педагог")
    ).length,
    other: feedbacks.filter(f => 
      (f.userType?.toLowerCase() !== "родитель" && 
       f.userType?.toLowerCase() !== "педагог" &&
       f.role?.toLowerCase() !== "родитель" && 
       f.role?.toLowerCase() !== "педагог" &&
       (f.userType || f.role))
    ).length,
  };
};

// Функция для фильтрации отзывов по типу пользователя
export const filterFeedbacksByType = (feedbacks: Feedback[], userFilter: string) => {
  if (userFilter === "all") {
    return feedbacks;
  }
  return feedbacks.filter(feedback => 
    (feedback.userType?.toLowerCase() === userFilter.toLowerCase()) || 
    (feedback.role?.toLowerCase() === userFilter.toLowerCase())
  );
};

// Функция для вычисления средней оценки
export const calculateAverageRating = (feedbacks: Feedback[]): string => {
  if (feedbacks.length === 0) return "N/A";
  
  const sum = feedbacks.reduce((total, feedback) => total + (feedback.rating || 0), 0);
  return (sum / feedbacks.length).toFixed(1);
};
