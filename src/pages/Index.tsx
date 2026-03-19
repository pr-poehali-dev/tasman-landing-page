import { useState } from "react";
import Icon from "@/components/ui/icon";

type AnyIcon = Parameters<typeof Icon>[0]["name"];

const HERO_IMG = "https://cdn.poehali.dev/projects/bc5f95d1-ec7d-422d-a450-1934c60590bb/files/c3b5cc42-4efe-438c-9bfe-b6091e6131d4.jpg";

const SERVICES = [
  { icon: "Monitor", title: "Диагностика", desc: "Полная компьютерная диагностика любой сложности за 30 минут" },
  { icon: "Cpu", title: "Ремонт ПК и ноутбуков", desc: "Замена комплектующих, восстановление после поломок и ударов" },
  { icon: "Shield", title: "Защита от вирусов", desc: "Удаление вредоносного ПО, установка и настройка антивирусов" },
  { icon: "HardDrive", title: "Восстановление данных", desc: "Восстановление информации с повреждённых носителей" },
  { icon: "Wifi", title: "Настройка сети", desc: "Настройка роутеров, Wi-Fi, корпоративных сетей" },
  { icon: "Settings", title: "Техническое обслуживание", desc: "Чистка, замена термопасты, профилактика оборудования" },
];

const PORTFOLIO = [
  { num: "500+", label: "Отремонтировано устройств" },
  { num: "8 лет", label: "На рынке Москвы" },
  { num: "98%", label: "Довольных клиентов" },
  { num: "24ч", label: "Срок ремонта в среднем" },
];

const REVIEWS = [
  {
    name: "Алексей Миронов",
    role: "Руководитель ООО «Веста»",
    text: "Тасман обслуживает всю технику нашего офиса уже 3 года. Оперативно, качественно, без нареканий. Рекомендую как надёжного партнёра.",
    rating: 5,
  },
  {
    name: "Светлана Петрова",
    role: "Частный клиент",
    text: "Ноутбук залила водой — думала, конец. В Тасмане восстановили за день. Всё работает как новое. Спасибо за профессионализм!",
    rating: 5,
  },
  {
    name: "Дмитрий Орлов",
    role: "Фриланс-дизайнер",
    text: "Быстрая диагностика, честная цена без скрытых доплат. Объяснили что сломалось и почему. Очень доволен результатом.",
    rating: 5,
  },
];

const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const navLinks = [
    { label: "Главная", href: "#hero" },
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-ibm bg-white text-tasman-dark">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-tasman-blue/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-tasman-blue-light rounded flex items-center justify-center">
              <Icon name="Monitor" size={18} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white text-lg tracking-wide">ТАСМАН</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/75 hover:text-white text-sm font-montserrat font-medium transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#booking")}
            className="hidden md:block bg-tasman-blue-light hover:bg-tasman-blue-accent text-white text-sm font-montserrat font-semibold px-5 py-2 rounded transition-colors duration-200"
          >
            Записаться
          </button>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-tasman-blue border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/80 hover:text-white text-left text-sm font-montserrat tracking-wide"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-tasman-blue-light text-white text-sm font-montserrat font-semibold px-5 py-2 rounded w-fit"
            >
              Записаться
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tasman-dark/92 via-tasman-blue/80 to-tasman-blue/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-tasman-blue-light/20 border border-tasman-blue-light/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-tasman-blue-accent rounded-full animate-pulse" />
              <span className="text-tasman-blue-accent text-xs font-montserrat font-semibold tracking-widest uppercase">Профессиональный сервис</span>
            </div>

            <h1 className="font-montserrat font-extrabold text-white text-5xl md:text-6xl leading-tight mb-6">
              Ремонт<br />
              <span className="text-tasman-blue-accent">компьютеров</span><br />
              в Москве
            </h1>

            <p className="text-white/70 text-lg font-ibm font-light leading-relaxed mb-10 max-w-xl">
              Быстрая диагностика, честные цены, гарантия на все виды работ. Работаем с частными лицами и корпоративными клиентами с 2016 года.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#booking")}
                className="bg-tasman-blue-light hover:bg-tasman-blue-accent text-white font-montserrat font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Записаться онлайн
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border border-white/30 hover:border-white/60 text-white font-montserrat font-medium px-8 py-4 rounded transition-all duration-200 backdrop-blur-sm"
              >
                Наши услуги
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15">
              {PORTFOLIO.slice(0, 3).map((s) => (
                <div key={s.num}>
                  <div className="font-montserrat font-extrabold text-tasman-blue-accent text-3xl">{s.num}</div>
                  <div className="text-white/60 text-sm mt-1 font-ibm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-tasman-blue-light font-montserrat font-semibold text-sm tracking-widest uppercase">О компании</span>
              <h2 className="font-montserrat font-extrabold text-tasman-blue text-4xl mt-3 mb-6 leading-tight">
                Тасман — надёжный партнёр для вашей техники
              </h2>
              <p className="text-tasman-gray font-ibm text-base leading-relaxed mb-5">
                С 2016 года мы помогаем частным клиентам и бизнесу в Москве. Наши специалисты — сертифицированные инженеры с опытом работы от 5 лет.
              </p>
              <p className="text-tasman-gray font-ibm text-base leading-relaxed mb-8">
                Мы работаем с любыми брендами ноутбуков и ПК: Apple, Dell, HP, Lenovo, ASUS, Acer и другими. Официальная гарантия на все виды работ.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "BadgeCheck", text: "Гарантия 12 месяцев" },
                  { icon: "Clock", text: "Ремонт за 1 день" },
                  { icon: "MapPin", text: "Выезд на дом и в офис" },
                  { icon: "CreditCard", text: "Оплата после ремонта" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 bg-tasman-gray-bg rounded-lg">
                    <div className="w-8 h-8 bg-tasman-blue-light/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={item.icon as AnyIcon} size={16} className="text-tasman-blue-light" />
                    </div>
                    <span className="text-tasman-gray font-ibm text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-tasman-blue/8 rounded-2xl" />
              <div className="relative bg-gradient-to-br from-tasman-blue to-tasman-blue-mid rounded-2xl p-10 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {PORTFOLIO.map((s) => (
                    <div key={s.num} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="font-montserrat font-extrabold text-tasman-blue-accent text-3xl">{s.num}</div>
                      <div className="text-white/75 text-xs mt-2 font-ibm leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-5 bg-white/10 rounded-xl">
                  <p className="text-white/90 font-ibm text-sm leading-relaxed italic">
                    "Наша цель — не просто починить технику, а дать вам уверенность в её надёжности на годы вперёд."
                  </p>
                  <div className="mt-3 font-montserrat font-semibold text-tasman-blue-accent text-sm">— Команда Тасман</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-tasman-gray-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-tasman-blue-light font-montserrat font-semibold text-sm tracking-widest uppercase">Что мы делаем</span>
            <h2 className="font-montserrat font-extrabold text-tasman-blue text-4xl mt-3">Наши услуги</h2>
            <p className="text-tasman-gray-light mt-4 max-w-xl mx-auto font-ibm">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:border-tasman-blue-light/30 hover:shadow-lg hover:shadow-tasman-blue/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-tasman-blue/8 group-hover:bg-tasman-blue-light/15 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon name={s.icon as AnyIcon} size={22} className="text-tasman-blue group-hover:text-tasman-blue-light transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-tasman-blue text-lg mb-3">{s.title}</h3>
                <p className="text-tasman-gray font-ibm text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-tasman-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tasman-blue-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-tasman-blue-accent font-montserrat font-semibold text-sm tracking-widest uppercase">Наши результаты</span>
            <h2 className="font-montserrat font-extrabold text-white text-4xl mt-3">Портфолио и достижения</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {PORTFOLIO.map((s) => (
              <div key={s.num} className="text-center p-8 bg-white/8 border border-white/12 rounded-xl backdrop-blur-sm">
                <div className="font-montserrat font-extrabold text-tasman-blue-accent text-4xl">{s.num}</div>
                <div className="text-white/70 text-sm mt-3 font-ibm">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Building2", title: "Корпоративные клиенты", desc: "Обслуживаем офисы от 5 до 200 рабочих мест. Договор SLA, выделенный менеджер." },
              { icon: "Home", title: "Частные клиенты", desc: "Выезд на дом в удобное время. Ремонт любой сложности без очередей." },
              { icon: "Zap", title: "Срочный ремонт", desc: "Экспресс-ремонт за 2–4 часа для критически важных ситуаций." },
            ].map((c) => (
              <div key={c.title} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Icon name={c.icon as AnyIcon} size={28} className="text-tasman-blue-accent mb-4" />
                <h3 className="font-montserrat font-bold text-white text-lg mb-2">{c.title}</h3>
                <p className="text-white/65 font-ibm text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-tasman-blue-light font-montserrat font-semibold text-sm tracking-widest uppercase">Отзывы</span>
            <h2 className="font-montserrat font-extrabold text-tasman-blue text-4xl mt-3">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-tasman-gray-bg rounded-xl p-8 border border-gray-100 relative">
                <div className="absolute top-6 right-8 text-tasman-blue-light/20 font-montserrat font-extrabold text-7xl leading-none select-none">"</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-tasman-gray font-ibm text-sm leading-relaxed mb-6 relative z-10">{r.text}</p>
                <div>
                  <div className="font-montserrat font-bold text-tasman-blue text-sm">{r.name}</div>
                  <div className="text-tasman-gray-light font-ibm text-xs mt-1">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-tasman-gray-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-tasman-blue-light font-montserrat font-semibold text-sm tracking-widest uppercase">Онлайн-запись</span>
            <h2 className="font-montserrat font-extrabold text-tasman-blue text-4xl mt-3">Запись на услугу</h2>
            <p className="text-tasman-gray-light font-ibm mt-4">Выберите удобное время — мы подтвердим запись в течение 15 минут</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle2" size={32} className="text-green-500" />
              </div>
              <h3 className="font-montserrat font-bold text-tasman-blue text-2xl mb-3">Заявка принята!</h3>
              <p className="text-tasman-gray font-ibm">Мы свяжемся с вами в течение 15 минут для подтверждения записи.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-tasman-blue-light font-montserrat font-semibold text-sm underline underline-offset-4 hover:text-tasman-blue transition-colors"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat font-semibold text-tasman-blue text-sm mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    placeholder="Иван Петров"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-ibm text-sm text-tasman-dark placeholder-tasman-gray-light focus:outline-none focus:border-tasman-blue-light focus:ring-1 focus:ring-tasman-blue-light/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-tasman-blue text-sm mb-2">Телефон *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-ibm text-sm text-tasman-dark placeholder-tasman-gray-light focus:outline-none focus:border-tasman-blue-light focus:ring-1 focus:ring-tasman-blue-light/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-tasman-blue text-sm mb-2">Услуга *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-ibm text-sm text-tasman-dark focus:outline-none focus:border-tasman-blue-light focus:ring-1 focus:ring-tasman-blue-light/30 transition-colors bg-white"
                  >
                    <option value="">Выберите услугу</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-tasman-blue text-sm mb-2">Дата *</label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-ibm text-sm text-tasman-dark focus:outline-none focus:border-tasman-blue-light focus:ring-1 focus:ring-tasman-blue-light/30 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-montserrat font-semibold text-tasman-blue text-sm mb-3">Удобное время</label>
                  <div className="flex flex-wrap gap-2">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className={`px-4 py-2 rounded-lg text-sm font-ibm border transition-all duration-150 ${
                          form.time === t
                            ? "bg-tasman-blue-light text-white border-tasman-blue-light"
                            : "bg-white text-tasman-gray border-gray-200 hover:border-tasman-blue-light/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block font-montserrat font-semibold text-tasman-blue text-sm mb-2">Комментарий</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите проблему или пожелания..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-ibm text-sm text-tasman-dark placeholder-tasman-gray-light focus:outline-none focus:border-tasman-blue-light focus:ring-1 focus:ring-tasman-blue-light/30 transition-colors resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-tasman-blue hover:bg-tasman-blue-mid text-white font-montserrat font-bold py-4 rounded-lg text-base transition-all duration-200 hover:shadow-lg hover:shadow-tasman-blue/20 hover:-translate-y-0.5"
              >
                Отправить заявку
              </button>
              <p className="text-center text-tasman-gray-light font-ibm text-xs mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-tasman-blue-light font-montserrat font-semibold text-sm tracking-widest uppercase">Контакты</span>
            <h2 className="font-montserrat font-extrabold text-tasman-blue text-4xl mt-3">Свяжитесь с нами</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 000-00-00", "+7 (800) 000-00-00"], sub: "Пн–Сб, 09:00–20:00" },
              { icon: "MapPin", title: "Адрес", lines: ["г. Москва,", "ул. Примерная, д. 1"], sub: "Рядом с метро" },
              { icon: "Mail", title: "Email", lines: ["info@tasman.ru"], sub: "Ответим в течение часа" },
            ].map((c) => (
              <div key={c.title} className="text-center p-8 bg-tasman-gray-bg rounded-xl border border-gray-100">
                <div className="w-14 h-14 bg-tasman-blue/8 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon name={c.icon as AnyIcon} size={24} className="text-tasman-blue" />
                </div>
                <h3 className="font-montserrat font-bold text-tasman-blue text-lg mb-3">{c.title}</h3>
                {c.lines.map((l, i) => (
                  <div key={i} className="font-ibm text-tasman-gray text-base">{l}</div>
                ))}
                <div className="text-tasman-gray-light font-ibm text-xs mt-2">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-tasman-dark py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-tasman-blue-light rounded flex items-center justify-center">
              <Icon name="Monitor" size={15} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white text-base tracking-wide">ТАСМАН</span>
          </div>
          <p className="text-white/40 font-ibm text-sm">© 2024 Тасман. Все права защищены.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-white/40 hover:text-white/70 text-xs font-ibm transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}