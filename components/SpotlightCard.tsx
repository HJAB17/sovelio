'use client';

import { useRef, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

/**
 * Carte avec effet "spotlight" : un halo lumineux suit le curseur,
 * la carte se soulève légèrement au survol et réagit à la pression.
 */
export default function SpotlightCard({ children, className = '', onClick, id }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onClick={onClick}
      className={`spotlight-card gradient-border-glow glass-card rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}