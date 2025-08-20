import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'

export default function Index() {
  const leaderboard = [
    { id: 1, name: 'Алексей Громов', points: 2450, avatar: 'АГ', avatarColor: 'neon-cyan', progress: 85, rank: '1', currencies: { cranes: 120, ozzies: 85, kudels: 45 } },
    { id: 2, name: 'Мария Кибер', points: 2280, avatar: 'МК', avatarColor: 'neon-magenta', progress: 78, rank: '2', currencies: { cranes: 110, ozzies: 75, kudels: 38 } },
    { id: 3, name: 'Дмитрий Нокс', points: 2150, avatar: 'ДН', avatarColor: 'neon-green', progress: 72, rank: '3', currencies: { cranes: 95, ozzies: 68, kudels: 32 } },
    { id: 4, name: 'Анна Старк', points: 1980, avatar: 'АС', avatarColor: 'purple-400', progress: 66, rank: '4', currencies: { cranes: 88, ozzies: 60, kudels: 28 } },
    { id: 5, name: 'Игорь Вектор', points: 1750, avatar: 'ИВ', avatarColor: 'orange-400', progress: 58, rank: '5', currencies: { cranes: 75, ozzies: 52, kudels: 22 } },
    { id: 6, name: 'Елена Матрикс', points: 1580, avatar: 'ЕМ', avatarColor: 'pink-400', progress: 52, rank: '6', currencies: { cranes: 68, ozzies: 45, kudels: 18 } },
    { id: 7, name: 'Роман Блейд', points: 1420, avatar: 'РБ', avatarColor: 'blue-400', progress: 47, rank: '7', currencies: { cranes: 60, ozzies: 38, kudels: 15 } },
    { id: 8, name: 'Ольга Спектр', points: 1280, avatar: 'ОС', avatarColor: 'yellow-400', progress: 42, rank: '8', currencies: { cranes: 52, ozzies: 32, kudels: 12 } },
    { id: 9, name: 'Сергей Файр', points: 1150, avatar: 'СФ', avatarColor: 'red-400', progress: 38, rank: '9', currencies: { cranes: 45, ozzies: 28, kudels: 10 } },
    { id: 10, name: 'Татьяна Код', points: 1020, avatar: 'ТК', avatarColor: 'indigo-400', progress: 34, rank: '10', currencies: { cranes: 38, ozzies: 22, kudels: 8 } }
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
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-neon-cyan via-neon-magenta to-neon-green rounded-full flex items-center justify-center text-4xl font-gaming font-bold animate-pulse-neon">
              SA
            </div>
            <h1 className="font-gaming text-6xl md:text-8xl font-bold mb-6 neon-glow text-neon-cyan text-shadow">
              SALES ARENA
            </h1>
            <div className="text-neon-magenta font-gaming text-2xl mb-4 neon-glow text-shadow">
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
              <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan px-4 py-2">
                <div className="w-4 h-4 bg-white rounded-sm mr-2 flex items-center justify-center text-xs text-black font-bold">Ж</div>
                Журавлики
              </Badge>
              <Badge variant="secondary" className="bg-neon-magenta/20 text-neon-magenta border-neon-magenta px-4 py-2">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded mr-2 flex items-center justify-center text-xs text-white font-bold">О</div>
                Оззики
              </Badge>
              <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green px-4 py-2">
                <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mr-2 flex items-center justify-center text-xs text-white font-bold">К</div>
                Куделики
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
          <h2 className="font-readable text-4xl md:text-6xl font-bold text-center mb-12 text-neon-magenta neon-glow text-shadow">
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
                    
                    <Avatar className="w-16 h-16 border-2 border-current">
                      <AvatarFallback className={`bg-gradient-to-br from-space-gray to-space-black text-${player.avatarColor} font-gaming font-bold text-lg`}>
                        {player.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{player.name}</h3>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-neon-cyan font-gaming text-lg">{player.points} очков</div>
                        <div className="flex gap-3 text-sm">
                          <span className="text-neon-cyan flex items-center">
                            <div className="w-3 h-3 bg-white rounded-sm mr-1 flex items-center justify-center text-xs text-black font-bold">Ж</div>
                            {player.currencies.cranes}
                          </span>
                          <span className="text-neon-magenta flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded mr-1"></div>
                            {player.currencies.ozzies}
                          </span>
                          <span className="text-neon-green flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mr-1"></div>
                            {player.currencies.kudels}
                          </span>
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
          <h2 className="font-readable text-4xl md:text-6xl font-bold text-center mb-12 text-neon-green neon-glow text-shadow">
            ПРАВИЛА КВЕСТА
          </h2>
          
          <Card className="gaming-card border-neon-green p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-magenta"></div>
            
            <CardContent className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-readable text-neon-cyan text-xl mb-3 flex items-center">
                    <Icon name="Calendar" className="mr-2" />
                    СРОКИ БИТВЫ
                  </h3>
                  <p>С 01 сентября 2025 по 30 ноября 2025</p>
                </div>
                
                <div>
                  <h3 className="font-readable text-neon-magenta text-xl mb-3 flex items-center">
                    <Icon name="Target" className="mr-2" />
                    ЦЕЛЬ КВЕСТА
                  </h3>
                  <p>Рост выручки отдела продаж эквайринга</p>
                </div>
                
                <div>
                  <h3 className="font-readable text-neon-green text-xl mb-3 flex items-center">
                    <Icon name="Users" className="mr-2" />
                    УЧАСТНИКИ
                  </h3>
                  <p>Sales, RM, PM торговые менеджеры</p>
                </div>
                
                <div>
                  <h3 className="font-readable text-neon-cyan text-xl mb-3 flex items-center">
                    <Icon name="MapPin" className="mr-2" />
                    АРЕНА
                  </h3>
                  <p>Москва, Россия</p>
                </div>
              </div>
              
              <div className="border-t border-gray-600 pt-6">
                <h3 className="font-readable text-neon-magenta text-xl mb-3 flex items-center">
                  <Icon name="Gamepad2" className="mr-2" />
                  МЕХАНИКА ИГРЫ
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Индивидуальная гонка и командный зачёт</li>
                  <li>• Еженедельная выгрузка результатов</li>
                  <li>• Ежемесячное подведение итогов</li>
                  <li>• Валютная система: Журавлики → Оззики → Куделики</li>
                  <li>• ТОП-10 воинов по итогам месяца</li>
                </ul>
              </div>
              
              <div className="border-t border-gray-600 pt-6">
                <h3 className="font-readable text-neon-green text-xl mb-3 flex items-center">
                  <Icon name="Trophy" className="mr-2" />
                  НАПРАВЛЕНИЯ БИТВЫ
                </h3>
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
          <h2 className="font-readable text-4xl md:text-6xl font-bold mb-12 text-neon-magenta neon-glow text-shadow">
            СУНДУК СОКРОВИЩ
          </h2>
          
          <Card className="gaming-card border-neon-magenta relative overflow-hidden animate-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/10 via-transparent to-neon-cyan/10"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="relative mb-8">
                <div className="w-32 h-24 mx-auto bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-lg shadow-2xl transform rotate-3 animate-float">
                  <div className="absolute inset-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded border-2 border-amber-800">
                    <div className="w-full h-full flex items-center justify-center text-amber-900 font-gaming font-bold text-sm">СУНДУК</div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-amber-800 rounded-t-lg"></div>
                </div>
              </div>
              
              <h3 className="font-readable text-3xl text-neon-cyan mb-8 neon-glow text-shadow">
                ГЛАВНЫЙ ПРИЗ
              </h3>
              
              <div className="relative inline-block mb-8">
                <img src="/img/d0f462d5-aeb1-44cb-bf7d-0620b7168f1f.jpg" alt="PlayStation 5" className="w-64 h-40 object-cover rounded-lg animate-glow" />
                <div className="absolute -inset-4 bg-neon-magenta/20 rounded-lg blur-xl animate-glow"></div>
              </div>
              
              <h4 className="text-4xl font-readable font-bold text-white mb-4 text-shadow">PlayStation 5</h4>
              
              <p className="text-xl text-gray-300 mb-8">
                Для самых достойных воинов Sales Arena!
              </p>
              
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-gaming font-bold text-yellow-900">1</div>
                  <div className="text-neon-cyan font-readable">1 место</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center font-gaming font-bold text-gray-800">2</div>
                  <div className="text-neon-magenta font-readable">2 место</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-neon-green to-green-600 rounded-full flex items-center justify-center font-gaming font-bold text-black">T</div>
                  <div className="text-neon-green font-readable">Команда</div>
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
            MAY THE SALES BE WITH YOU! 
            <Icon name="Rocket" className="inline ml-2" />
          </div>
        </div>
      </footer>
    </div>
  )
}