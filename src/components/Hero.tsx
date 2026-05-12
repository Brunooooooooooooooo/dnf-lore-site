import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dnf-dark via-dnf-dark-2 to-dnf-dark" />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#C41E3A' : i % 3 === 1 ? '#D4A017' : '#4FC3F7',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dnf-red/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dnf-blue/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dnf-gold/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-dnf-red/10 text-dnf-red border border-dnf-red/20">
              Dungeon & Fighter
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-dnf-red via-dnf-red-light to-dnf-gold bg-clip-text text-transparent text-glow-red">
              地下城与勇士
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-dnf-white/60 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            编年史 · 职业图鉴 · 副本档案
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-dnf-white/40 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            探索阿拉德大陆的史诗传说，了解每一个职业的转职之路，
            <br className="hidden md:block" />
            回忆那些年我们一起刷过的副本和团本
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#classes"
              className="group px-8 py-3.5 bg-gradient-to-r from-dnf-red to-dnf-red-dark rounded-xl font-bold text-white transition-all hover:shadow-lg hover:shadow-dnf-red/30 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                探索职业 ⚔️
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="#dungeons"
              className="px-8 py-3.5 rounded-xl font-bold text-dnf-white/80 border border-dnf-white/20 hover:border-dnf-gold/50 hover:text-dnf-gold transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                副本档案 🏰
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { label: '基础职业', value: '8+', icon: '👥' },
            { label: '转职方向', value: '30+', icon: '⚔️' },
            { label: '经典副本', value: '100+', icon: '🏰' },
            { label: '运营年限', value: '18年', icon: '📅' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-dnf-dark-3/50 border border-dnf-gray/30">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-dnf-gold text-glow-gold">{stat.value}</div>
              <div className="text-sm text-dnf-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-dnf-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-dnf-red" />
        </div>
      </motion.div>
    </section>
  );
}
