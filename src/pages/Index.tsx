import { useState } from 'react';
import Icon from '@/components/ui/icon';

const EPISODES = [
  {
    id: 1,
    title: "Начало Конца",
    number: "01",
    season: "Сезон I",
    description: "Мир рухнул за одну ночь. Главный герой просыпается в руинах города и осознаёт, что он последний, кто помнит, как всё было раньше.",
    duration: "48 мин",
    status: "completed",
    rating: 9.4,
    players: 12840,
    genre: "Выживание",
    image: "https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/9fb11695-b305-403c-99cc-3b163c630d3d.jpg",
  },
  {
    id: 2,
    title: "Мёртвые Огни",
    number: "02",
    season: "Сезон I",
    description: "По ту сторону стены скрывается нечто. Группа выживших решается на вылазку — и находит то, о чём лучше было не знать.",
    duration: "52 мин",
    status: "completed",
    rating: 9.1,
    players: 11200,
    genre: "Хоррор",
    image: "https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/9fb11695-b305-403c-99cc-3b163c630d3d.jpg",
  },
  {
    id: 3,
    title: "Точка Возврата",
    number: "03",
    season: "Сезон I",
    description: "Единственный шанс спасти всех — предать одного. Но кто решает, чья жизнь важнее?",
    duration: "61 мин",
    status: "in_progress",
    rating: 9.7,
    players: 8300,
    genre: "Драма",
    image: "https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/9fb11695-b305-403c-99cc-3b163c630d3d.jpg",
  },
  {
    id: 4,
    title: "Нулевой Уровень",
    number: "04",
    season: "Сезон I",
    description: "Когда система сбоит, правила меняются. Тот, кто знает код, становится богом.",
    duration: "44 мин",
    status: "locked",
    rating: null,
    players: null,
    genre: "Киберпанк",
    image: "https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/9fb11695-b305-403c-99cc-3b163c630d3d.jpg",
  },
  {
    id: 5,
    title: "Последний Сигнал",
    number: "05",
    season: "Сезон I",
    description: "Сигнал пришёл из ниоткуда. Никто не знает, что за ним стоит — но все хотят первыми добраться до источника.",
    duration: "55 мин",
    status: "locked",
    rating: null,
    players: null,
    genre: "Мистика",
    image: "https://cdn.poehali.dev/projects/06b5ee7f-ebea-4737-8b0e-935a76cb0d1b/files/9fb11695-b305-403c-99cc-3b163c630d3d.jpg",
  },
];

const USERS = [
  {
    id: 1,
    name: "Кратос_Ω",
    handle: "@kratos_omega",
    level: 87,
    xp: 43200,
    xpNext: 50000,
    avatar: "K",
    color: "#00f5a0",
    episodes_done: 3,
    achievements: 24,
    hours: 312,
    collection: ["01", "02", "03"],
    badge: "Легенда",
  },
  {
    id: 2,
    name: "ShadowFox",
    handle: "@shadowfox",
    level: 62,
    xp: 28100,
    xpNext: 32000,
    avatar: "S",
    color: "#00d4ff",
    episodes_done: 2,
    achievements: 15,
    hours: 198,
    collection: ["01", "02"],
    badge: "Ветеран",
  },
  {
    id: 3,
    name: "Нова_∞",
    handle: "@nova_inf",
    level: 45,
    xp: 14600,
    xpNext: 18000,
    avatar: "N",
    color: "#ff6b6b",
    episodes_done: 1,
    achievements: 8,
    hours: 87,
    collection: ["01"],
    badge: "Новичок",
  },
];

const STATUS_CONFIG = {
  completed: { label: "Пройдено", color: "text-neon", bg: "bg-neon/10", dot: "bg-neon" },
  in_progress: { label: "В процессе", color: "text-yellow-400", bg: "bg-yellow-400/10", dot: "bg-yellow-400" },
  locked: { label: "Заблокировано", color: "text-muted-foreground", bg: "bg-white/5", dot: "bg-white/20" },
};

export default function Index() {
  const [activeTab, setActiveTab] = useState<'episodes' | 'profiles'>('episodes');
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const activeEpisode = EPISODES.find(e => e.id === selectedEpisode);
  const activeUser = USERS.find(u => u.id === selectedUser);

  return (
    <div className="min-h-screen grid-lines" style={{ backgroundColor: 'var(--surface)' }}>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl" style={{ backgroundColor: 'rgba(13,17,23,0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center animate-pulse-neon" style={{ background: 'linear-gradient(135deg, #00f5a0, #00d4ff)' }}>
              <span className="font-rajdhani font-bold text-sm" style={{ color: '#0d1117' }}>NX</span>
            </div>
            <span className="font-rajdhani font-bold text-xl tracking-widest text-white">NEXUS</span>
            <span className="tag-gamer text-muted-foreground border border-white/10 px-2 py-0.5 rounded">BETA</span>
          </div>

          <nav className="flex items-center gap-1 rounded-lg p-1 border border-white/6" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
            {[
              { key: 'episodes', label: 'Эпизоды', icon: 'Play' },
              { key: 'profiles', label: 'Игроки', icon: 'Users' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key as 'episodes' | 'profiles');
                  setSelectedEpisode(null);
                  setSelectedUser(null);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-golos font-medium transition-all duration-200 ${
                  activeTab === tab.key ? 'font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
                style={activeTab === tab.key ? { backgroundColor: 'var(--neon)', color: '#0d1117' } : {}}
              >
                <Icon name={tab.icon} size={15} />
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-rajdhani font-bold text-sm" style={{ background: 'linear-gradient(135deg, #00f5a0, #00d4ff)', color: '#0d1117' }}>
              К
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* === EPISODES LIST === */}
        {activeTab === 'episodes' && !selectedEpisode && (
          <div className="animate-fade-in">
            <div className="mb-10">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="tag-gamer neon-text">Сезон I</span>
                <span className="text-muted-foreground text-xs">5 эпизодов</span>
              </div>
              <h1 className="font-rajdhani font-bold text-5xl text-white mb-3 leading-none">ЭПИЗОДЫ</h1>
              <p className="text-muted-foreground font-golos max-w-lg">
                Проходи эпизоды в своём темпе. Каждый выбор меняет историю.
              </p>
            </div>

            {/* Progress */}
            <div className="mb-10 surface-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-rajdhani font-semibold text-sm text-white tracking-wide">ОБЩИЙ ПРОГРЕСС</span>
                <span className="neon-text font-rajdhani font-bold text-lg">60%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <div className="progress-bar h-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex gap-6 mt-4">
                {[
                  { label: 'Пройдено', value: '2', color: 'neon-text' },
                  { label: 'В процессе', value: '1', color: 'text-yellow-400' },
                  { label: 'Заблокировано', value: '2', color: 'text-muted-foreground' },
                ].map(s => (
                  <div key={s.label}>
                    <span className={`font-rajdhani font-bold text-xl ${s.color}`}>{s.value}</span>
                    <span className="text-muted-foreground text-xs ml-1.5 font-golos">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-3">
              {EPISODES.map((ep, i) => {
                const st = STATUS_CONFIG[ep.status as keyof typeof STATUS_CONFIG];
                const isLocked = ep.status === 'locked';
                return (
                  <div
                    key={ep.id}
                    onClick={() => !isLocked && setSelectedEpisode(ep.id)}
                    className={`surface-card rounded-xl overflow-hidden card-hover animate-fade-in ${isLocked ? 'opacity-50' : 'cursor-pointer'}`}
                    style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <div className="flex">
                      <div className="relative w-40 h-28 flex-shrink-0 overflow-hidden">
                        <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 60%, var(--surface-2))' }}></div>
                        {isLocked && (
                          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(13,17,23,0.7)' }}>
                            <Icon name="Lock" size={20} className="text-muted-foreground" />
                          </div>
                        )}
                        {ep.status === 'completed' && (
                          <div className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--neon)' }}>
                            <Icon name="Check" size={12} className="text-black" />
                          </div>
                        )}
                        {ep.status === 'in_progress' && (
                          <div className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center bg-yellow-400">
                            <Icon name="Play" size={10} className="text-black" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 p-5 flex items-center gap-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="tag-gamer text-muted-foreground">{ep.season} · {ep.number}</span>
                            <span className="tag-gamer px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}>{ep.genre}</span>
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-white">{ep.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1 font-golos" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{ep.description}</p>
                        </div>

                        <div className="flex items-center gap-5 flex-shrink-0">
                          {ep.rating && (
                            <div className="text-center">
                              <div className="neon-text font-rajdhani font-bold text-xl">{ep.rating}</div>
                              <div className="text-muted-foreground text-xs">оценка</div>
                            </div>
                          )}
                          {ep.players && (
                            <div className="text-center">
                              <div className="text-white font-rajdhani font-bold text-xl">{(ep.players / 1000).toFixed(1)}k</div>
                              <div className="text-muted-foreground text-xs">игроков</div>
                            </div>
                          )}
                          <div className="text-center">
                            <div className="text-white font-rajdhani font-semibold text-base">{ep.duration}</div>
                            <div className="text-muted-foreground text-xs">время</div>
                          </div>
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${st.bg}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`}></span>
                            <span className={`tag-gamer ${st.color}`}>{st.label}</span>
                          </div>
                          {!isLocked && <Icon name="ChevronRight" size={18} className="text-muted-foreground" />}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* === EPISODE DETAIL === */}
        {activeTab === 'episodes' && selectedEpisode && activeEpisode && (
          <div className="animate-scale-in">
            <button onClick={() => setSelectedEpisode(null)} className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 font-golos text-sm">
              <Icon name="ArrowLeft" size={16} />
              Назад к эпизодам
            </button>

            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
                  <img src={activeEpisode.image} alt={activeEpisode.title} className="w-full h-full object-cover" />
                </div>
                <button className="w-full py-3 rounded-xl font-rajdhani font-bold text-base tracking-wide transition-all hover:opacity-90 mb-2" style={{ backgroundColor: 'var(--neon)', color: '#0d1117' }}>
                  {activeEpisode.status === 'completed' ? 'Пройти снова' : 'Начать'}
                </button>
                <button className="w-full py-3 rounded-xl font-rajdhani font-semibold text-sm tracking-wide border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 transition-all">
                  Добавить в коллекцию
                </button>
              </div>

              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag-gamer neon-text">{activeEpisode.season}</span>
                  <span className="tag-gamer text-muted-foreground">· Эпизод {activeEpisode.number}</span>
                </div>
                <h1 className="font-rajdhani font-bold text-4xl text-white mb-4">{activeEpisode.title}</h1>
                <p className="text-muted-foreground font-golos leading-relaxed mb-8">{activeEpisode.description}</p>

                <div className="grid grid-cols-4 gap-3 mb-8">
                  {[
                    { label: 'Рейтинг', value: activeEpisode.rating ? String(activeEpisode.rating) : '—', icon: 'Star', color: 'neon-text' },
                    { label: 'Игроков', value: activeEpisode.players ? `${(activeEpisode.players / 1000).toFixed(1)}k` : '—', icon: 'Users', color: 'text-white' },
                    { label: 'Время', value: activeEpisode.duration, icon: 'Clock', color: 'text-white' },
                    { label: 'Жанр', value: activeEpisode.genre, icon: 'Tag', color: 'text-[#00d4ff]' },
                  ].map(stat => (
                    <div key={stat.label} className="stat-card rounded-xl p-4">
                      <Icon name={stat.icon} size={16} className={`${stat.color} mb-2`} />
                      <div className={`font-rajdhani font-bold text-xl ${stat.color}`}>{stat.value}</div>
                      <div className="text-muted-foreground text-xs font-golos">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="surface-card rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-rajdhani font-semibold text-sm text-white tracking-wide">КТО ПРОШЁЛ</span>
                    <span className="text-muted-foreground text-xs">{USERS.filter(u => u.collection.includes(activeEpisode.number)).length} игрока</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {USERS.filter(u => u.collection.includes(activeEpisode.number)).map(u => (
                      <div key={u.id} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center font-rajdhani font-bold text-xs" style={{ backgroundColor: u.color, color: '#0d1117' }}>{u.avatar}</div>
                        <span className="text-sm font-golos text-white">{u.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === PROFILES LIST === */}
        {activeTab === 'profiles' && !selectedUser && (
          <div className="animate-fade-in">
            <div className="mb-10">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="tag-gamer neon-text">Сообщество</span>
                <span className="text-muted-foreground text-xs">{USERS.length} игрока</span>
              </div>
              <h1 className="font-rajdhani font-bold text-5xl text-white mb-3 leading-none">ИГРОКИ</h1>
              <p className="text-muted-foreground font-golos max-w-lg">
                Коллекции, достижения и прогресс игроков платформы.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {USERS.map((user, i) => {
                const pct = Math.round((user.xp / user.xpNext) * 100);
                return (
                  <div
                    key={user.id}
                    onClick={() => setSelectedUser(user.id)}
                    className="surface-card rounded-xl p-6 cursor-pointer card-hover animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center font-rajdhani font-bold text-xl avatar-ring" style={{ backgroundColor: user.color, color: '#0d1117' }}>
                          {user.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded text-center font-rajdhani font-bold text-xs flex items-center justify-center" style={{ backgroundColor: 'var(--surface-3)', border: '1px solid rgba(255,255,255,0.1)', color: user.color }}>
                          {user.level}
                        </div>
                      </div>
                      <span className="tag-gamer px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0,245,160,0.08)', color: 'var(--neon)' }}>{user.badge}</span>
                    </div>

                    <h3 className="font-rajdhani font-bold text-lg text-white">{user.name}</h3>
                    <p className="text-muted-foreground text-xs font-golos mb-4">{user.handle}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-golos text-muted-foreground">Уровень {user.level}</span>
                        <span className="font-rajdhani" style={{ color: user.color }}>{pct}%</span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: user.color }}></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {[
                        { label: 'Эпизодов', value: user.episodes_done },
                        { label: 'Наград', value: user.achievements },
                        { label: 'Часов', value: user.hours },
                      ].map(s => (
                        <div key={s.label} className="text-center py-2 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                          <div className="font-rajdhani font-bold text-lg text-white">{s.value}</div>
                          <div className="text-muted-foreground text-xs font-golos">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <span className="tag-gamer text-muted-foreground block mb-2">Коллекция</span>
                      <div className="flex gap-2 flex-wrap">
                        {user.collection.map(ep => (
                          <span key={ep} className="tag-gamer px-2 py-1 rounded neon-text" style={{ backgroundColor: 'rgba(0,245,160,0.08)', border: '1px solid rgba(0,245,160,0.15)' }}>
                            {ep}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* === USER DETAIL === */}
        {activeTab === 'profiles' && selectedUser && activeUser && (
          <div className="animate-scale-in">
            <button onClick={() => setSelectedUser(null)} className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 font-golos text-sm">
              <Icon name="ArrowLeft" size={16} />
              Назад к игрокам
            </button>

            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="surface-card rounded-xl p-6 text-center mb-4">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center font-rajdhani font-bold text-3xl avatar-ring" style={{ backgroundColor: activeUser.color, color: '#0d1117' }}>
                    {activeUser.avatar}
                  </div>
                  <h2 className="font-rajdhani font-bold text-2xl text-white">{activeUser.name}</h2>
                  <p className="text-muted-foreground text-sm font-golos mb-3">{activeUser.handle}</p>
                  <span className="tag-gamer px-3 py-1.5 rounded-full inline-block" style={{ backgroundColor: 'rgba(0,245,160,0.08)', color: 'var(--neon)', border: '1px solid rgba(0,245,160,0.2)' }}>
                    {activeUser.badge}
                  </span>

                  <div className="mt-6">
                    <div className="flex justify-between text-xs mb-2 font-golos">
                      <span className="text-muted-foreground">Уровень {activeUser.level}</span>
                      <span style={{ color: activeUser.color }}>{activeUser.xp.toLocaleString()} XP</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-full rounded-full" style={{ width: `${Math.round((activeUser.xp / activeUser.xpNext) * 100)}%`, backgroundColor: activeUser.color }}></div>
                    </div>
                    <p className="text-muted-foreground text-xs mt-1.5 font-golos">до ур. {activeUser.level + 1}: {(activeUser.xpNext - activeUser.xp).toLocaleString()} XP</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    { label: 'Эпизодов пройдено', value: activeUser.episodes_done, icon: 'Play' },
                    { label: 'Достижений', value: activeUser.achievements, icon: 'Trophy' },
                    { label: 'Часов в игре', value: activeUser.hours, icon: 'Clock' },
                  ].map(s => (
                    <div key={s.label} className="stat-card rounded-xl p-4 flex items-center gap-3">
                      <Icon name={s.icon} size={16} className="neon-text flex-shrink-0" />
                      <div>
                        <div className="font-rajdhani font-bold text-xl text-white">{s.value}</div>
                        <div className="text-muted-foreground text-xs font-golos">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <div className="mb-6">
                  <h3 className="font-rajdhani font-bold text-2xl text-white mb-1">Коллекция эпизодов</h3>
                  <p className="text-muted-foreground text-sm font-golos">{activeUser.collection.length} из {EPISODES.length} эпизодов пройдено</p>
                </div>

                <div className="space-y-3">
                  {EPISODES.map(ep => {
                    const hasIt = activeUser.collection.includes(ep.number);
                    return (
                      <div key={ep.id} className={`rounded-xl p-4 flex items-center gap-4 transition-all ${hasIt ? 'surface-card' : ''}`} style={!hasIt ? { backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' } : {}}>
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={ep.image} alt={ep.title} className={`w-full h-full object-cover ${!hasIt ? 'grayscale opacity-25' : ''}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="tag-gamer text-muted-foreground">{ep.number}</span>
                            <h4 className={`font-rajdhani font-semibold text-base ${hasIt ? 'text-white' : 'text-muted-foreground'}`}>{ep.title}</h4>
                          </div>
                          <p className="text-muted-foreground text-xs font-golos truncate">{ep.genre} · {ep.duration}</p>
                        </div>
                        <div>
                          {hasIt ? (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(0,245,160,0.1)' }}>
                              <Icon name="Check" size={12} className="neon-text" />
                              <span className="tag-gamer neon-text">В коллекции</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                              <Icon name="Lock" size={12} className="text-muted-foreground" />
                              <span className="tag-gamer text-muted-foreground">Не пройдено</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
