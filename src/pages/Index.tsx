import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'

export default function Index() {
  const leaderboard = [
    { id: 1, name: 'Алексей Громов', points: 2450, avatar: '🎮', progress: 85, rank: '1', currencies: { cranes: 120, ozzies: 85, kudels: 45 } },
    { id: 2, name: 'Мария Кибер', points: 2280, avatar: '⚡', progress: 78, rank: '2', currencies: { cranes: 110, ozzies: 75, kudels: 38 } },
    { id: 3, name: 'Дмитрий Нокс', points: 2150, avatar: '🚀', progress: 72, rank: '3', currencies: { cranes: 95, ozzies: 68, kudels: 32 } },
    { id: 4, name: 'Анна Старк', points: 1980, avatar: '💎', progress: 66, rank: '4', currencies: { cranes: 88, ozzies: 60, kudels: 28 } },
    { id: 5, name: 'Игорь Вектор', points: 1750, avatar: '🔥', progress: 58, rank: '5', currencies: { cranes: 75, ozzies: 52, kudels: 22 } },
    { id: 6, name: 'Елена Матрикс', points: 1580, avatar: '⭐', progress: 52, rank: '6', currencies: { cranes: 68, ozzies: 45, kudels: 18 } },
    { id: 7, name: 'Роман Блейд', points: 1420, avatar: '🎯', progress: 47, rank: '7', currencies: { cranes: 60, ozzies: 38, kudels: 15 } },
    { id: 8, name: 'Ольга Спектр', points: 1280, avatar: '💫', progress: 42, rank: '8', currencies: { cranes: 52, ozzies: 32, kudels: 12 } },
    { id: 9, name: 'Сергей Файр', points: 1150, avatar: '🌟', progress: 38, rank: '9', currencies: { cranes: 45, ozzies: 28, kudels: 10 } },
    { id: 10, name: 'Татьяна Код', points: 1020, avatar: '🎨', progress: 34, rank: '10', currencies: { cranes: 38, ozzies: 22, kudels: 8 } }
  ]

  const scrollToLeaderboard = () => {
    const element = document.getElementById('leaderboard')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black via-purple-900/20 to-space-black"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <div className="text-neon-cyan text-8xl mb-4">⚔️</div>
            <h1 className="font-gaming text-6xl md:text-8xl font-bold mb-6 neon-glow text-neon-cyan">
              SALES ARENA
            </h1>
            <div className="text-neon-magenta font-gaming text-2xl mb-4 neon-glow">
              «БИТВА ЗА ОЗЗИКИ»
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Геймифицированный конкурс среди воинов отдела продаж эквайринга
          </p>

          <div className="mb-8">
            <div className="text-neon-green text-lg mb-4">
              01.09.2025 — 30.11.2025
            </div>
            <div className="flex justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
                🕊️ Журавлики
              </Badge>
              <Badge variant="secondary" className="bg-neon-magenta/20 text-neon-magenta border-neon-magenta">
                🎸 Оззики
              </Badge>
              <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green">
                💎 Куделики
              </Badge>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={scrollToLeaderboard}
            className="bg-neon-cyan text-space-black hover:bg-neon-cyan/90 font-gaming text-lg px-8 py-6 neon-border animate-pulse-neon"
          >
            <Icon name="Trophy" className="mr-2" />
            СМОТРЕТЬ ТАБЛИЦУ ЛИДЕРОВ
          </Button>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-gaming text-4xl md:text-6xl font-bold text-center mb-12 text-neon-magenta neon-glow">
            ТАБЛИЦА ЛИДЕРОВ
          </h2>
          
          <div className="grid gap-4">
            {leaderboard.map((player, index) => (
              <Card key={player.id} className={`gaming-card border-2 transition-all duration-300 hover:scale-[1.02] hover:neon-border ${
                index === 0 ? 'border-neon-cyan shadow-neon-cyan/50' : 
                index === 1 ? 'border-neon-magenta shadow-neon-magenta/50' : 
                index === 2 ? 'border-neon-green shadow-neon-green/50' : 
                'border-gray-600'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className={`text-4xl font-gaming font-bold ${
                      index === 0 ? 'text-neon-cyan' :
                      index === 1 ? 'text-neon-magenta' :
                      index === 2 ? 'text-neon-green' : 'text-gray-400'
                    }`}>
                      #{player.rank}
                    </div>
                    
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-space-gray text-2xl">
                        {player.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{player.name}</h3>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-neon-cyan font-gaming text-lg">{player.points} очков</div>
                        <div className="flex gap-3 text-sm">
                          <span className="text-gray-400">🕊️ {player.currencies.cranes}</span>
                          <span className="text-gray-400">🎸 {player.currencies.ozzies}</span>
                          <span className="text-gray-400">💎 {player.currencies.kudels}</span>
                        </div>
                      </div>
                      <div className="w-full bg-space-gray rounded-full h-3 relative overflow-hidden">
                        <div 
                          className="progress-bar h-full rounded-full transition-all duration-500"
                          style={{ width: `${player.progress}%` }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                          {player.progress}%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contest Rules Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-space-black to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-gaming text-4xl md:text-6xl font-bold text-center mb-12 text-neon-green neon-glow">
            ПРАВИЛА КВЕСТА
          </h2>
          
          <Card className="gaming-card border-neon-green p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-magenta"></div>
            
            <CardContent className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-gaming text-neon-cyan text-xl mb-3">🗓️ СРОКИ БИТВЫ</h3>
                  <p>С 01 сентября 2025 по 30 ноября 2025</p>
                </div>
                
                <div>
                  <h3 className="font-gaming text-neon-magenta text-xl mb-3">🎯 ЦЕЛЬ КВЕСТА</h3>
                  <p>Рост выручки отдела продаж эквайринга</p>
                </div>
                
                <div>
                  <h3 className="font-gaming text-neon-green text-xl mb-3">⚔️ УЧАСТНИКИ</h3>
                  <p>Sales, RM, PM торговые менеджеры</p>
                </div>
                
                <div>
                  <h3 className="font-gaming text-neon-cyan text-xl mb-3">📍 АРЕНА</h3>
                  <p>Москва, Россия</p>
                </div>
              </div>
              
              <div className="border-t border-gray-600 pt-6">
                <h3 className="font-gaming text-neon-magenta text-xl mb-3">🎮 МЕХАНИКА ИГРЫ</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Индивидуальная гонка и командный зачёт</li>
                  <li>• Еженедельная выгрузка результатов</li>
                  <li>• Ежемесячное подведение итогов</li>
                  <li>• Валютная система: Журавлики → Оззики → Куделики</li>
                  <li>• ТОП-10 воинов по итогам месяца</li>
                </ul>
              </div>
              
              <div className="border-t border-gray-600 pt-6">
                <h3 className="font-gaming text-neon-green text-xl mb-3">🏆 НАПРАВЛЕНИЯ БИТВЫ</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <Badge variant="outline" className="justify-center py-2">Интернет-эквайринг</Badge>
                  <Badge variant="outline" className="justify-center py-2">Торговый эквайринг</Badge>
                  <Badge variant="outline" className="justify-center py-2">Транспортный эквайринг</Badge>
                  <Badge variant="outline" className="justify-center py-2">Партнёрское привлечение</Badge>
                  <Badge variant="outline" className="justify-center py-2">iPSP</Badge>
                  <Badge variant="outline" className="justify-center py-2">РКО</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prize Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gaming text-4xl md:text-6xl font-bold mb-12 text-neon-magenta neon-glow">
            СУНДУК СОКРОВИЩ
          </h2>
          
          <Card className="gaming-card border-neon-magenta relative overflow-hidden animate-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/10 via-transparent to-neon-cyan/10"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-8xl mb-8 animate-float">
                📦✨
              </div>
              
              <h3 className="font-gaming text-3xl text-neon-cyan mb-8 neon-glow">
                ГЛАВНЫЙ ПРИЗ
              </h3>
              
              <div className="relative inline-block mb-8">
                <div className="text-6xl animate-pulse-neon">🎮</div>
                <div className="absolute -inset-4 bg-neon-magenta/20 rounded-full blur-xl animate-glow"></div>
              </div>
              
              <h4 className="text-4xl font-gaming font-bold text-white mb-4">
                2x PlayStation 5
              </h4>
              
              <p className="text-xl text-gray-300 mb-8">
                Для самых достойных воинов Sales Arena!
              </p>
              
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl mb-2">🥇</div>
                  <div className="text-neon-cyan font-gaming">1 место</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🥈</div>
                  <div className="text-neon-magenta font-gaming">2 место</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-neon-green font-gaming">Команда</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gray-400 mb-4">
            Конкурс проводится с 01.09.2025 по 30.11.2025
          </div>
          <div className="font-gaming text-neon-cyan neon-glow">
            MAY THE SALES BE WITH YOU! 🚀
          </div>
        </div>
      </footer>
    </div>
  )
}