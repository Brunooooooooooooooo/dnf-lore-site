import { motion } from 'framer-motion';
import type { Dungeon } from '../data/dungeons';

interface DungeonCardProps {
  dungeon: Dungeon;
  index: number;
}

export default function DungeonCard({ dungeon, index }: DungeonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <div className="h-full rounded-2xl bg-dnf-dark-3 border border-dnf-gray/30 overflow-hidden hover:border-opacity-60 transition-all duration-300"
        style={{ borderColor: `${dungeon.color}30` }}
      >
        {/* Type badge */}
        <div className="px-6 pt-5 pb-0">
          <div className="flex items-center justify-between mb-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: `${dungeon.color}20`,
                color: dungeon.color,
              }}
            >
              {dungeon.type}
            </span>
            <span className="text-xs text-dnf-white/40">{dungeon.level}</span>
          </div>

          {/* Icon & Name */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{dungeon.icon}</span>
            <h3 className="text-lg font-bold text-dnf-white">{dungeon.name}</h3>
          </div>

          {/* Description */}
          <p className="text-sm text-dnf-white/60 leading-relaxed mb-4">
            {dungeon.description}
          </p>

          {/* Details */}
          <div className="p-3 rounded-lg bg-dnf-dark/50 mb-4">
            <p className="text-xs text-dnf-white/50 leading-relaxed">
              {dungeon.details}
            </p>
          </div>

          {/* Rewards */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-dnf-gold">🎁 掉落：</span>
            <span className="text-xs text-dnf-white/50">{dungeon.rewards}</span>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="h-1 w-full opacity-50 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, ${dungeon.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}
