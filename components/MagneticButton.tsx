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
 * Bouton Papier & Encre Violette SOVelio : dégradé inspiré du logo,
 * bordure d'encre franche, ombre portée découpée et enfoncement physique au clic.
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

  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-bold text-white ' +
    'bg-[image:var(--logo-gradient)] border-2 border-[var(--ink-border)] ' +
    'shadow-[4px_4px_0_var(--shadow-ink-color)] hover:shadow-[6px_6px_0_var(--shadow-ink-color)] ' +
    'hover:-rotate-1 active:rotate-0 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--shadow-ink-color)] ' +
    'transition-all duration-200 cursor-pointer';

  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.28), transparent 60%)',
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
    whileTap: { scale: 0.97 },
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