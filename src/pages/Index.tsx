export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#e8e4dc' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)' }}>
        <span className="font-rajdhani font-bold text-lg tracking-[0.2em] uppercase" style={{ color: '#e8e4dc' }}>СТОП РУФИНГ</span>
        <div className="flex gap-8 text-xs tracking-[0.15em] uppercase font-golos" style={{ color: 'rgba(232,228,220,0.45)' }}>
          <span>Факты</span>
          <span>Статистика</span>
          <span>Истории</span>
          <span>Закон</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/53802104-0aa6-45df-8504-aa4fc7732a2b.jpg"
          alt="Опасность"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) saturate(0.6)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.4) 50%, transparent 100%)' }} />

        {/* Red accent line */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#c0392b' }} />

        <div className="relative z-10 px-10 pb-20 max-w-4xl">
          <p className="font-golos text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(220,80,60,0.9)' }}>
            — это не романтика. это смерть.
          </p>
          <h1 className="font-rajdhani font-bold leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: '#e8e4dc', letterSpacing: '-0.01em' }}>
            ПАДЕНИЕ<br />НЕ КРАСИВО.
          </h1>
          <p className="font-golos leading-relaxed max-w-lg" style={{ fontSize: '1.05rem', color: 'rgba(232,228,220,0.65)' }}>
            Каждый год десятки молодых людей гибнут или остаются инвалидами из-за руфинга. Это не субкультура. Это рулетка, в которой проигрывают все.
          </p>
        </div>

        <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, rgba(192,57,43,0.6))' }} />
          <span className="font-golos text-xs tracking-[0.2em] uppercase" style={{ writingMode: 'vertical-rl', color: 'rgba(192,57,43,0.6)' }}>Читать</span>
        </div>
      </section>

      {/* Stats */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {[
            { num: '73%', label: 'падений с крыш заканчиваются летальным исходом или тяжёлой инвалидностью' },
            { num: '18', label: 'лет — средний возраст погибшего руфера по данным экстренных служб' },
            { num: '0', label: 'страховых выплат — ни одна страховка не покрывает смерть при незаконном проникновении' },
          ].map(s => (
            <div key={s.num} className="p-8 rounded-sm" style={{ backgroundColor: '#111', border: '1px solid rgba(192,57,43,0.2)' }}>
              <span className="font-rajdhani font-bold block mb-3" style={{ fontSize: '3.5rem', color: '#c0392b', lineHeight: 1 }}>{s.num}</span>
              <p className="font-golos text-sm leading-loose" style={{ color: 'rgba(232,228,220,0.55)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-10 max-w-6xl mx-auto">
        <div style={{ height: '1px', backgroundColor: 'rgba(232,228,220,0.07)' }} />
      </div>

      {/* Why dangerous */}
      <section className="px-10 py-28 max-w-6xl mx-auto">
        <p className="font-golos text-xs tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(192,57,43,0.8)' }}>01 — Почему это опасно</p>
        <h2 className="font-rajdhani font-bold text-5xl mb-16 leading-tight" style={{ color: '#e8e4dc' }}>
          Мифы против<br />реальности
        </h2>

        <div className="space-y-0">
          {[
            {
              myth: 'Миф: "Я буду аккуратен — всё будет хорошо"',
              reality: 'Большинство несчастных случаев происходит не из-за бравады, а из-за непредвиденных факторов: скользкая кровля после дождя, ненадёжный парапет, внезапное головокружение. Аккуратность не отменяет физику.',
            },
            {
              myth: 'Миф: "Я уже много раз залезал — значит, умею"',
              reality: 'Каждый подъём — это новая крыша, новые условия, новый уровень усталости. Опытность создаёт ложное чувство контроля. Именно опытные руферы чаще рискуют сильнее — и именно они чаще погибают.',
            },
            {
              myth: 'Миф: "Это моя жизнь, моё право рисковать"',
              reality: 'Твоё падение — это не только твоя история. Это родители, которые опознают тело. Друг, который был рядом и не смог удержать. Прохожий внизу, которому упавший человек изменил жизнь навсегда.',
            },
            {
              myth: 'Миф: "Руфинг — это свобода и философия"',
              reality: 'Романтизация опасности — мощный инструмент вовлечения. Субкультура продаёт эстетику, умалчивая о статистике. За каждым красивым фото из инстаграма стоят десятки историй, которые не попали в ленту.',
            },
          ].map(item => (
            <div key={item.myth} className="grid grid-cols-2 gap-12 py-8" style={{ borderTop: '1px solid rgba(232,228,220,0.07)' }}>
              <div>
                <p className="font-golos text-sm leading-loose" style={{ color: 'rgba(232,228,220,0.35)', fontStyle: 'italic' }}>{item.myth}</p>
              </div>
              <div>
                <p className="font-golos text-sm leading-loose" style={{ color: 'rgba(232,228,220,0.65)' }}>{item.reality}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="px-10 py-20" style={{ backgroundColor: '#0f0a0a' }}>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="font-rajdhani font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#e8e4dc' }}>
              «Он говорил, что это его медитация. Что там, на высоте, он чувствовал себя живым. Теперь его нет.»
            </p>
            <cite className="font-golos text-xs tracking-[0.2em] uppercase not-italic" style={{ color: 'rgba(192,57,43,0.7)' }}>
              — мать 19-летнего руфера, Екатеринбург, 2023
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Legal */}
      <section className="px-10 py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-golos text-xs tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(192,57,43,0.8)' }}>02 — Закон</p>
            <h2 className="font-rajdhani font-bold text-5xl mb-8 leading-tight" style={{ color: '#e8e4dc' }}>
              Это не просто<br />опасно. Это незаконно.
            </h2>
            <p className="font-golos leading-loose mb-6" style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.95rem' }}>
              Проникновение на крышу жилого или коммерческого здания без разрешения — это уголовная статья. Статья 139 УК РФ (нарушение неприкосновенности жилища) и статья 158 (незаконное проникновение) предусматривают штраф или лишение свободы.
            </p>
            <p className="font-golos leading-loose" style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.95rem' }}>
              Если ты упадёшь и тебя найдут — уголовное дело возбудят даже посмертно. Родители могут получить счёт за работу экстренных служб. Это не страшилки — это практика российских судов.
            </p>
          </div>

          <div className="space-y-0 pt-14">
            {[
              { art: 'Ст. 139 УК РФ', title: 'Незаконное проникновение', text: 'Нарушение неприкосновенности чужой собственности. Штраф до 200 000 руб. или лишение свободы до 3 лет.' },
              { art: 'Ст. 20.1 КоАП', title: 'Мелкое хулиганство', text: 'Административная ответственность при задержании на месте. Протокол, штраф, постановка на учёт.' },
              { art: 'Ст. 1064 ГК РФ', title: 'Возмещение ущерба', text: 'Если твои действия причинили ущерб зданию или третьим лицам — ты обязан возместить его в полном объёме.' },
            ].map(item => (
              <div key={item.art} className="flex gap-5 py-6" style={{ borderTop: '1px solid rgba(232,228,220,0.07)' }}>
                <span className="font-rajdhani font-bold text-xs tracking-widest flex-shrink-0 mt-0.5 w-20" style={{ color: 'rgba(192,57,43,0.6)' }}>{item.art}</span>
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

      {/* What instead */}
      <section className="px-10 py-28 max-w-6xl mx-auto">
        <p className="font-golos text-xs tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(232,228,220,0.35)' }}>03 — Альтернатива</p>
        <h2 className="font-rajdhani font-bold text-5xl mb-12 leading-tight" style={{ color: '#e8e4dc' }}>
          Высота без риска
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: 'Смотровые площадки', text: 'В каждом крупном городе есть официальные точки обзора. Та же высота, то же ощущение — без риска уголовного дела и без риска для жизни.' },
            { title: 'Скалолазание', text: 'Настоящий адреналин, настоящая высота, физическая нагрузка и сообщество людей, которые понимают, что такое высота. Плюс — страховка.' },
            { title: 'Городская фотография', text: 'Большинство руферов идут за кадром. Тот же результат можно получить с дрона, с официальной смотровой или с разрешения управляющей компании.' },
          ].map(item => (
            <div key={item.title} className="p-7 rounded-sm" style={{ backgroundColor: '#111', border: '1px solid rgba(232,228,220,0.07)' }}>
              <h3 className="font-rajdhani font-bold text-xl mb-4" style={{ color: '#e8e4dc' }}>{item.title}</h3>
              <p className="font-golos text-sm leading-loose" style={{ color: 'rgba(232,228,220,0.5)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="px-10 py-28 text-center" style={{ backgroundColor: '#0f0a0a' }}>
        <p className="font-golos text-xs tracking-[0.25em] uppercase mb-8" style={{ color: 'rgba(192,57,43,0.6)' }}>— итог</p>
        <h2 className="font-rajdhani font-bold leading-none mx-auto mb-10" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#e8e4dc', maxWidth: '800px' }}>
          Ни одна крыша<br />не стоит жизни.
        </h2>
        <p className="font-golos mx-auto leading-loose" style={{ maxWidth: '520px', color: 'rgba(232,228,220,0.5)', fontSize: '0.95rem' }}>
          Если ты знаешь кого-то, кто увлекается руфингом — поговори с ним. Не осуждай. Просто поговори.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 flex items-center justify-between" style={{ borderTop: '1px solid rgba(192,57,43,0.15)' }}>
        <span className="font-rajdhani font-bold text-sm tracking-[0.2em] uppercase" style={{ color: 'rgba(232,228,220,0.3)' }}>СТОП РУФИНГ</span>
        <span className="font-golos text-xs" style={{ color: 'rgba(192,57,43,0.4)' }}>— оставайся на земле</span>
      </footer>

    </div>
  );
}
