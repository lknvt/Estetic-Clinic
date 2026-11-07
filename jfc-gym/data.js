/* JFC Gym — общие данные, переводы RU/KY и помощники для всех трёх вариантов.
   Демо-контент: тренеры, цены и отзывы — примеры, замените реальными. */
(function () {
  const C = {
    phone: '+996 559 66 55 55',
    tel: '+996559665555',
    wa: '996559665555',
    gis: 'https://2gis.kg/bishkek/search/JFC%20Gym',
    ig: 'https://instagram.com/jfc_gym.kg',
  };

  const T = {
    ru: {
      brand_sub: 'спортивный комплекс',
      nav_dirs: 'Направления', nav_coaches: 'Тренеры', nav_prices: 'Цены', nav_schedule: 'Расписание',
      nav_reviews: 'Отзывы', nav_contacts: 'Контакты',
      hero_kicker: 'Спортивный комплекс в Бишкеке',
      hero_title: 'Стань сильнее, <em>чем вчера</em>',
      hero_title_1: 'Стань', hero_title_2: 'сильнее,', hero_title_3: 'чем вчера',
      hero_sub: 'MMA, бокс, борьба, тренажёрный зал и детские секции. Тренеры-практики, бойцы промоушена JFC и атмосфера настоящей команды.',
      cta_trial: 'Пробная тренировка бесплатно', cta_trial_s: 'Записаться бесплатно',
      cta_wa: 'Написать в WhatsApp', cta_wa_s: 'WhatsApp', cta_call: 'Позвонить', cta_route: 'Маршрут в 2ГИС', cta_route_s: '2ГИС',
      st1_n: '10+', st1_l: 'лет развиваем спорт в Кыргызстане',
      st2_n: '8', st2_l: 'направлений для взрослых и детей',
      st3_n: '71,6K', st3_l: 'подписчиков в Instagram',
      st4_n: '7–23', st4_l: 'Пн–Сб, воскресенье — выходной',
      adv_kicker: 'Почему JFC', adv_title: 'Зал, где из новичков делают бойцов',
      adv1_t: 'Тренеры-практики', adv1_d: 'Действующие бойцы и мастера спорта, которые сами выходят в клетку.',
      adv2_t: 'Всё в одном месте', adv2_d: 'Зал, ринг, клетка, татами, фитобар и раздевалки с душем.',
      adv3_t: 'Для любого уровня', adv3_d: 'Группы для новичков и профи, детей от 5 лет и девушек.',
      adv4_t: 'Удобный график', adv4_d: 'Пн–Сб с 7:00 до 23:00 — тренируйтесь до или после работы.',
      dirs_kicker: 'Направления', dirs_title: 'Выберите свой спорт', dirs_sub: 'Восемь направлений под одной крышей — от первой тренировки до выхода на турнир.',
      coaches_kicker: 'Команда', coaches_title: 'Тренеры, которые доведут до результата', coaches_sub: 'Каждый тренер — практик со спортивными титулами и опытом подготовки бойцов.',
      exp: 'лет опыта',
      prices_kicker: 'Абонементы', prices_title: 'Прозрачные цены без скрытых платежей', prices_sub: 'Первая тренировка — бесплатно. Персональная тренировка — от 1 000 сом.',
      popular: 'Хит продаж', price_cta: 'Выбрать', som: 'сом',
      sched_kicker: 'Расписание', sched_title: 'Групповые тренировки', sched_sub: 'Тренажёрный зал работает без расписания: Пн–Сб 7:00–23:00. Воскресенье — выходной.',
      today: 'Сегодня', no_classes: 'Воскресенье — выходной день',
      reviews_kicker: 'Отзывы', reviews_title: 'Что говорят наши спортсмены', reviews_sub: 'Средняя оценка клиентов', rating: '4.9',
      loc_kicker: 'Контакты', loc_title: 'Приходите на тренировку', loc_addr_l: 'Адрес', loc_addr: 'г. Бишкек, ул. Кара-Кульская, 1/4',
      loc_hours_l: 'Режим работы', loc_hours: 'Пн–Сб 7:00–23:00 · Вс — выходной', loc_phone_l: 'Телефон',
      open_now: 'Сейчас открыто', closed_now: 'Сейчас закрыто',
      form_title: 'Запишитесь на бесплатную пробную', form_sub: 'Оставьте имя и телефон — администратор ответит в WhatsApp в течение 15 минут.',
      form_name: 'Ваше имя', form_phone: 'Телефон', form_dir: 'Направление', form_send: 'Записаться через WhatsApp',
      form_note: 'Нажимая кнопку, вы откроете чат WhatsApp с готовым сообщением.',
      wa_msg: 'Здравствуйте! Хочу записаться на пробную тренировку в JFC Gym.',
      steps_kicker: 'Как начать', steps_title: 'Три шага до первой тренировки',
      step1_t: 'Напишите нам', step1_d: 'В WhatsApp или по телефону — подберём направление и время.',
      step2_t: 'Приходите на пробную', step2_d: 'Бесплатно. Возьмите форму и воду, остальное есть у нас.',
      step3_t: 'Тренируйтесь с командой', step3_d: 'Выберите абонемент и отслеживайте прогресс с тренером.',
      aud_kicker: 'Кому подойдёт', aud_adult: 'Взрослым', aud_kids: 'Детям', aud_women: 'Девушкам',
      aud_adult_t: 'Форма, сила и уверенность', aud_adult_d: 'Единоборства и зал для тех, кто хочет похудеть, набрать мышцы или выйти на турнир.',
      aud_kids_t: 'Дисциплина и здоровье с 5 лет', aud_kids_d: 'Игровой формат для младших, спортивная подготовка — для старших. Тренеры с педагогическим опытом.',
      aud_women_t: 'Mix fighting для девушек', aud_women_d: 'Единоборства, самооборона и тренажёрный зал в комфортной атмосфере без лишних взглядов.',
      more: 'Подробнее', all_reviews: 'Все отзывы', next_class: 'Ближайшая тренировка', live: 'Онлайн-статус',
      footer: 'Спортивный комплекс JFC Gym. Все права защищены.', menu: 'Меню',
      trial_badge: '1-я тренировка — 0 сом', kids_chip: 'Дети от 5 лет', women_chip: 'Mix fighting для девушек', cage_chip: 'Клетка и ринг',
      res_kicker: 'Результаты', res_title: 'Результаты, которые видно',
      res1_n: '298 → 120', res1_u: 'кг', res1_t: 'История трансформации нашего клиента',
      res2_n: 'CHAMPIONS!', res2_t: 'Медали детских групп на турнирах',
      res3_n: 'WAKO', res3_t: 'Призёры турниров по кикбоксингу',
      res4_n: '71,6K', res4_t: 'человек следят за нами в Instagram',
      hl_fight: 'FIGHT', hl_coaches: 'Тренеры', hl_bar: 'Фитобар', hl_group: 'Групповые', hl_sched: 'Расписание', hl_gym: 'GYM', hl_kids: 'Детские группы',
      tour_kicker: 'Тур по залу', tour_title: 'Что внутри JFC', tour_sub: 'Нажмите на зону на схеме: покажем, что там есть и какие тренировки проходят.', tour_used: 'Здесь проходят', tour_cta: 'Хочу посмотреть зал вживую', tour_free: 'Свободное посещение по абонементу',
      timer_kicker: 'Раундовый таймер', timer_title: 'Попробуйте раунд прямо сейчас', timer_sub: '3 минуты работы и 1 минута отдыха, как на тренировке в JFC. Включите таймер, сделайте бой с тенью и почувствуйте темп.', round: 'Раунд', work: 'Работа', rest: 'Отдых', start: 'Старт', pause: 'Пауза', reset: 'Сброс', timer_cta: 'Понравилось? Приходите на пробную с тренером',
      kc_kicker: 'Калькулятор', kc_title: 'Сколько калорий вы сожжёте', kc_sub: 'Выберите направление и длительность. Посчитаем расход за тренировку и за месяц.', kc_min: 'мин', kc_per: 'ккал за тренировку', kc_month: 'ккал за месяц при 3 тренировках в неделю', kc_eq: 'Это примерно', kc_burgers: 'бургеров', kc_cta: 'Начать сжигать',
      game_kicker: 'Мини-игра', game_title: 'Проверь силу удара', game_sub: 'Бейте по груше: 10 ударов, и вы получите промокод на скидку.', hits: 'Удары', power: 'Сила', best: 'Рекорд', game_tap: 'Жмите на грушу', game_win: 'Отличная серия! Ваш промокод', game_code_cta: 'Использовать в WhatsApp', game_again: 'Ещё раз', combo: 'Комбо',
      promo: 'Акция недели: первая тренировка бесплатно и −10% на первый абонемент', promo_till: 'до', promo_btn: 'Забрать скидку',
      cta_micro: 'Без оплаты и обязательств · ответим за 15 минут',
      guar_t: 'Гарантия первой недели', guar_d: 'Если в первую неделю поймёте, что это не ваше, вернём деньги за абонемент.',
      proof_ig: 'подписчиков', proof_gis: 'рейтинг 2ГИС', proof_wako: 'призёры турниров',
      quiz_kicker: 'Подбор за 10 секунд', quiz_title: 'Какая у вас цель?', quiz_sub: 'Выберите цель — покажем подходящее направление, тренера и ближайшие тренировки.', quiz_rec: 'Подходит вам',
      g1: 'Похудеть и прийти в форму', g2: 'Научиться драться', g3: 'Спорт для ребёнка', g4: 'Для девушек', g5: 'Набрать мышцы',
      book_kicker: 'Онлайн-запись', book_title: 'Запись на пробную за 3 шага', book_s1: 'Направление', book_s2: 'День и время', book_s3: 'Контакты', next: 'Далее', back: 'Назад', book_done: 'Отправить в WhatsApp', book_pick: 'Выберите тренировку',
      faq_kicker: 'Вопросы', faq_title: 'Частые вопросы',
      per_m: 'Месяц', per_3: '3 месяца −10%', filter_all: 'Все', today_list: 'Сегодня в зале', coach_sel: 'Тренер', price_from: 'от', see_all: 'Смотреть всё',
      gis_reviews: 'Все отзывы в 2ГИС', see_dirs: 'Смотреть направления',
      ig_line: 'Следите за боями и тренировками', ig_btn: 'Открыть Instagram',
      fight_kicker: 'Дом бойцов JFC', fight_line: 'Тренируйся там, где готовят чемпионов',
    },
    ky: {
      brand_sub: 'спорт комплекси',
      nav_dirs: 'Багыттар', nav_coaches: 'Машыктыруучулар', nav_prices: 'Баалар', nav_schedule: 'Жадыбал',
      nav_reviews: 'Пикирлер', nav_contacts: 'Байланыш',
      hero_kicker: 'Бишкектеги спорт комплекси',
      hero_title: 'Кечээкиден <em>күчтүү бол</em>',
      hero_title_1: 'Кечээкиден', hero_title_2: 'күчтүү', hero_title_3: 'бол',
      hero_sub: 'MMA, бокс, күрөш, машыгуу залы жана балдар секциялары. Практик машыктыруучулар, JFC промоушенинин мушкерлери жана чыныгы команданын атмосферасы.',
      cta_trial: 'Сыноо машыгуусу акысыз', cta_trial_s: 'Акысыз жазылуу',
      cta_wa: 'WhatsApp\'ка жазуу', cta_wa_s: 'WhatsApp', cta_call: 'Чалуу', cta_route: '2ГИСте маршрут', cta_route_s: '2ГИС',
      st1_n: '10+', st1_l: 'жылдан бери Кыргызстанда спортту өнүктүрөбүз',
      st2_n: '8', st2_l: 'чоңдор жана балдар үчүн багыт',
      st3_n: '71,6K', st3_l: 'Instagramдагы катталуучулар',
      st4_n: '7–23', st4_l: 'Дш–Иш, жекшемби — дем алыш',
      adv_kicker: 'Эмне үчүн JFC', adv_title: 'Жаңы баштагандан мушкер жасаган зал',
      adv1_t: 'Практик машыктыруучулар', adv1_d: 'Өздөрү торго чыккан мушкерлер жана спорт чеберлери.',
      adv2_t: 'Баары бир жерде', adv2_d: 'Зал, ринг, тор, татами, фитобар жана душу бар кийим алмаштыруучу бөлмөлөр.',
      adv3_t: 'Ар кандай деңгээл үчүн', adv3_d: 'Жаңы баштагандар жана профилер, 5 жаштан балдар жана кыздар үчүн топтор.',
      adv4_t: 'Ыңгайлуу график', adv4_d: 'Дш–Иш 7:00дөн 23:00гө чейин иштейбиз — жумуштан мурун же кийин машыгыңыз.',
      dirs_kicker: 'Багыттар', dirs_title: 'Өз спортуңузду тандаңыз', dirs_sub: 'Бир чатыр астында сегиз багыт — биринчи машыгуудан турнирге чейин.',
      coaches_kicker: 'Команда', coaches_title: 'Натыйжага жеткире турган машыктыруучулар', coaches_sub: 'Ар бир машыктыруучу — спорттук наамдары жана мушкерлерди даярдоо тажрыйбасы бар практик.',
      exp: 'жыл тажрыйба',
      prices_kicker: 'Абонементтер', prices_title: 'Жашыруун төлөмдөрсүз ачык баалар', prices_sub: 'Биринчи машыгуу — акысыз. Жеке машыгуу — 1 000 сомдон.',
      popular: 'Эң көп тандалган', price_cta: 'Тандоо', som: 'сом',
      sched_kicker: 'Жадыбал', sched_title: 'Топтук машыгуулар', sched_sub: 'Машыгуу залы жадыбалсыз иштейт: Дш–Иш 7:00–23:00. Жекшемби — дем алыш.',
      today: 'Бүгүн', no_classes: 'Жекшемби — дем алыш күнү',
      reviews_kicker: 'Пикирлер', reviews_title: 'Спортчуларыбыз эмне дейт', reviews_sub: 'Кардарлардын орточо баасы', rating: '4.9',
      loc_kicker: 'Байланыш', loc_title: 'Машыгууга келиңиз', loc_addr_l: 'Дарек', loc_addr: 'Бишкек ш., Кара-Күл көчөсү, 1/4',
      loc_hours_l: 'Иш убактысы', loc_hours: 'Дш–Иш 7:00–23:00 · Жк — дем алыш', loc_phone_l: 'Телефон',
      open_now: 'Азыр ачык', closed_now: 'Азыр жабык',
      form_title: 'Акысыз сыноо машыгуусуна жазылыңыз', form_sub: 'Атыңызды жана телефонуңузду калтырыңыз — администратор 15 мүнөттүн ичинде WhatsApp аркылуу жооп берет.',
      form_name: 'Атыңыз', form_phone: 'Телефон', form_dir: 'Багыт', form_send: 'WhatsApp аркылуу жазылуу',
      form_note: 'Баскычты басканда даяр билдирүү менен WhatsApp чаты ачылат.',
      wa_msg: 'Саламатсызбы! JFC Gymдеги сыноо машыгуусуна жазылгым келет.',
      steps_kicker: 'Кантип баштоо керек', steps_title: 'Биринчи машыгууга чейин үч кадам',
      step1_t: 'Бизге жазыңыз', step1_d: 'WhatsApp же телефон аркылуу — багыт жана убакыт тандап беребиз.',
      step2_t: 'Сыноого келиңиз', step2_d: 'Акысыз. Спорт кийим жана суу алыңыз, калганы бизде бар.',
      step3_t: 'Команда менен машыгыңыз', step3_d: 'Абонемент тандап, машыктыруучу менен жыйынтыгыңызды көзөмөлдөңүз.',
      aud_kicker: 'Кимге ылайыктуу', aud_adult: 'Чоңдорго', aud_kids: 'Балдарга', aud_women: 'Кыздарга',
      aud_adult_t: 'Форма, күч жана ишеним', aud_adult_d: 'Арыктоону, булчуң чыңдоону же турнирге чыгууну каалагандар үчүн мушташ түрлөрү жана зал.',
      aud_kids_t: '5 жаштан тартип жана ден соолук', aud_kids_d: 'Кичүүлөр үчүн оюн форматы, улуулар үчүн спорттук даярдык. Педагогикалык тажрыйбасы бар машыктыруучулар.',
      aud_women_t: 'Кыздар үчүн Mix fighting', aud_women_d: 'Ыңгайлуу атмосферада мушташ, өзүн-өзү коргоо жана машыгуу залы.',
      more: 'Кененирээк', all_reviews: 'Бардык пикирлер', next_class: 'Жакынкы машыгуу', live: 'Онлайн-статус',
      footer: 'JFC Gym спорт комплекси. Бардык укуктар корголгон.', menu: 'Меню',
      trial_badge: '1-машыгуу — 0 сом', kids_chip: '5 жаштан балдар', women_chip: 'Кыздар үчүн Mix fighting', cage_chip: 'Тор жана ринг',
      res_kicker: 'Жыйынтыктар', res_title: 'Көрүнүп турган жыйынтыктар',
      res1_n: '298 → 120', res1_u: 'кг', res1_t: 'Кардарыбыздын өзгөрүү тарыхы',
      res2_n: 'CHAMPIONS!', res2_t: 'Балдар топторунун турнирлердеги медалдары',
      res3_n: 'WAKO', res3_t: 'Кикбоксинг турнирлеринин призёрлору',
      res4_n: '71,6K', res4_t: 'адам Instagramда бизди ээрчийт',
      hl_fight: 'FIGHT', hl_coaches: 'Машыктыруучулар', hl_bar: 'Фитобар', hl_group: 'Топтук', hl_sched: 'Жадыбал', hl_gym: 'GYM', hl_kids: 'Балдар топтору',
      tour_kicker: 'Зал боюнча тур', tour_title: 'JFCнин ичинде эмне бар', tour_sub: 'Схемадагы аймакты басыңыз: ал жерде эмне бар экенин жана кандай машыгуулар өтөрүн көрсөтөбүз.', tour_used: 'Бул жерде өтөт', tour_cta: 'Залды өз көзүм менен көргүм келет', tour_free: 'Абонемент менен эркин колдонуу',
      timer_kicker: 'Раунд таймери', timer_title: 'Раундду азыр эле сынап көрүңүз', timer_sub: '3 мүнөт иш жана 1 мүнөт эс алуу, JFCдеги машыгуудагыдай. Таймерди күйгүзүп, көлөкө менен мушташып, темпти сезиңиз.', round: 'Раунд', work: 'Иш', rest: 'Эс алуу', start: 'Баштоо', pause: 'Тыным', reset: 'Кайра', timer_cta: 'Жактыбы? Машыктыруучу менен сыноого келиңиз',
      kc_kicker: 'Калькулятор', kc_title: 'Канча калория күйгүзөсүз', kc_sub: 'Багытты жана узактыгын тандаңыз. Бир машыгууга жана айга кеткен чыгымды эсептейбиз.', kc_min: 'мүн', kc_per: 'ккал бир машыгууда', kc_month: 'ккал айына, жумасына 3 машыгуу менен', kc_eq: 'Бул болжол менен', kc_burgers: 'бургер', kc_cta: 'Күйгүзүүнү баштоо',
      game_kicker: 'Мини-оюн', game_title: 'Соккуңдун күчүн текшер', game_sub: 'Грушаны уруңуз: 10 сокку, жана арзандатуу промокодун аласыз.', hits: 'Соккулар', power: 'Күч', best: 'Рекорд', game_tap: 'Грушаны басыңыз', game_win: 'Сонун серия! Промокодуңуз', game_code_cta: 'WhatsAppта колдонуу', game_again: 'Дагы бир жолу', combo: 'Комбо',
      promo: 'Жуманын акциясы: биринчи машыгуу акысыз жана биринчи абонементке −10%', promo_till: 'чейин', promo_btn: 'Арзандатууну алуу',
      cta_micro: 'Төлөмсүз жана милдеттенмесиз · 15 мүнөттө жооп беребиз',
      guar_t: 'Биринчи жуманын кепилдиги', guar_d: 'Биринчи жумада сизге туура келбей калса, абонементтин акчасын кайтарабыз.',
      proof_ig: 'катталуучу', proof_gis: '2ГИС рейтинги', proof_wako: 'турнир призёрлору',
      quiz_kicker: '10 секундда тандоо', quiz_title: 'Максатыңыз кандай?', quiz_sub: 'Максатты тандаңыз — ылайыктуу багытты, машыктыруучуну жана жакынкы машыгууларды көрсөтөбүз.', quiz_rec: 'Сизге ылайыктуу',
      g1: 'Арыктап, формага келүү', g2: 'Мушташканды үйрөнүү', g3: 'Балага спорт', g4: 'Кыздар үчүн', g5: 'Булчуң топтоо',
      book_kicker: 'Онлайн жазылуу', book_title: 'Сыноо машыгуусуна 3 кадамда жазылуу', book_s1: 'Багыт', book_s2: 'Күн жана убакыт', book_s3: 'Байланыш', next: 'Кийинки', back: 'Артка', book_done: 'WhatsApp аркылуу жөнөтүү', book_pick: 'Машыгууну тандаңыз',
      faq_kicker: 'Суроолор', faq_title: 'Көп берилүүчү суроолор',
      per_m: 'Ай', per_3: '3 ай −10%', filter_all: 'Баары', today_list: 'Бүгүн залда', coach_sel: 'Машыктыруучу', price_from: '', see_all: 'Баарын көрүү',
      gis_reviews: '2ГИСтеги бардык пикирлер', see_dirs: 'Багыттарды көрүү',
      ig_line: 'Мушташтарды жана машыгууларды көзөмөлдөңүз', ig_btn: 'Instagramды ачуу',
      fight_kicker: 'JFC мушкерлеринин үйү', fight_line: 'Чемпиондор даярдалган жерде машыгыңыз',
    },
  };

  const days = { ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], ky: ['Дш', 'Шш', 'Шр', 'Бш', 'Жм', 'Иш', 'Жк'] };
  const daysFull = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ky: ['Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума', 'Ишемби', 'Жекшемби'],
  };

  const dirs = [
    { ic: 'mma', ru: ['MMA', 'Смешанные единоборства: ударка, борьба и партер в одной системе.'], ky: ['MMA', 'Аралаш мушташ: сокку, күрөш жана партер бир системада.'] },
    { ic: 'box', ru: ['Бокс', 'Групповые и персональные тренировки: техника, работа ног, спарринги.'], ky: ['Бокс', 'Топтук жана жеке машыгуулар: техника, бут кыймылы, спарринг.'] },
    { ic: 'kick', ru: ['Кикбоксинг', 'Удары руками и ногами, подготовка к турнирам WAKO.'], ky: ['Кикбоксинг', 'Кол жана бут менен сокку, WAKO турнирлерине даярдык.'] },
    { ic: 'wrestle', ru: ['Греко-римская борьба', 'Броски, сила и баланс. Секции для детей и взрослых.'], ky: ['Грек-рим күрөшү', 'Ыргытуулар, күч жана тең салмак. Балдар жана чоңдор үчүн.'] },
    { ic: 'gym', ru: ['Тренажёрный зал', 'Современные тренажёры, свободные веса и кардиозона.'], ky: ['Машыгуу залы', 'Заманбап тренажёрлор, эркин салмактар жана кардио аймагы.'] },
    { ic: 'func', ru: ['Групповые', 'Функционал, круговые и кардио-тренировки в группе с тренером.'], ky: ['Топтук машыгуулар', 'Машыктыруучу менен топто функционалдык жана кардио машыгуулар.'] },
    { ic: 'kids', ru: ['Детские группы', 'Единоборства для детей: дисциплина, уверенность, первые медали.'], ky: ['Балдар топтору', 'Балдар үчүн мушташ: тартип, ишеним, алгачкы медалдар.'] },
    { ic: 'women', ru: ['Mix fighting для девушек', 'Единоборства и самооборона в женской группе.'], ky: ['Кыздар үчүн Mix fighting', 'Аялдар тобунда мушташ жана өзүн-өзү коргоо.'] },
  ];

  const coaches = [
    { n: 'Азамат Токтогулов', exp: 12, ru: 'Главный тренер, MMA', ky: 'Башкы машыктыруучу, MMA', tag: { ru: 'Мастер спорта', ky: 'Спорт чебери' } },
    { n: 'Нурлан Абдыкалыков', exp: 10, ru: 'Бокс, персональные', ky: 'Бокс, жеке машыгуулар', tag: { ru: 'КМС по боксу', ky: 'Бокс боюнча КМС' } },
    { n: 'Бекзат Осмонов', exp: 9, ru: 'Греко-римская борьба', ky: 'Грек-рим күрөшү', tag: { ru: 'Мастер спорта', ky: 'Спорт чебери' } },
    { n: 'Айпери Жумабаева', exp: 7, ru: 'Mix fighting для девушек', ky: 'Кыздар үчүн Mix fighting', tag: { ru: 'Сертифицированный тренер', ky: 'Сертификатталган машыктыруучу' } },
    { n: 'Эрлан Султанов', exp: 8, ru: 'Тренажёрный зал (GYM)', ky: 'Машыгуу залы (GYM)', tag: { ru: 'Нутрициолог', ky: 'Нутрициолог' } },
    { n: 'Улан Мамытов', exp: 6, ru: 'Кикбоксинг, детские группы', ky: 'Кикбоксинг, балдар топтору', tag: { ru: 'Призёр WAKO', ky: 'WAKO призёру' } },
  ];

  const prices = [
    { p: '400', u: { ru: '/ визит', ky: '/ келүү' }, ru: ['Разовое посещение', ['Тренажёрный зал', 'Раздевалка и душ', 'Без обязательств']], ky: ['Бир жолку келүү', ['Машыгуу залы', 'Кийим алмаштыруу жана душ', 'Милдеттенмесиз']] },
    { p: '2 500', u: { ru: '/ мес', ky: '/ ай' }, ru: ['Зал безлимит', ['Тренажёрный зал без ограничений', 'Вводный инструктаж', 'Заморозка 7 дней']], ky: ['Зал чексиз', ['Машыгуу залы чектөөсүз', 'Киришүү инструктажы', '7 күнгө тоңдуруу']] },
    { p: '3 000', u: { ru: '/ мес', ky: '/ ай' }, hit: true, ru: ['Секция', ['12 групповых тренировок', 'Любое единоборство', 'Зал в свободное время']], ky: ['Секция', ['Топто 12 машыгуу', 'Каалаган мушташ түрү', 'Бош убакта зал']] },
    { p: '4 500', u: { ru: '/ мес', ky: '/ ай' }, ru: ['Всё включено', ['Все секции и зал', '2 персональные тренировки', 'Заморозка 14 дней']], ky: ['Баары камтылган', ['Бардык секциялар жана зал', '2 жеке машыгуу', '14 күнгө тоңдуруу']] },
  ];

  // время по дням Пн..Вс (null — нет занятия)
  const schedule = [
    { d: 0, t: [ '19:00', null, '19:00', null, '19:00', '12:00', null ] },
    { d: 1, t: [ null, '19:00', null, '19:00', null, '10:00', null ] },
    { d: 2, t: [ '18:00', null, '18:00', null, '18:00', null, null ] },
    { d: 3, t: [ null, '17:00', null, '17:00', null, '11:00', null ] },
    { d: 5, t: [ '07:30', '20:00', '07:30', '20:00', '07:30', null, null ] },
    { d: 6, t: [ '16:00', null, '16:00', null, '16:00', '11:00', null ] },
    { d: 7, t: [ null, '10:00', null, '10:00', null, '13:00', null ] },
  ];

  const reviews = [
    { n: 'Тимур', s: { ru: 'MMA, 6 месяцев', ky: 'MMA, 6 ай' }, ru: 'Хожу на MMA полгода — минус 9 кг и первая победа на любительском турнире. Тренеры реально вкладываются в каждого.', ky: 'Жарым жылдан бери MMAга барам — 9 кг арыктадым жана ышкыбоздор турниринде биринчи жеңиш. Машыктыруучулар ар бирине чын дилден убакыт бөлүшөт.' },
    { n: 'Айгерим', s: { ru: 'мама спортсмена', ky: 'спортчунун апасы' }, ru: 'Отдала сына 7 лет на борьбу. Стал собраннее, сам просится на тренировки. Отдельное спасибо тренеру за терпение!', ky: '7 жашар уулумду күрөшкө бердим. Тартиптүү болуп, машыгууга өзү сурана баштады. Машыктыруучуга сабыры үчүн өзгөчө рахмат!' },
    { n: 'Данияр', s: { ru: 'тренажёрный зал', ky: 'машыгуу залы' }, ru: 'Лучший зал по соотношению цены и оборудования. Всегда чисто, есть души, не бывает очередей на тренажёры.', ky: 'Баа менен жабдуунун катышы боюнча эң мыкты зал. Дайыма таза, душ бар, тренажёрлорго кезек болбойт.' },
    { n: 'Алина', s: { ru: 'женский фитнес', ky: 'аялдар фитнеси' }, ru: 'Женские группы — супер! Атмосфера дружная, никто не смотрит косо. За 3 месяца подтянула тело и освоила базовую самооборону.', ky: 'Аялдар топтору — сонун! Атмосфера достук, эч ким кыйшык карабайт. 3 айда денемди чыңдап, өзүн-өзү коргоонун негиздерин үйрөндүм.' },
    { n: 'Эрмек', s: { ru: 'бокс, 1 год', ky: 'бокс, 1 жыл' }, ru: 'Тренируюсь у Нурлана по боксу. Ставит технику с нуля, объясняет понятно. Спарринги только по готовности — безопасно.', ky: 'Нурландан бокс боюнча машыгам. Техниканы нөлдөн коёт, түшүнүктүү айтып берет. Спарринг даяр болгондо гана — коопсуз.' },
    { n: 'Сезим', s: { ru: 'функционал', ky: 'функционалдык машыгуу' }, ru: 'Удобно, что открыто с 7 утра — успеваю до работы. Администраторы вежливые, записалась через WhatsApp за минуту.', ky: 'Эртең мененки 7ден ачык болгону ыңгайлуу — жумушка чейин үлгүрөм. Администраторлор сылык, WhatsApp аркылуу бир мүнөттө жазылдым.' },
  ];


  // Подбор по цели: цель → индексы направлений и тренеров
  const goals = [
    { k: 'g1', ic: 'func', d: [5, 4], c: [4] },
    { k: 'g2', ic: 'mma', d: [0, 1, 2], c: [0, 1] },
    { k: 'g3', ic: 'kids', d: [6, 3], c: [5, 2] },
    { k: 'g4', ic: 'women', d: [7, 5], c: [3] },
    { k: 'g5', ic: 'gym', d: [4], c: [4] },
  ];
  // Зоны зала для интерактивной схемы
  const zones = [
    { k: 'cage', ic: 'mma', d: [0, 7], ru: ['Октагон', 'Профессиональная клетка для MMA, спаррингов и подготовки к турнирам.'], ky: ['Октагон', 'MMA, спарринг жана турнирге даярдануу үчүн кесипкөй тор.'] },
    { k: 'ring', ic: 'box', d: [1, 2], ru: ['Боксёрский ринг', 'Ринг для бокса и кикбоксинга: работа в парах и спарринги.'], ky: ['Бокс рингы', 'Бокс жана кикбоксинг үчүн ринг: жуп менен иштөө жана спарринг.'] },
    { k: 'bags', ic: 'kick', d: [1, 2, 5], ru: ['Зона груш', 'Ряд мешков для ударной техники, комбинаций и кардио.'], ky: ['Груша аймагы', 'Сокку техникасы, комбинациялар жана кардио үчүн грушалар.'] },
    { k: 'mats', ic: 'wrestle', d: [3, 6], ru: ['Татами', 'Мягкое покрытие для борьбы, партера и детских групп.'], ky: ['Татами', 'Күрөш, партер жана балдар топтору үчүн жумшак төшөм.'] },
    { k: 'gym', ic: 'gym', d: [4], ru: ['Тренажёрный зал', 'Силовые тренажёры, свободные веса и кардиозона.'], ky: ['Машыгуу залы', 'Күч тренажёрлору, эркин салмактар жана кардио аймагы.'] },
    { k: 'bar', ic: 'shaker', d: [], ru: ['Фитобар', 'Протеиновые коктейли, вода и перекус после тренировки.'], ky: ['Фитобар', 'Машыгуудан кийин протеин коктейлдери, суу жана жеңил тамак.'] },
    { k: 'lock', ic: 'shield', d: [], ru: ['Раздевалки и душ', 'Отдельные раздевалки с душем и шкафчиками для вещей.'], ky: ['Кийим алмаштыруучу жана душ', 'Душу жана буюм шкафтары бар өзүнчө бөлмөлөр.'] },
  ];
  const faq = [
    { ru: ['Нужен ли опыт?', 'Нет. Группы делятся по уровню, новичков ставят в базовую группу и учат с нуля.'], ky: ['Тажрыйба керекпи?', 'Жок. Топтор деңгээл боюнча бөлүнөт, жаңы баштагандар базалык топко кошулуп, нөлдөн үйрөнүшөт.'] },
    { ru: ['Что взять на первую тренировку?', 'Спортивную форму, сменную обувь и воду. Перчатки и шлем на первое время дадим.'], ky: ['Биринчи машыгууга эмне алып келем?', 'Спорт кийим, алмаштыруучу бут кийим жана суу. Мээлей менен шлемди алгач өзүбүз беребиз.'] },
    { ru: ['С какого возраста берёте детей?', 'С 5 лет. Для младших — игровой формат, для старших — спортивная подготовка и турниры.'], ky: ['Балдарды канча жаштан аласыздар?', '5 жаштан. Кичүүлөр үчүн оюн форматы, улуулар үчүн спорттук даярдык жана турнирлер.'] },
    { ru: ['Можно заморозить абонемент?', 'Да, на 7–14 дней в зависимости от тарифа. Напишите администратору в WhatsApp.'], ky: ['Абонементти тоңдурса болобу?', 'Ооба, тарифке жараша 7–14 күнгө. Администраторго WhatsApp аркылуу жазыңыз.'] },
    { ru: ['Есть ли парковка и душ?', 'Да: раздевалки с душем, фитобар и место для парковки у входа.'], ky: ['Унаа токтотуучу жай жана душ барбы?', 'Ооба: душу бар кийим алмаштыруучу бөлмөлөр, фитобар жана кире бериште унаа токтотуучу жай.'] },
  ];

  const P = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  const I = {
    mma: `<path d="M7 11V7a2 2 0 0 1 4 0v3M11 10V6a2 2 0 0 1 4 0v4M15 10V7.5a2 2 0 0 1 4 0V14a7 7 0 0 1-7 7h-1a6 6 0 0 1-6-6v-2.5a2 2 0 0 1 4 0V14"/>`,
    kick: `<circle cx="6.5" cy="3.6" r="2.2"/><path d="M7.4 6.6L9.4 13l-2.2 4.2L5.2 22M9.4 13l5-2 6.8-3.2M7.8 8.4L4 10.6M7.8 8.4l3.6-2"/>`,
    shaker: `<path d="M8 7h8l-1 14H9z"/><path d="M9 7V5h6v2M10 3h4"/>`,
    run: `<circle cx="14" cy="4.5" r="2"/><path d="M10 21l3-6-3-3 3-4 3 3 3 1M13 15l-5 1M6 9l4-1"/>`,
    coach: `<circle cx="12" cy="5" r="2.5"/><path d="M6 21v-6a6 6 0 0 1 12 0v6M12 10v4M9 13h6"/>`,
    box: `<path d="M6 10a6 6 0 0 1 12 0v3a4 4 0 0 1-4 4H9a3 3 0 0 1-3-3z"/><path d="M8 17v3h8v-3M6 12h4"/>`,
    wrestle: `<circle cx="8" cy="5" r="2"/><circle cx="16" cy="5" r="2"/><path d="M8 7v5l-3 8M16 7v5l3 8M8 10l8 0M8 12l2 4M16 12l-2 4"/>`,
    grapple: `<path d="M3 18c3-6 6-9 9-9s6 3 9 9"/><circle cx="12" cy="5" r="2"/><path d="M7 21l5-6 5 6"/>`,
    gym: `<path d="M2 12h2M20 12h2M6 7v10M18 7v10M4 9v6M20 9v6M6 12h12"/>`,
    func: `<path d="M9 5h6M12 5v3"/><path d="M7 14a5 5 0 1 0 10 0 5 5 0 0 0-10 0z"/><path d="M12 12v2.5l1.5 1"/>`,
    kids: `<circle cx="12" cy="6" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M9 14l-3-3M15 14l3-3"/>`,
    women: `<path d="M12 21c-5-3-8-6-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 11c0 4-3 7-8 10z"/>`,
    wa: `<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1c-1-.4-2.6-2-3-3l1-1-1-2z"/>`,
    phone: `<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>`,
    pin: `<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>`,
    clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
    ig: `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>`,
    arrow: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
    check: `<path d="M5 12.5l4.5 4.5L19 7.5"/>`,
    star: `<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" stroke="none"/>`,
    medal: `<circle cx="12" cy="15" r="5"/><path d="M8.5 11L6 3h4l2 5 2-5h4l-2.5 8"/>`,
    team: `<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3 20a6 6 0 0 1 12 0M15 14.5a5 5 0 0 1 6 5.5"/>`,
    level: `<path d="M4 20V14M10 20V9M16 20V4M2 20h20"/>`,
    shield: `<path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>`,
    fire: `<path d="M12 21c-3.9 0-7-2.7-7-6.6 0-3.2 2.2-5.3 3.6-7.4.3 2 1.3 3 2.4 3.4C11 7 12.4 4.6 14.6 3c-.3 2.6.9 4.6 2.4 6.4 1.2 1.4 2 3 2 5 0 3.9-3.1 6.6-7 6.6z"/>`,
    menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
    close: `<path d="M6 6l12 12M18 6L6 18"/>`,
    quote: `<path d="M9 7H5v6h4v4H7M19 7h-4v6h4v4h-2" />`,
  };
  const icon = (k, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" ${P} aria-hidden="true">${I[k] || ''}</svg>`;

  // Стилизованный «фото-плейсхолдер» тренера: силуэт в дуотоне.
  function portrait(i, a, b, fg) {
    const id = 'pg' + i + Math.random().toString(36).slice(2, 6);
    const female = i === 3;
    const hair = female
      ? '<path d="M70 70c0-30 18-44 30-44s30 14 30 44c0 22-6 40-6 52H76c0-12-6-30-6-52z" opacity=".9"/>'
      : '';
    return `<svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="200" height="240" fill="url(#${id})"/><g fill="${fg}">${hair}<ellipse cx="100" cy="82" rx="28" ry="33"/><path d="M86 108h28v20H86z"/><path d="M20 240c4-62 34-92 80-92s76 30 80 92z"/></g></svg>`;
  }

  // Иконка в стиле «актуального» из Instagram: красный треугольник + чёрный силуэт.
  const hl = (k) => `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="31" fill="#fff"/><polygon points="9,15 55,15 32,55" fill="#e30613"/><g transform="translate(17 12) scale(1.25)" fill="none" stroke="#111" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${I[k] || ''}</g></svg>`;
  const highlights = [['kick', 'hl_fight', '#dirs'], ['coach', 'hl_coaches', '#coaches'], ['shaker', 'hl_bar', '#why'], ['run', 'hl_group', '#schedule'], ['clock', 'hl_sched', '#schedule'], ['gym', 'hl_gym', '#prices'], ['kids', 'hl_kids', '#dirs']];
  // Логотип в духе фирменного: жирный курсив JFC + красный GYM.
  const logo = (fg = '#111') => `<svg class="jlogo" viewBox="0 0 132 52" aria-label="JFC GYM" role="img"><text x="2" y="38" font-family="Montserrat,'Arial Black',sans-serif" font-weight="900" font-style="italic" font-size="44" letter-spacing="-3" fill="${fg}">JFC</text><path d="M60 24h20l-2 5H58z" fill="#e30613"/><text x="84" y="50" font-family="Montserrat,'Arial Black',sans-serif" font-weight="900" font-style="italic" font-size="13" fill="#e30613" letter-spacing="1">GYM</text></svg>`;

  let lang = 'ru';
  try { lang = localStorage.getItem('jfc-lang') || 'ru'; } catch (e) {}
  if (!T[lang]) lang = 'ru';

  const t = (k) => (T[lang][k] ?? T.ru[k] ?? k);
  const L = (o) => (o && (o[lang] ?? o.ru));
  const waLink = (msg) => `https://wa.me/${C.wa}?text=${encodeURIComponent(msg || t('wa_msg'))}`;

  // Время в Бишкеке (UTC+6)
  function bishkekNow() {
    const d = new Date(Date.now() + new Date().getTimezoneOffset() * 60000 + 6 * 3600000);
    return { day: (d.getDay() + 6) % 7, min: d.getHours() * 60 + d.getMinutes() };
  }
  function isOpen() {
    const { day, min } = bishkekNow();
    return day !== 6 && min >= 420 && min < 1380;
  }
  function nextClass() {
    const { day, min } = bishkekNow();
    for (let k = 0; k < 7; k++) {
      const dd = (day + k) % 7;
      const list = schedule.map((r) => ({ r, tm: r.t[dd] })).filter((x) => x.tm)
        .map((x) => ({ ...x, m: +x.tm.slice(0, 2) * 60 + +x.tm.slice(3) }))
        .filter((x) => k > 0 || x.m > min).sort((a, b) => a.m - b.m);
      if (list[0]) return { dir: L(dirs[list[0].r.d])[0], time: list[0].tm, day: dd, k };
    }
    return null;
  }

  // Дедлайн акции: ближайшая суббота (воскресенье — выходной)
  function promoDate() {
    const n = bishkekNow(); const add = (5 - n.day + 7) % 7 || 7;
    const d = new Date(Date.now() + add * 864e5);
    const dd = String(d.getDate()).padStart(2, '0'), mm = String(d.getMonth() + 1).padStart(2, '0');
    return lang === 'ky' ? `${dd}.${mm} ${t('promo_till')}` : `${t('promo_till')} ${dd}.${mm}`;
  }

  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Счётчики: элементы с data-cu анимируются от 0 до своего значения при появлении
  let cio;
  function countUps() {
    const els = document.querySelectorAll('[data-cu]');
    if (reduce || !('IntersectionObserver' in window)) return;
    cio = cio || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { cio.unobserve(e.target); runCount(e.target); } }), { threshold: 0.5 });
    els.forEach((el) => { if (el.children.length) return; el.dataset.cu = el.textContent; cio.observe(el); });
  }
  function runCount(el) {
    const raw = el.dataset.cu, m = raw.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) return;
    const num = parseFloat(m[2].replace(',', '.')), dec = (m[2].split(/[.,]/)[1] || '').length, sep = m[2].includes(',') ? ',' : '.';
    const t0 = performance.now(), dur = 1200;
    const step = (now) => { const k = Math.min(1, (now - t0) / dur), v = num * (1 - Math.pow(1 - k, 3));
      el.textContent = m[1] + v.toFixed(dec).replace('.', sep) + m[3]; if (k < 1) requestAnimationFrame(step); else el.textContent = raw; };
    requestAnimationFrame(step);
  }
  // Прогресс прокрутки → CSS-переменная --sp (0..1), для «шкалы здоровья»
  const sp = () => { const h = document.documentElement; const v = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight); h.style.setProperty('--sp', v.toFixed(4)); };
  addEventListener('scroll', sp, { passive: true }); addEventListener('resize', sp);
  // Лёгкий 3D-наклон карточек с data-tilt
  if (!reduce) {
    document.addEventListener('pointermove', (e) => {
      const el = e.target.closest && e.target.closest('[data-tilt]'); if (!el || e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(700px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-3px)`;
    });
    document.addEventListener('pointerout', (e) => { const el = e.target.closest && e.target.closest('[data-tilt]'); if (el && !el.contains(e.relatedTarget)) el.style.transform = ''; });
  }
  // Короткий звук гонга (только после действия пользователя)
  let actx;
  function bell(times = 1) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      for (let i = 0; i < times; i++) {
        const t = actx.currentTime + i * .35, o = actx.createOscillator(), g = actx.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(880, t); o.frequency.exponentialRampToValueAtTime(660, t + .8);
        g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.35, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + 1.1);
        o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 1.2);
      }
    } catch (e) {}
  }

  function apply() {
    document.documentElement.lang = lang === 'ky' ? 'ky' : 'ru';
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    document.querySelectorAll('[data-th]').forEach((el) => { el.innerHTML = t(el.dataset.th); });
    document.querySelectorAll('[data-tp]').forEach((el) => { el.placeholder = t(el.dataset.tp); });
    document.querySelectorAll('[data-lang]').forEach((el) => el.classList.toggle('on', el.dataset.lang === lang));
    document.querySelectorAll('[data-link]').forEach((el) => {
      const k = el.dataset.link;
      el.href = k === 'tel' ? 'tel:' + C.tel : k === 'wa' ? waLink() : k === 'gis' ? C.gis : C.ig;
      if (k !== 'tel') { el.target = '_blank'; el.rel = 'noopener'; }
    });
    document.querySelectorAll('[data-phone]').forEach((el) => { el.textContent = C.phone; });
    document.querySelectorAll('[data-open]').forEach((el) => {
      const o = isOpen(); el.textContent = t(o ? 'open_now' : 'closed_now'); el.classList.toggle('closed', !o);
    });
    if (typeof window.render === 'function') window.render();
    revealInit(); countUps(); sp();
  }

  function setLang(l) {
    lang = l; try { localStorage.setItem('jfc-lang', l); } catch (e) {}
    apply();
  }

  let io;
  function revealInit() {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.rv').forEach((e) => e.classList.add('in')); return; }
    io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.rv:not(.in)').forEach((e) => io.observe(e));
  }

  document.addEventListener('click', (e) => {
    const lb = e.target.closest('[data-lang]');
    if (lb) { e.preventDefault(); setLang(lb.dataset.lang); }
    const bg = e.target.closest('[data-burger]');
    if (bg) document.body.classList.toggle('nav-open');
    else if (e.target.closest('nav a')) document.body.classList.remove('nav-open');
  });

  document.addEventListener('submit', (e) => {
    const f = e.target.closest('[data-waform]');
    if (!f) return;
    e.preventDefault();
    const fd = new FormData(f);
    const lines = [t('wa_msg'), '', `${t('form_name')}: ${fd.get('name') || '-'}`, `${t('form_phone')}: ${fd.get('phone') || '-'}`];
    if (fd.get('dir')) lines.push(`${t('form_dir')}: ${fd.get('dir')}`);
    const a = document.createElement('a');
    a.href = waLink(lines.join('\n')); a.target = '_blank'; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
  });

  window.JFC = { C, T, goals, faq, zones, promoDate, bell, reduce, countUps, hl, highlights, logo, days, daysFull, dirs, coaches, prices, schedule, reviews, icon, portrait, t, L, waLink, isOpen, nextClass, bishkekNow, setLang, get lang() { return lang; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
