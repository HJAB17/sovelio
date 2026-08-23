'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

/**
 * Bouton "magnétique" : attire légèrement le curseur, le fond s'illumine
 * au survol et un feedback de pression est appliqué au clic.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Décalage magnétique max ~4px vers le curseur
    const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-medium text-white ' +
    'bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] ' +
    'shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)] ' +
    'active:scale-95 transition-shadow duration-300 cursor-pointer';

  const inner = (
    <>
      {/* Illumination du fond au survol */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.35), transparent 60%)',
          opacity: isHovered ? 1 : 0,
        }}
        onMouseMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          el.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
          el.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    style: { x, y },
    whileTap: { scale: 0.95 },
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    className: `${baseClasses} ${className}`,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}