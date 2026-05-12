import { useState } from 'react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import ClassCard from '../components/ClassCard';
import ClassDetail from '../components/ClassDetail';
import DungeonCard from '../components/DungeonCard';
import StorySection from '../components/StorySection';
import { baseClasses, type BaseClass } from '../data/classes';
import { dungeons, maps } from '../data/dungeons';
import { gameStory, activities } from '../data/story';

export default function Home() {
  const [selectedClass, setSelectedClass] = useState<BaseClass | null>(null);

  return (
    <div className="min-h-screen bg-dnf-dark">
      <Hero />

      {/* Story / Lore Section */}
      <section id="story" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-dnf-gold/10 text-dnf-gold border border-dnf-gold/20 mb-4">
                📜 World View
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-dnf-white mb-4">
                世界观 · <span className="text-dnf-gold text-glow-gold">编年史</span>
              </h2>
              <p className="text-dnf-white/50 max-w-2xl mx-auto">
                从创世纪到大灾变，从冒险者的崛起到使徒的秘密，了解阿拉德大陆的前世今生
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-2">
            {gameStory.map((chapter, index) => (
              <StorySection key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 px-4 bg-gradient-to-b from-transparent via-dnf-dark-2/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-dnf-red/10 text-dnf-red border border-dnf-red/20 mb-4">
                ⚔️ Classes & Jobs
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-dnf-white mb-4">
                职业 · <span className="text-dnf-red text-glow-red">转职图鉴</span>
              </h2>
              <p className="text-dnf-white/50 max-w-2xl mx-auto">
                8大基础职业，30+转职方向，点击卡片查看详细转职路线和技能特点
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {baseClasses.map((cls, index) => (
              <ClassCard
                key={cls.id}
                cls={cls}
                index={index}
                onSelect={setSelectedClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Class Detail Modal */}
      <ClassDetail cls={selectedClass} onClose={() => setSelectedClass(null)} />

      {/* Dungeons Section */}
      <section id="dungeons" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-dnf-blue/10 text-dnf-blue border border-dnf-blue/20 mb-4">
                🏰 Dungeons & Raids
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-dnf-white mb-4">
                副本 · <span className="text-dnf-blue text-glow-blue">团本档案</span>
              </h2>
              <p className="text-dnf-white/50 max-w-2xl mx-auto">
                从最初的诺伊佩拉到巴卡尔团本，回顾DNF副本发展的光辉历程
              </p>
            </div>
          </AnimatedSection>

          {/* Dungeon type filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['全部', '副本', '团本', '军团本', '特殊'].map((type) => (
              <span
                key={type}
                className="px-5 py-2 rounded-full text-sm font-medium bg-dnf-dark-3 border border-dnf-gray/30 text-dnf-white/60 hover:text-dnf-white hover:border-dnf-blue/30 transition-all cursor-default"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dungeons.map((dungeon, index) => (
              <DungeonCard key={dungeon.id} dungeon={dungeon} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-24 px-4 bg-gradient-to-b from-transparent via-dnf-dark-2/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-dnf-gold/10 text-dnf-gold border border-dnf-gold/20 mb-4">
                🗺️ Regions
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-dnf-white mb-4">
                地图 · <span className="text-dnf-gold text-glow-gold">区域档案</span>
              </h2>
              <p className="text-dnf-white/50 max-w-2xl mx-auto">
                阿拉德大陆、天界、魔界——探索DNF世界中的每一个角落
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {maps.map((map, index) => (
              <AnimatedSection key={map.name} delay={index * 0.08}>
                <div className="group p-5 rounded-xl bg-dnf-dark-3 border border-dnf-gray/30 hover:border-opacity-60 transition-all duration-300 cursor-default"
                  style={{ borderColor: `${map.color}30` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{map.icon}</span>
                    <h3 className="text-lg font-bold text-dnf-white">{map.name}</h3>
                  </div>
                  <p className="text-xs text-dnf-white/50 leading-relaxed">
                    {map.description}
                  </p>
                  <div className="mt-3 h-0.5 w-12 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: map.color }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-dnf-red/10 text-dnf-red border border-dnf-red/20 mb-4">
                🎮 Gameplay
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-dnf-white mb-4">
                活动 · <span className="text-dnf-red text-glow-red">特色玩法</span>
              </h2>
              <p className="text-dnf-white/50 max-w-2xl mx-auto">
                除了刷副本打团本，DNF还有丰富多彩的活动和特色玩法等你体验
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <AnimatedSection key={activity.name} delay={index * 0.1}>
                <div className="group p-6 rounded-2xl bg-dnf-dark-3 border border-dnf-gray/30 hover:border-opacity-60 transition-all duration-300"
                  style={{ borderColor: `${activity.color}30` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${activity.color}15` }}
                    >
                      {activity.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dnf-white">{activity.name}</h3>
                  </div>
                  <p className="text-sm text-dnf-white/50 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Game Summary Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-dnf-dark-2/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-dnf-dark-3 to-dnf-dark border border-dnf-gray/20 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-dnf-red/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-1/4 w-[300px] h-[150px] bg-dnf-blue/5 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-dnf-white mb-4">
                  🎮 <span className="bg-gradient-to-r from-dnf-red via-dnf-gold to-dnf-blue bg-clip-text text-transparent">地下城与勇士</span>
                </h2>
                <p className="text-dnf-white/60 leading-relaxed mb-6 max-w-2xl mx-auto">
                  自2008年国服公测以来，DNF已经陪伴中国玩家走过了18个年头。
                  从最初的基础职业到如今的30+转职方向，从简单的地下城到史诗级的团本挑战，
                  DNF始终在进化，但不变的是那份"闪光"的喜悦和与朋友一起战斗的热血。
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-5 py-2 rounded-full bg-dnf-red/10 border border-dnf-red/20">
                    <span className="text-sm text-dnf-red">🔥 热血战斗</span>
                  </div>
                  <div className="px-5 py-2 rounded-full bg-dnf-gold/10 border border-dnf-gold/20">
                    <span className="text-sm text-dnf-gold">✨ 史诗闪光</span>
                  </div>
                  <div className="px-5 py-2 rounded-full bg-dnf-blue/10 border border-dnf-blue/20">
                    <span className="text-sm text-dnf-blue">👥 团队协作</span>
                  </div>
                  <div className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <span className="text-sm text-purple-400">🎭 职业多样</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
