import { motion, AnimatePresence } from 'framer-motion';
import type { BaseClass } from '../data/classes';

interface ClassDetailProps {
  cls: BaseClass | null;
  onClose: () => void;
}

export default function ClassDetail({ cls, onClose }: ClassDetailProps) {
  if (!cls) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-dnf-dark-2 border border-dnf-gray/30"
          style={{ borderColor: `${cls.color}30` }}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dnf-gray/50 flex items-center justify-center text-dnf-white/60 hover:text-dnf-white hover:bg-dnf-gray transition-all z-10"
          >
            ✕
          </button>

          {/* Header */}
          <div
            className="relative p-8 pb-6"
            style={{
              background: `linear-gradient(135deg, ${cls.color}10, transparent)`,
            }}
          >
            <div className="flex items-center gap-5 mb-4">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl"
                style={{ backgroundColor: `${cls.color}15` }}
              >
                {cls.icon}
              </div>
              <div>
                <h2 className="text-3xl font-black text-dnf-white">{cls.name}</h2>
                <p className="text-lg" style={{ color: cls.color }}>{cls.title}</p>
              </div>
            </div>

            <p className="text-sm text-dnf-white/70 leading-relaxed">
              {cls.description}
            </p>
          </div>

          {/* Lore */}
          <div className="px-8 pb-6">
            <h3 className="text-sm font-bold text-dnf-white/50 uppercase tracking-wider mb-3">📜 背景故事</h3>
            <p className="text-sm text-dnf-white/60 leading-relaxed p-4 rounded-xl bg-dnf-dark/50 border border-dnf-gray/20">
              {cls.lore}
            </p>
          </div>

          {/* Jobs */}
          <div className="px-8 pb-8">
            <h3 className="text-sm font-bold text-dnf-white/50 uppercase tracking-wider mb-4">⚔️ 转职方向</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cls.jobs.map((job) => (
                <motion.div
                  key={job.name}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-dnf-dark-3 border border-dnf-gray/20 hover:border-opacity-60 transition-all"
                  style={{ borderColor: `${job.color}30` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{job.icon}</span>
                    <h4 className="text-lg font-bold" style={{ color: job.color }}>{job.name}</h4>
                  </div>
                  <p className="text-xs text-dnf-white/50 leading-relaxed">
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
