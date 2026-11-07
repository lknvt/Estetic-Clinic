/* La Familia KG — shared content, RU/KY translations and helpers for all 3 design variants.
   Edit contacts, texts, team and reviews here once; every variant picks them up. */
(function () {
  const PHONE = '+996777443333';
  const PHONE_H = '+996 777 443 333';
  const GIS = 'https://2gis.kg/bishkek/firm/70000001027848239';
  const IG = 'https://instagram.com/lafamilia.kg';

  const img = id => `img/${id}.jpg`;

  const T = {
    ru: {
      nav_cat: 'Каталог', nav_why: 'Преимущества', nav_steps: 'Как работаем', nav_team: 'Команда', nav_rev: 'Отзывы', nav_contacts: 'Контакты',
      hero_tag: 'Мебельный салон в Бишкеке',
      hero_h: 'Мебель, вокруг которой собирается <em>вся семья</em>',
      hero_p: 'Диваны, спальни, детские и кухни — в наличии и на заказ. Доставка и сборка по Бишкеку, рассрочка без переплат.',
      btn_wa: 'Написать в WhatsApp', btn_cat: 'Смотреть каталог', btn_call: 'Позвонить', btn_2gis: 'Открыть в 2ГИС', btn_route: 'Маршрут в 2ГИС',
      f1n: '1000+', f1: 'семей обставили дом', f2n: '2 года', f2: 'гарантии', f3n: '0%', f3: 'рассрочка',
      why_k: 'Почему мы', why_h: 'Почему выбирают La Familia',
      cat_k: 'Каталог', cat_h: 'Мебель для каждой комнаты', cat_p: 'Выберите комнату — пришлём подборку моделей и цены в WhatsApp',
      cat_more: 'Узнать цену',
      steps_k: 'Просто и понятно', steps_h: 'Как мы работаем', steps_p: 'От первого сообщения до собранной мебели — 4 шага',
      team_k: 'Люди La Familia', team_h: 'Наша команда', team_p: 'Помогут выбрать мебель под ваш дом и бюджет',
      rev_k: 'Отзывы', rev_h: 'Что говорят покупатели', rev_more: 'Все отзывы в 2ГИС',
      cta_k: 'Бесплатно', cta_h: 'Подборка мебели и цены за 10 минут',
      cta_p: 'Оставьте имя и номер — менеджер пришлёт фото, размеры и цены в WhatsApp',
      f_name: 'Ваше имя', f_phone: 'Телефон', f_room: 'Что ищете?', f_send: 'Получить подборку',
      f_note: 'Без спама. Ответим в рабочее время.',
      wa_hi: 'Здравствуйте! Хочу подборку мебели.', wa_cat: 'Здравствуйте! Интересует категория:',
      ct_k: 'Контакты', ct_h: 'Приходите в салон', ct_p: 'Посмотрите и потрогайте мебель вживую — консультант всё покажет.',
      lbl_addr: 'Адрес', lbl_hours: 'Режим работы', lbl_phone: 'Телефон', lbl_social: 'Мы в соцсетях',
      addr: 'Бишкек, пр. Аалы Токомбаева, 27/3', hours: 'Ежедневно 10:00 – 19:00',
      foot: '© 2026 La Familia KG · Мебель для всей семьи',
      ig_k: 'Instagram', ig_h: 'Новинки каждую неделю в нашем Instagram', ig_btn: 'Подписаться',
      ig_bio: 'Мебель для всей семьи 🏡<br>Диваны · Спальни · Детские · Кухни<br>📍 Бишкек, Токомбаева 27/3<br>🚚 Доставка и сборка · рассрочка 0%',
      ig_posts: 'публикаций', ig_fol: 'подписчиков', ig_msg: 'Написать',
      open_now: 'Открыто сегодня до 19:00', menu: 'Меню',
    },
    ky: {
      nav_cat: 'Каталог', nav_why: 'Артыкчылыктар', nav_steps: 'Иштөө тартиби', nav_team: 'Команда', nav_rev: 'Пикирлер', nav_contacts: 'Байланыш',
      hero_tag: 'Бишкектеги эмерек салону',
      hero_h: '<em>Бүт үй-бүлө</em> чогула турган эмерек',
      hero_p: 'Дивандар, уктоочу бөлмө, балдар бөлмөсү жана ашкана эмеректери — даяры жана заказ менен. Бишкек боюнча жеткирүү жана куроо, үстөк төлөмсүз бөлүп төлөө.',
      btn_wa: 'WhatsApp’ка жазуу', btn_cat: 'Каталогду көрүү', btn_call: 'Чалуу', btn_2gis: '2ГИСте ачуу', btn_route: '2ГИСте маршрут',
      f1n: '1000+', f1: 'үй-бүлө үйүн жасалгалады', f2n: '2 жыл', f2: 'кепилдик', f3n: '0%', f3: 'бөлүп төлөө',
      why_k: 'Эмне үчүн биз', why_h: 'Эмне үчүн La Familia’ны тандашат',
      cat_k: 'Каталог', cat_h: 'Ар бир бөлмө үчүн эмерек', cat_p: 'Бөлмөнү тандаңыз — моделдерди жана бааларды WhatsApp аркылуу жөнөтөбүз',
      cat_more: 'Баасын билүү',
      steps_k: 'Жөнөкөй жана түшүнүктүү', steps_h: 'Биз кантип иштейбиз', steps_p: 'Биринчи билдирүүдөн куралган эмерекке чейин — 4 кадам',
      team_k: 'La Familia адамдары', team_h: 'Биздин команда', team_p: 'Үйүңүзгө жана бюджетиңизге ылайык эмерек тандоого жардам беришет',
      rev_k: 'Пикирлер', rev_h: 'Кардарлар эмне дешет', rev_more: 'Бардык пикирлер 2ГИСте',
      cta_k: 'Акысыз', cta_h: '10 мүнөттө эмерек тандоосу жана баалар',
      cta_p: 'Атыңызды жана номериңизди калтырыңыз — менеджер сүрөттөрдү, өлчөмдөрдү жана бааларды WhatsApp’ка жөнөтөт',
      f_name: 'Атыңыз', f_phone: 'Телефон', f_room: 'Эмне издеп жатасыз?', f_send: 'Тандоону алуу',
      f_note: 'Спамсыз. Иш убактысында жооп беребиз.',
      wa_hi: 'Саламатсызбы! Эмерек тандоосун алгым келет.', wa_cat: 'Саламатсызбы! Бул категория кызыктырат:',
      ct_k: 'Байланыш', ct_h: 'Салонго келиңиз', ct_p: 'Эмеректи жандуу көрүп, кармап көрүңүз — кеңешчи баарын көрсөтөт.',
      lbl_addr: 'Дарек', lbl_hours: 'Иш убактысы', lbl_phone: 'Телефон', lbl_social: 'Социалдык тармактар',
      addr: 'Бишкек, Аалы Токомбаев пр., 27/3', hours: 'Күн сайын 10:00 – 19:00',
      foot: '© 2026 La Familia KG · Бүт үй-бүлө үчүн эмерек',
      ig_k: 'Instagram', ig_h: 'Ар жумада жаңылыктар биздин Instagram’да', ig_btn: 'Жазылуу',
      ig_bio: 'Бүт үй-бүлө үчүн эмерек 🏡<br>Дивандар · Уктоочу бөлмө · Балдар · Ашкана<br>📍 Бишкек, Токомбаев 27/3<br>🚚 Жеткирүү жана куроо · 0% бөлүп төлөө',
      ig_posts: 'жарыялоо', ig_fol: 'жазылуучу', ig_msg: 'Жазуу',
      open_now: 'Бүгүн 19:00гө чейин ачык', menu: 'Меню',
    },
  };

  const D = {
    adv: [
      { ic: 'leaf', ru: ['Безопасно для детей', 'Прочные материалы и сертифицированные покрытия без резкого запаха.'],
        ky: ['Балдар үчүн коопсуз', 'Бекем материалдар жана жытсыз сертификацияланган жабуулар.'] },
      { ic: 'truck', ru: ['Доставка и сборка', 'Привезём и соберём по Бишкеку аккуратно и в срок.'],
        ky: ['Жеткирүү жана куроо', 'Бишкек боюнча өз убагында алып келип, тыкан куруп беребиз.'] },
      { ic: 'wallet', ru: ['Рассрочка 0%', 'Покупайте сейчас — платите частями без переплат.'],
        ky: ['0% бөлүп төлөө', 'Азыр сатып алыңыз — үстөк төлөмсүз бөлүп төлөңүз.'] },
      { ic: 'shield', ru: ['Гарантия 2 года', 'Официальная гарантия и сервис после покупки.'],
        ky: ['2 жыл кепилдик', 'Расмий кепилдик жана сатып алгандан кийинки тейлөө.'] },
    ],
    cats: [
      { img: '1555041469-a586c61ea9bc', ru: ['Гостиная и диваны', 'Прямые, угловые, модульные', 'Диваны'], ky: ['Конок бөлмө жана дивандар', 'Түз, бурчтук, модулдук', 'Дивандар'] },
      { img: '1616627561839-074385245ff6', ru: ['Спальни', 'Кровати, комоды, тумбы', 'Спальни'], ky: ['Уктоочу бөлмө', 'Керебеттер, комоддор, тумбалар', 'Уктоочу'] },
      { img: '1615874959474-d609969a20ed', ru: ['Детская', 'Кровати, столы, шкафы', 'Детская'], ky: ['Балдар бөлмөсү', 'Керебеттер, столдор, шкафтар', 'Балдар'] },
      { img: '1617806118233-18e1de247200', ru: ['Кухни и столовые', 'Столы, стулья, гарнитуры', 'Кухни'], ky: ['Ашкана жана тамактануу', 'Столдор, отургучтар, гарнитуралар', 'Ашкана'] },
      { img: '1595428774223-ef52624120d2', ru: ['Шкафы и хранение', 'Купе, распашные, стеллажи', 'Шкафы'], ky: ['Шкафтар жана сактоо', 'Купе, эшиктүү, текчелер', 'Шкафтар'] },
      { img: '1586023492125-27b2c045efd7', ru: ['Кресла и стулья', 'Акцент для любого интерьера', 'Кресла'], ky: ['Креслолор жана отургучтар', 'Ар кандай интерьерге акцент', 'Креслолор'] },
    ],
    steps: [
      { ic: 'chat', ru: ['Заявка', 'Пишете в WhatsApp или звоните — отвечаем за 10 минут'], ky: ['Өтүнмө', 'WhatsApp’ка жазасыз же чаласыз — 10 мүнөттө жооп беребиз'] },
      { ic: 'ruler', ru: ['Подбор', 'Подберём модели под размер комнаты, стиль и бюджет'], ky: ['Тандоо', 'Бөлмөнүн өлчөмүнө, стилге жана бюджетке ылайык тандайбыз'] },
      { ic: 'truck', ru: ['Доставка', 'Привезём в удобный для вас день и время'], ky: ['Жеткирүү', 'Сизге ыңгайлуу күнү жана убакта алып келебиз'] },
      { ic: 'tool', ru: ['Сборка', 'Соберём, расставим и заберём упаковку'], ky: ['Куроо', 'Куруп, ордуна коюп, таңгагын алып кетебиз'] },
    ],
    team: [
      { img: '1494790108377-be9c29b29330', ru: ['Айгерим Касымова', 'Дизайнер интерьера', 'Соберёт комнату «под ключ» и подберёт цвета'],
        ky: ['Айгерим Касымова', 'Интерьер дизайнери', 'Бөлмөнү толугу менен жасалгалап, түстөрдү тандайт'] },
      { img: '1507003211169-0a1dd7228f2d', ru: ['Нурлан Абдыкадыров', 'Руководитель салона', 'Отвечает за качество и сроки'],
        ky: ['Нурлан Абдыкадыров', 'Салондун жетекчиси', 'Сапат жана мөөнөт үчүн жооптуу'] },
      { img: '1544005313-94ddf0286df2', ru: ['Жибек Токтосунова', 'Менеджер по продажам', 'Расскажет о моделях, ценах и рассрочке'],
        ky: ['Жибек Токтосунова', 'Сатуу боюнча менеджер', 'Моделдер, баалар жана бөлүп төлөө жөнүндө айтып берет'] },
      { img: '1506794778202-cad84cf45f1d', ru: ['Бакыт Осмонов', 'Мастер по сборке', 'Соберёт мебель быстро и аккуратно'],
        ky: ['Бакыт Осмонов', 'Куроо боюнча уста', 'Эмеректи тез жана тыкан куруп берет'] },
    ],
    reviews: [
      { n: 'Асель', p: 'Джал', ru: 'Купили угловой диван и детскую кровать. Привезли на следующий день и собрали за час. Качество отличное!',
        ky: 'Бурчтук диван жана балдар керебетин сатып алдык. Эртеси күнү алып келип, бир саатта куруп беришти. Сапаты сонун!' },
      { n: 'Эрлан', p: 'Асанбай', ru: 'Взяли спальный гарнитур в рассрочку без переплат — очень удобно. Менеджер помогла с выбором цвета.',
        ky: 'Уктоочу бөлмө гарнитурасын үстөк төлөмсүз бөлүп төлөп алдык — абдан ыңгайлуу. Менеджер түсүн тандоого жардам берди.' },
      { n: 'Мээрим', p: 'Восток-5', ru: 'Заказывала шкаф-купе под размер ниши. Всё встало идеально, мастера очень аккуратные.',
        ky: 'Нишанын өлчөмүнө купе шкаф заказ кылдым. Баары так туура келди, усталар абдан тыкан.' },
      { n: 'Данияр', p: 'Кок-Жар', ru: 'Большой выбор столов и стульев, честные цены. Уже посоветовал салон друзьям.',
        ky: 'Столдор менен отургучтардын тандоосу чоң, баалары адилет. Салонду досторума сунуштадым.' },
    ],
    feed: ['1618220179428-22790b461013', '1616594039964-ae9021a400a0', '1567016432779-094069958ea5', '1544457070-4cd773b4d71e',
      '1600210492486-724fe5c67fb0', '1522771739844-6a9f6d5f14af', '1550581190-9c1c48d21d6c', '1519710164239-da123dc03ef4', '1556228453-efd6c1ff04f6'],
  };

  const P = {
    wa: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/><path d="M8.6 7.4c.2-.4.5-.4.8-.4h.6c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .5-.1.6l-.6.7c-.1.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.7-.6c.2-.1.4-.2.6-.1l1.9.8c.3.1.4.3.4.5v.6c0 .3 0 .6-.4.8-.6.4-1.3.6-2 .5-1.9-.3-4.9-3.3-5.2-5.2-.1-.7.1-1.4.5-2Z" fill="currentColor" stroke="none"/>',
    phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-6 9-7"/>',
    truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
    wallet: '<rect x="2.5" y="6" width="19" height="13" rx="3"/><path d="M2.5 10h19M16 14.5h2"/><path d="M6 6l9-3 1.5 3"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    ruler: '<path d="m3 17 14-14 4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>',
    tool: '<path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-8-8 8-8 1.5 1.5Z"/><path d="m3 21 4-4"/>',
    star: '<path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4l-5.5 2.9 1-6.2L3 9.7l6.2-.9z" fill="currentColor" stroke="none"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    gis: '<circle cx="12" cy="12" r="9"/><path d="M12 7a3.2 3.2 0 0 0-3.2 3.2c0 2.6 3.2 6.3 3.2 6.3s3.2-3.7 3.2-6.3A3.2 3.2 0 0 0 12 7Z" fill="currentColor"/>',
    heart: '<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9Z"/>',
  };
  const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;

  let lang = 'ru';
  try { lang = localStorage.getItem('lf-lang') || 'ru'; } catch (e) {}
  if (!T[lang]) lang = 'ru';

  const t = k => T[lang][k] ?? T.ru[k] ?? k;
  const wa = text => `https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(text || t('wa_hi'))}`;
  const stars = (n = 5) => `<span class="stars" aria-label="${n}/5">${icon('star').repeat(n)}</span>`;

  let renderFn = () => {};

  function apply() {
    document.documentElement.lang = lang === 'ky' ? 'ky' : 'ru';
    document.querySelectorAll('[data-i]').forEach(el => { el.innerHTML = t(el.dataset.i); });
    document.querySelectorAll('[data-ip]').forEach(el => { el.placeholder = t(el.dataset.ip); });
    document.querySelectorAll('[data-ic]').forEach(el => { if (!el.querySelector('svg')) el.insertAdjacentHTML('afterbegin', icon(el.dataset.ic)); });
    document.querySelectorAll('[data-href]').forEach(el => {
      const h = { wa: wa(), tel: 'tel:' + PHONE, gis: GIS, ig: IG }[el.dataset.href];
      if (h) { el.href = h; if (el.dataset.href !== 'tel') { el.target = '_blank'; el.rel = 'noopener'; } }
    });
    document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = PHONE_H; });
    document.querySelectorAll('[data-lang]').forEach(b => {
      b.classList.toggle('on', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', b.dataset.lang === lang);
    });
    renderFn(lang);
    reveal();
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('lf-lang', l); } catch (e) {}
    apply();
  }

  let io;
  function reveal() {
    const els = document.querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(e => e.classList.add('in')); return;
    }
    io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    els.forEach(e => io.observe(e));
  }

  function init(fn) {
    renderFn = fn || renderFn;
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-lang]');
      if (b) setLang(b.dataset.lang);
      const m = e.target.closest('[data-menu]');
      if (m) document.body.classList.toggle('menu-open');
      else if (e.target.closest('.nav-links a')) document.body.classList.remove('menu-open');
    });
    document.addEventListener('submit', e => {
      const f = e.target.closest('[data-wa-form]');
      if (!f) return;
      e.preventDefault();
      const d = new FormData(f);
      const msg = `${t('wa_hi')}\n${t('f_name')}: ${d.get('name') || ''}\n${t('f_phone')}: ${d.get('phone') || ''}${d.get('room') ? `\n${t('f_room')} ${d.get('room')}` : ''}`;
      const url = wa(msg);
      let w = null;
      try { w = window.open(url, '_blank', 'noopener'); } catch (err) {}
      let link = f.querySelector('.wa-go');
      if (!link) { link = document.createElement('a'); link.className = 'btn wa wa-go'; link.target = '_blank'; link.rel = 'noopener'; f.appendChild(link); }
      link.href = url; link.textContent = '→ WhatsApp';
    });
    // when opened inside the switcher, follow its language changes
    window.addEventListener('storage', e => { if (e.key === 'lf-lang' && e.newValue && e.newValue !== lang) { lang = e.newValue; apply(); } });
    apply();
  }

  window.LF = { T, D, img, icon, stars, wa, t, init, setLang, PHONE, PHONE_H, GIS, IG, get lang() { return lang; } };
})();
