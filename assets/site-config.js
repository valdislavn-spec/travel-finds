/* ==========================================================================
   Конфигурация сайта travel-finds (EN/ES).
   Основная страница: index.html (en), es.html (es).
   Партнёрские ссылки — из config/links.generated.json (website project 597672,
   seo_en / seo_es; могут отдавать 403 до заполнения формы ad law — тогда
   замените urls на новые).
   API-токен на сайте НЕ НУЖЕН и НЕ ДОЛЖЕН попадать в репозиторий.
   ========================================================================== */
window.TRAVEL_CONFIG = {
  marker: "674170",
  market: "non_ru",
  widget: {
    // TravelPayouts White Label: Tools → Widgets/White Label → promo_id.
    // Получить в личном кабинете TravelPayouts и вставить сюда.
    // Пока YOUR_WIDGET_PROMO_ID — показываются fallback-кнопки.
    promoId: "YOUR_WIDGET_PROMO_ID",
    campaignId: "",
    poweredBy: "true",
  },
  // Telegram-каналы проекта (публичные, без токена бота на frontend).
  telegram: {
    // Username канала без @, например: travelfinds_en
    channelEn: "",
    channelEs: "",
    // Ссылка на канал (t.me/...)
    urlEn: "https://t.me/travelfinds_en",
    urlEs: "https://t.me/travelfinds_es",
    // Показывать блок "Последние посты" на главной (заполняется вручную или через бота)
    showRecentPosts: false,
  },
  // У каждой программы своя короткая ссылка на язык (sub_id seo_en/seo_es
  // зашит при создании). fallback — url для остальных случаев.
  programs: {
    kiwi: {
      url: "",
      urls: {
        en: "https://kiwi.tpk.ro/RJINNJJm",
        es: "https://kiwi.tpk.ro/n2alia22",
      },
      landing: "https://www.kiwi.com/",
      label: "Kiwi.com",
    },
    kiwitaxi: {
      url: "",
      urls: {
        en: "https://kiwitaxi.tpk.ro/xmQYmqIl",
        es: "https://kiwitaxi.tpk.ro/8bXhqjhr",
      },
      landing: "https://kiwitaxi.com/",
      label: "Kiwitaxi",
    },
    yesim: {
      url: "",
      urls: {
        en: "https://yesim.tpk.ro/uzjpBpju",
        es: "https://yesim.tpk.ro/KqpvuYgm",
      },
      landing: "https://yesim.app/",
      label: "Yesim",
    },
    klook: {
      url: "",
      urls: {
        en: "https://klook.tpk.ro/2NhHWOSD",
        es: "https://klook.tpk.ro/RmERIKIk",
      },
      landing: "https://www.klook.com/",
      label: "Klook",
    },
    tripcom: {
      // Website-проект пока не подписан на Trip.com → pending (кнопка off).
      url: "",
      urls: { en: "", es: "" },
      landing: "https://www.trip.com/",
      label: "Trip.com",
    },
  },
  siteUrl: "https://valdislavn-spec.github.io/travel-finds",
};

window.TRAVEL_PLACEHOLDER = !window.TRAVEL_CONFIG.programs.kiwi.urls.en;
