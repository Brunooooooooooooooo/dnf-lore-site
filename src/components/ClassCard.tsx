import { motion } from 'framer-motion';
import type { BaseClass } from '../data/classes';

interface ClassCardProps {
  cls: BaseClass;
  index: number;
  onSelect: (cls: BaseClass) => void;
}

export default function ClassCard({ cls, index, onSelect }: ClassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onSelect(cls)}
      className="group cursor-pointer relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-dnf-dark-3 border border-dnf-gray/30 hover:border-opacity-60 transition-all duration-300"
        style={{ borderColor: `${cls.color}30` }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${cls.color}15, transparent 70%)`,
          }}
        />

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${cls.color}15` }}
            >
              {cls.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-dnf-white">{cls.name}</h3>
              <p className="text-sm" style={{ color: cls.color }}>{cls.title}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-dnf-white/60 leading-relaxed mb-5 line-clamp-3">
            {cls.description}
          </p>

          {/* Jobs preview */}
          <div className="flex flex-wrap gap-2">
            {cls.jobs.map((job) => (
              <span
                key={job.name}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${job.color}15`,
                  color: job.color,
                  border: `1px solid ${job.color}30`,
                }}
              >
                {job.icon} {job.name}
              </span>
            ))}
          </div>

          {/* Arrow indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
            <span className="text-dnf-white/40">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
