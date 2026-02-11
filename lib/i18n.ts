export type Lang = "AZ" | "EN" | "RU";

export const translations = {
  nav: {
    services: { AZ: "Xidmətlər", EN: "Services", RU: "Услуги" },
    portfolio: { AZ: "Portfolio", EN: "Portfolio", RU: "Портфолио" },
    campaigns: { AZ: "Kampaniyalar", EN: "Campaigns", RU: "Кампании" },
    contact: { AZ: "Əlaqə", EN: "Contact", RU: "Контакт" },
  },
  hero: {
    titleWords: {
      AZ: ["Prezentra:", "Vizual", "Hekayənizin", "Yeni", "Memarı."],
      EN: [
        "Prezentra:",
        "The",
        "New",
        "Architect",
        "of",
        "Your",
        "Visual",
        "Story.",
      ],
      RU: [
        "Prezentra:",
        "Новый",
        "Архитектор",
        "Вашей",
        "Визуальной",
        "Истории.",
      ],
    },
    subtitle: {
      AZ: "Dizayn sahəsindəki boşluğu doldurmaq ehtiyacından yaradıldı.",
      EN: "Born from the need to fill the gap in the design industry.",
      RU: "Создано из необходимости заполнить пробел в сфере дизайна.",
    },
    cta: {
      AZ: "Layihəyə Başla",
      EN: "Start a Project",
      RU: "Начать Проект",
    },
    stats: {
      projects: { AZ: "Layihə", EN: "Projects", RU: "Проектов" },
      clients: { AZ: "Müştəri", EN: "Clients", RU: "Клиентов" },
      satisfaction: {
        AZ: "Məmnuniyyət",
        EN: "Satisfaction",
        RU: "Удовлетворение",
      },
    },
  },
  services: {
    badge: { AZ: "Xidmətlər", EN: "Services", RU: "Услуги" },
    title: {
      AZ: "Nə Təklif Edirik",
      EN: "What We Offer",
      RU: "Что мы предлагаем",
    },
    subtitle: {
      AZ: "Brendinizi növbəti səviyyəyə qaldırmaq üçün peşəkar dizayn xidmətləri",
      EN: "Professional design services to elevate your brand to the next level",
      RU: "Профессиональные дизайн-услуги для вывода вашего бренда на новый уровень",
    },
    items: [
      {
        title: {
          AZ: "Premium Slayd Dizaynı",
          EN: "Premium Slide Design",
          RU: "Премиум дизайн слайдов",
        },
        description: {
          AZ: "Pitch deck-lər, korporativ təqdimatlar və vizual hekayələr üçün yüksək keyfiyyətli slayd dizaynı. Brendinizi professional səviyyədə təqdim edin.",
          EN: "High-quality slide design for pitch decks, corporate presentations and visual stories. Present your brand at a professional level.",
          RU: "Высококачественный дизайн слайдов для питч-деков, корпоративных презентаций и визуальных историй. Представьте свой бренд на профессиональном уровне.",
        },
        features: {
          AZ: ["Pitch Deck", "Korporativ Təqdimat", "Startup Prezentasiya"],
          EN: ["Pitch Deck", "Corporate Presentation", "Startup Presentation"],
          RU: ["Питч-дек", "Корпоративная презентация", "Стартап презентация"],
        },
      },
      {
        title: {
          AZ: "Modern Veb Saytların Hazırlanması",
          EN: "Modern Website Development",
          RU: "Разработка современных веб-сайтов",
        },
        description: {
          AZ: "Yüksək performanslı React/Next.js saytlar, responsive dizayn və müasir UI/UX həlləri ilə rəqəmsal varlığınızı gücləndirin.",
          EN: "Strengthen your digital presence with high-performance React/Next.js sites, responsive design and modern UI/UX solutions.",
          RU: "Укрепите свое цифровое присутствие с помощью высокопроизводительных сайтов на React/Next.js, адаптивного дизайна и современных UI/UX решений.",
        },
        features: {
          AZ: ["React / Next.js", "Responsive Dizayn", "SEO Optimizasiya"],
          EN: ["React / Next.js", "Responsive Design", "SEO Optimization"],
          RU: ["React / Next.js", "Адаптивный дизайн", "SEO Оптимизация"],
        },
      },
    ],
  },
  portfolio: {
    badge: { AZ: "Portfolio", EN: "Portfolio", RU: "Портфолио" },
    title: {
      AZ: "Son Layihələrimiz",
      EN: "Our Recent Projects",
      RU: "Наши последние проекты",
    },
    subtitle: {
      AZ: "Fərqli sahələrdə hazırladığımız layihələrlə tanış olun",
      EN: "Explore projects we have created across different fields",
      RU: "Ознакомьтесь с проектами, которые мы создали в различных областях",
    },
    categories: {
      all: { AZ: "Hamısı", EN: "All", RU: "Все" },
      slides: { AZ: "Slaydlar", EN: "Slides", RU: "Слайды" },
      websites: { AZ: "Veb Saytlar", EN: "Websites", RU: "Веб-сайты" },
    },
    viewProject: {
      AZ: "Layihəyə bax",
      EN: "View project",
      RU: "Посмотреть проект",
    },
    prevImage: {
      AZ: "Əvvəlki şəkil",
      EN: "Previous image",
      RU: "Предыдущее изображение",
    },
    nextImage: {
      AZ: "Növbəti şəkil",
      EN: "Next image",
      RU: "Следующее изображение",
    },
    imageOf: { AZ: "Şəkil", EN: "Image", RU: "Изображение" },
    close: { AZ: "Bağla", EN: "Close", RU: "Закрыть" },
    startProject: {
      AZ: "Layihəyə Başla",
      EN: "Start a Project",
      RU: "Начать проект",
    },
    relatedProjects: {
      AZ: "Bənzər Layihələr",
      EN: "Related Projects",
      RU: "Похожие проекты",
    },
    projects: [
      {
        title: "JehillCollection Slide Design",
        categoryKey: "slides" as const,
        description: {
          AZ: "Biznesin təqdimatı və daha çox müştəriyə çıxmaq üçün hazrlanmış slide dizaynı",
          EN: "Slide design designed to present your business and reach more customers",
          RU: "Дизайн слайдов разработан для презентации вашего бизнеса и привлечения большего числа клиентов.",
        },
        tags: {
          AZ: ["Slide dizaynı", "Biznes təqdimatı", "Brend təqdimatı"],
          EN: ["Slide Design", "Business Presentation", "Brand Presentation"],
          RU: ["Дизайн слайдов", "Бизнес-презентация", "Презентация бренда"],
        },
        images: [
          "./images/JehilCollection/Slayt1.PNG",
          "./images/JehilCollection/Slayt2.PNG",
          "./images/JehilCollection/Slayt3.PNG",
          "./images/JehilCollection/Slayt4.PNG",
          "./images/JehilCollection/Slayt5.PNG",
          "./images/JehilCollection/Slayt6.PNG",
          "./images/JehilCollection/Slayt7.PNG",
          "./images/JehilCollection/Slayt8.PNG",
          "./images/JehilCollection/Slayt9.PNG",
        ],
      },
      {
        title: "GreenProject Website",
        categoryKey: "websites" as const,
        description: {
          AZ: "GreenProject şirkəti üçün hazırlanmış tam responsive veb platforması. Next.js və modern UI komponentləri ilə qurulmuşdur.",
          EN: "A fully responsive web platform built for a GreenProject company. Built with Next.js and modern UI components.",
          RU: "Полностью адаптивная веб-платформа, созданная для компании GreenProject. Построена на Next.js и современных UI компонентах.",
        },
        tags: {
          AZ: ["Next.js", "Responsive", "Korporativ"],
          EN: ["Next.js", "Responsive", "Corporate"],
          RU: ["Next.js", "Адаптивный", "Корпоративный"],
        },
        images: [
          "./images/GreenProject/image1.PNG",
          "./images/GreenProject/image2.PNG",
          "./images/GreenProject/image3.PNG",
          "./images/GreenProject/image4.PNG",
          "./images/GreenProject/image5.PNG",
          "./images/GreenProject/image6.PNG",
          "./images/GreenProject/image7.PNG",
          "./images/GreenProject/image8.PNG",
          "./images/GreenProject/image9.PNG",
        ],
      },
      {
        title: "Events Slide Design",
        categoryKey: "slides" as const,
        description: {
          AZ: "Bir həftəlik planlama üçün slide dizaynı.",
          EN: "Slide design for weekly planning.",
          RU: "Дизайн слайдов для еженедельного планирования.",
        },
        tags: {
          AZ: ["Meeting planı", "Agenda slide", "Komanda planlaması"],
          EN: ["Meeting Agenda", "Team Planning", "Schedule Deck"],
          RU: ["Повестка встречи", "План команды", "Слайды расписания"],
        },
        images: [
          "/images/Events/Slayt1.PNG",
          "/images/Events/Slayt2.PNG",
          "/images/Events/Slayt3.PNG",
          "/images/Events/Slayt4.PNG",
          "/images/Events/Slayt5.PNG",
          "/images/Events/Slayt6.PNG",
          "/images/Events/Slayt7.PNG",
          "/images/Events/Slayt8.PNG",
          "/images/Events/Slayt9.PNG",
        ],
      },
      {
        title: "Portfolio Slide Design",
        categoryKey: "slides" as const,
        description: {
          AZ: "Elektronika markasının qısa təqdimatı üçün slide dizaynı",
          EN: "Slide design for a brief presentation of an electronics brand",
          RU: "Дизайн слайда для краткой презентации бренда электроники",
        },
        tags: {
          AZ: ["Portfolio", "Brend təqdimatı", "Məhsul təqdimatı"],
          EN: ["Portfolio", "Brand Presentation", "Product Showcase"],
          RU: ["Портфолио", "Презентация бренда", "Презентация продукта"],
        },
        images: [
          "/images/Portfolio/Slayt1.PNG",
          "/images/Portfolio/Slayt2.PNG",
          "/images/Portfolio/Slayt3.PNG"
        ],
      },
      // {
      //   title: "EduPath Startup Prezentasiya",
      //   categoryKey: "slides" as const,
      //   description: {
      //     AZ: "Təhsil texnologiyaları startapı üçün yaradılmış prezentasiya. İnteraktiv elementlər və storytelling yanaşması ilə hazırlanmışdır.",
      //     EN: "Presentation created for an education technology startup. Prepared with interactive elements and a storytelling approach.",
      //     RU: "Презентация для стартапа в сфере образовательных технологий. Подготовлена с интерактивными элементами и подходом сторителлинга.",
      //   },
      //   tags: {
      //     AZ: ["Startup", "Təhsil", "Storytelling"],
      //     EN: ["Startup", "Education", "Storytelling"],
      //     RU: ["Стартап", "Образование", "Сторителлинг"],
      //   },
      //   images: [
      //     "/images/project-5.jpg",
      //     "/images/project-5b.jpg",
      //     "/images/project-5c.jpg",
      //   ],
      // },
      // {
      //   title: "CryptoWave Dashboard",
      //   categoryKey: "websites" as const,
      //   description: {
      //     AZ: "Kriptovalyuta ticarət platforması üçün real-time dashboard. Dark tema, canlı qrafiklər və responsiv interfeysli dizayn.",
      //     EN: "Real-time dashboard for a cryptocurrency trading platform. Dark theme, live charts and responsive interface design.",
      //     RU: "Панель управления в реальном времени для платформы торговли криптовалютой. Тёмная тема, живые графики и адаптивный интерфейс.",
      //   },
      //   tags: {
      //     AZ: ["Dashboard", "Real-time", "Dark UI"],
      //     EN: ["Dashboard", "Real-time", "Dark UI"],
      //     RU: ["Панель управления", "Реальное время", "Тёмный UI"],
      //   },
      //   images: [
      //     "/images/project-6.jpg",
      //     "/images/project-6b.jpg",
      //     "/images/project-6c.jpg",
      //   ],
      // },
    ],
  },
  campaigns: {
    badge: { AZ: "Kampaniyalar", EN: "Campaigns", RU: "Кампании" },
    title: {
      AZ: "Xüsusi Təkliflər",
      EN: "Special Offers",
      RU: "Специальные предложения",
    },
    subtitle: {
      AZ: "Layihənizi başlatmaq üçün ən uyğun paketi seçin",
      EN: "Choose the most suitable package to launch your project",
      RU: "Выберите наиболее подходящий пакет для запуска вашего проекта",
    },
    contactBtn: { AZ: "Əlaqə et", EN: "Get in Touch", RU: "Связаться" },
    items: [
      {
        title: {
          AZ: "Startup Launch Paket",
          EN: "Startup Launch Package",
          RU: "Стартап-пакет запуска",
        },
        description: {
          AZ: "Yeni startaplar üçün xüsusi başlanğıc paketi. Logo, prezentasiya və landing page bir paketdə.",
          EN: "Special starter package for new startups. Logo, presentation and landing page in one package.",
          RU: "Специальный стартовый пакет для новых стартапов. Логотип, презентация и лендинг в одном пакете.",
        },
        badge: { AZ: "Yeni", EN: "New", RU: "Новый" },
        highlight: true,
      },
      {
        title: {
          AZ: "Rebranding Kampaniyası",
          EN: "Rebranding Campaign",
          RU: "Кампания ребрендинга",
        },
        description: {
          AZ: "Mövcud brendinizi yenidən kəşf edin. Tam vizual identifikasiya yenilənməsi ilə.",
          EN: "Rediscover your existing brand. With a complete visual identity refresh.",
          RU: "Откройте заново свой существующий бренд. С полным обновлением визуальной идентичности.",
        },
        badge: { AZ: "Populyar", EN: "Popular", RU: "Популярный" },
        highlight: false,
      },
      {
        title: {
          AZ: "Express Dizayn",
          EN: "Express Design",
          RU: "Экспресс-дизайн",
        },
        description: {
          AZ: "48 saat ərzində professional dizayn. Təcili layihələr üçün ideal həll.",
          EN: "Professional design within 48 hours. An ideal solution for urgent projects.",
          RU: "Профессиональный дизайн за 48 часов. Идеальное решение для срочных проектов.",
        },
        badge: { AZ: "Sürətli", EN: "Fast", RU: "Быстро" },
        highlight: false,
      },
    ],
  },
  contact: {
    badge: { AZ: "Əlaqə", EN: "Contact", RU: "Контакт" },
    title: {
      AZ: "Layihənizi Müzakirə Edək",
      EN: "Let's Discuss Your Project",
      RU: "Давайте обсудим ваш проект",
    },
    subtitle: {
      AZ: "Bizimlə əlaqə saxlayın və layihəniz barədə danışın. 24 saat ərzində cavab verəcəyik.",
      EN: "Contact us and tell us about your project. We will respond within 24 hours.",
      RU: "Свяжитесь с нами и расскажите о вашем проекте. Мы ответим в течение 24 часов.",
    },
    emailLabel: { AZ: "Email", EN: "Email", RU: "Эл. почта" },
    addressLabel: { AZ: "Ünvan", EN: "Address", RU: "Адрес" },
    address: {
      AZ: "Bakı, Azərbaycan",
      EN: "Baku, Azerbaijan",
      RU: "Баку, Азербайджан",
    },
    formName: { AZ: "Adınız", EN: "Your Name", RU: "Ваше имя" },
    formEmail: { AZ: "Email", EN: "Email", RU: "Эл. почта" },
    formSubject: { AZ: "Mövzu", EN: "Subject", RU: "Тема" },
    formMessage: { AZ: "Mesajınız", EN: "Your Message", RU: "Ваше сообщение" },
    formSubmit: { AZ: "Göndər", EN: "Send", RU: "Отправить" },
  },
  footer: {
    tagline: {
      AZ: "Dizayn sahəsindəki boşluğu doldurmaq ehtiyacından yaradıldı.",
      EN: "Born from the need to fill the gap in the design industry.",
      RU: "Создано из необходимости заполнить пробел в сфере дизайна.",
    },
    quickLinks: {
      AZ: "Sürətli Keçidlər",
      EN: "Quick Links",
      RU: "Быстрые ссылки",
    },
    subscribe: { AZ: "Abunə Ol", EN: "Subscribe", RU: "Подписаться" },
    subscribeText: {
      AZ: "Ən son yeniliklərdən xəbərdar olun.",
      EN: "Stay updated with the latest news.",
      RU: "Будьте в курсе последних новостей.",
    },
    emailPlaceholder: {
      AZ: "Email adresiniz",
      EN: "Your email address",
      RU: "Ваш email адрес",
    },
    sendBtn: { AZ: "Göndər", EN: "Send", RU: "Отправить" },
    madeWith: {
      AZ: "Sevgi ilə hazırlandı",
      EN: "Made with passion by",
      RU: "Сделано с любовью",
    },
  },
} as const;
