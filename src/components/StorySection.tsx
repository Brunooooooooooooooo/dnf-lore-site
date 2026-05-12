import { motion } from 'framer-motion';
import type { StoryChapter } from '../data/story';

interface StorySectionProps {
  chapter: StoryChapter;
  index: number;
}

export default function StorySection({ chapter, index }: StorySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative"
    >
      <div className="flex gap-6 items-start">
        {/* Timeline dot */}
        <div className="flex-shrink-0 relative">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: `${chapter.color}15` }}
          >
            {chapter.icon}
          </div>
          {index < 5 && (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-dnf-gray/50 to-transparent" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: chapter.color }}>
            {chapter.title}
          </h3>
          <p className="text-sm text-dnf-white/60 leading-relaxed">
            {chapter.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
