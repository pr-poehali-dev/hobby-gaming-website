export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#e8e4dc' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)' }}>
        <span className="font-rajdhani font-bold text-lg tracking-[0.2em] uppercase" style={{ color: '#e8e4dc' }}>РУФИНГ</span>
        <div className="flex gap-8 text-xs tracking-[0.15em] uppercase font-golos" style={{ color: 'rgba(232,228,220,0.45)' }}>
          <span>О нас</span>
          <span>Высота</span>
          <span>Места</span>
          <span>Контакт</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/a43d7dd2-a659-401d-83c7-85eaecf3904c.jpg"
          alt="Руфинг"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.3) 50%, transparent 100%)' }} />

        <div className="relative z-10 px-10 pb-20 max-w-4xl">
          <p className="font-golos text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(232,228,220,0.5)' }}>
            — хобби, которое меняет угол зрения
          </p>
          <h1 className="font-rajdhani font-bold leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: '#e8e4dc', letterSpacing: '-0.01em' }}>
            НАД<br />ГОРОДОМ
          </h1>
          <p className="font-golos leading-relaxed max-w-lg" style={{ fontSize: '1.05rem', color: 'rgba(232,228,220,0.65)' }}>
            Руфинг — это не экстрим ради адреналина. Это способ увидеть привычный город с точки, о существовании которой большинство даже не догадывается.
          </p>
        </div>

        <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2" style={{ color: 'rgba(232,228,220,0.3)' }}>
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, rgba(232,228,220,0.3))' }} />
          <span className="font-golos text-xs tracking-[0.2em] uppercase" style={{ writingMode: 'vertical-rl' }}>Листать</span>
        </div>
      </section>

      {/* What is roofing */}
      <section className="px-10 py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-golos text-xs tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(232,228,220,0.35)' }}>01 — Что такое руфинг</p>
            <h2 className="font-rajdhani font-bold text-5xl mb-8 leading-tight" style={{ color: '#e8e4dc' }}>
              Искусство<br />смотреть вниз
            </h2>
            <p className="font-golos leading-loose mb-6" style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.95rem' }}>
              Руфер — человек, который взбирается на крыши зданий. Не ради того, чтобы прыгнуть. Ради того, чтобы остановиться и посмотреть. На горизонт. На муравьиную жизнь внизу. На себя — со стороны.
            </p>
            <p className="font-golos leading-loose" style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.95rem' }}>
              Это субкультура, которая существует в тишине. Без зрителей, без аплодисментов, без лайков в реальном времени. Только ты, ветер и несколько этажей между тобой и остальным миром.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/2a722c03-af64-472b-930b-5f579ace7e36.jpg"
              alt="Крыша"
              className="w-full rounded-sm object-cover"
              style={{ height: '480px', filter: 'brightness(0.8) saturate(0.85)' }}
            />
            <div className="absolute -bottom-5 -left-5 px-5 py-4 rounded-sm" style={{ backgroundColor: '#111', border: '1px solid rgba(232,228,220,0.08)' }}>
              <span className="font-rajdhani font-bold text-3xl" style={{ color: '#e8e4dc' }}>200+</span>
              <p className="font-golos text-xs mt-0.5" style={{ color: 'rgba(232,228,220,0.4)' }}>крыш за 3 года</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-10 max-w-6xl mx-auto">
        <div style={{ height: '1px', backgroundColor: 'rgba(232,228,220,0.07)' }} />
      </div>

      {/* Philosophy */}
      <section className="px-10 py-28 max-w-6xl mx-auto">
        <p className="font-golos text-xs tracking-[0.25em] uppercase mb-16 text-center" style={{ color: 'rgba(232,228,220,0.35)' }}>02 — Философия</p>

        <div className="grid grid-cols-3 gap-16">
          {[
            {
              num: 'I',
              title: 'Тишина на высоте',
              text: 'На уровне улицы — шум машин, разговоры, спешка. Поднимись выше, и всё это превращается в белый шум. На крыше ты наедине с городом, но уже не его частью.',
            },
            {
              num: 'II',
              title: 'Другой масштаб',
              text: 'Когда смотришь вниз с двадцатого этажа, проблемы, которые казались огромными, становятся маленькими. Буквально. Это не метафора — это оптика.',
            },
            {
              num: 'III',
              title: 'Момент настоящего',
              text: 'Руфинг не терпит рассеянности. Каждый шаг требует внимания. Именно поэтому на крыше невозможно думать о завтра — есть только сейчас.',
            },
          ].map(item => (
            <div key={item.num}>
              <span className="font-rajdhani font-bold text-6xl" style={{ color: 'rgba(232,228,220,0.08)' }}>{item.num}</span>
              <h3 className="font-rajdhani font-bold text-xl mt-2 mb-4" style={{ color: '#e8e4dc' }}>{item.title}</h3>
              <p className="font-golos leading-loose text-sm" style={{ color: 'rgba(232,228,220,0.55)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width quote image */}
      <section className="relative overflow-hidden" style={{ height: '70vh' }}>
        <img
          src="https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/d535435d-cf14-4e1c-bece-c9e17b082d8c.jpg"
          alt="Высота"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) saturate(0.7)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center max-w-2xl px-10">
            <p className="font-rajdhani font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#e8e4dc' }}>
              «Город принадлежит тем,<br />кто умеет на него смотреть»
            </p>
            <cite className="font-golos text-xs tracking-[0.2em] uppercase mt-6 block not-italic" style={{ color: 'rgba(232,228,220,0.4)' }}>— из записей анонимного руфера</cite>
          </blockquote>
        </div>
      </section>

      {/* How to start */}
      <section className="px-10 py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-golos text-xs tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(232,228,220,0.35)' }}>03 — С чего начать</p>
            <h2 className="font-rajdhani font-bold text-5xl mb-8 leading-tight" style={{ color: '#e8e4dc' }}>
              Первые<br />шаги наверх
            </h2>
            <p className="font-golos leading-loose mb-6" style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.95rem' }}>
              Никто не начинает с небоскрёба. Первая крыша — это, скорее всего, пятиэтажная хрущёвка в твоём дворе. И этого достаточно, чтобы почувствовать разницу.
            </p>
            <p className="font-golos leading-loose" style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.95rem' }}>
              Главное правило — уважение к высоте. Не страх, не бравада. Именно уважение. Тот, кто понял это, надолго остаётся в субкультуре. Остальные уходят после первого раза.
            </p>
          </div>

          <div className="space-y-0 pt-14">
            {[
              { step: '01', title: 'Изучи район', text: 'Прежде чем лезть — походи вокруг здания. Посмотри, как устроен вход на крышу, есть ли охрана, в каком состоянии кровля.' },
              { step: '02', title: 'Подбери снаряжение', text: 'Удобная обувь с нескользящей подошвой, тёмная одежда, фонарь. Ничего лишнего. Громоздкий рюкзак на крыше — помеха.' },
              { step: '03', title: 'Не ходи один', text: 'Первые вылазки — всегда с кем-то. Не потому что страшно, а потому что это просто умно.' },
              { step: '04', title: 'Не оставляй следов', text: 'Кодекс руфера прост: не ломать, не мусорить, не привлекать внимания. Крыша должна остаться такой же, какой ты её нашёл.' },
            ].map(item => (
              <div key={item.step} className="flex gap-5 py-6" style={{ borderTop: '1px solid rgba(232,228,220,0.07)' }}>
                <span className="font-rajdhani font-bold text-xs tracking-widest flex-shrink-0 mt-0.5" style={{ color: 'rgba(232,228,220,0.25)' }}>{item.step}</span>
                <div>
                  <h4 className="font-rajdhani font-semibold text-base mb-2" style={{ color: '#e8e4dc' }}>{item.title}</h4>
                  <p className="font-golos text-sm leading-loose" style={{ color: 'rgba(232,228,220,0.5)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-10 max-w-6xl mx-auto">
        <div style={{ height: '1px', backgroundColor: 'rgba(232,228,220,0.07)' }} />
      </div>

      {/* Closing */}
      <section className="px-10 py-28 text-center">
        <p className="font-golos text-xs tracking-[0.25em] uppercase mb-8" style={{ color: 'rgba(232,228,220,0.3)' }}>— финал</p>
        <h2 className="font-rajdhani font-bold leading-none mx-auto mb-10" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#e8e4dc', maxWidth: '800px' }}>
          Город смотрит вверх.<br />Руфер — вниз.
        </h2>
        <p className="font-golos mx-auto leading-loose" style={{ maxWidth: '520px', color: 'rgba(232,228,220,0.5)', fontSize: '0.95rem' }}>
          Это не про нарушение правил. Это про другой угол обзора. В прямом смысле.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 flex items-center justify-between" style={{ borderTop: '1px solid rgba(232,228,220,0.07)' }}>
        <span className="font-rajdhani font-bold text-sm tracking-[0.2em] uppercase" style={{ color: 'rgba(232,228,220,0.3)' }}>РУФИНГ</span>
        <span className="font-golos text-xs" style={{ color: 'rgba(232,228,220,0.2)' }}>— смотри выше</span>
      </footer>

    </div>
  );
}
