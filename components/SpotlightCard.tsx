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
 * Fiche Papier Canson : grain tactile, contour d'encre franc, ombre découpée
 * et légère inclinaison vivante au survol.
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
      whileHover={{ y: -4, rotate: -0.4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      onClick={onClick}
      className={`canson-sheet spotlight-card rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}