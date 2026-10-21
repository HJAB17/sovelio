'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import { solutions, categories, Category } from '@/lib/data';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  /** Appelé quand l'utilisateur sélectionne une solution : filtre + scroll */
  onSelectSolution?: (solutionId: string) => void;
}

const categoryLabel = (id: Category) =>
  categories.find((c) => c.id === id)?.name ?? id;

/** Met en surbrillance les occurrences de la requête façon stabilo violet */
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.trim().toLowerCase() ? (
          <mark
            key={i}
            className="bg-[var(--violet-pastel)] text-[var(--ink)] font-bold rounded px-1 border border-[var(--ink-border)]/40"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function CommandPalette({ open, onClose, onSelectSolution }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus automatique à l'ouverture
  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  // Raccourci global Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Recherche temps réel
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return solutions.slice(0, 8);
    return solutions
      .filter((s) => {
        const haystack = [
          s.name,
          s.description,
          s.category,
          categoryLabel(s.category),
          ...s.labels,
          s.souveraineteDetails.hosting,
          s.souveraineteDetails.jurisdiction,
          ...s.souveraineteDetails.certifications,
        ]
          .join(' ')
          .toLowerCase();
        return q.split(/\s+/).every((word) => haystack.includes(word));
      })
      .slice(0, 12);
  }, [query]);

  // Navigation clavier
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        onSelectSolution?.(results[selectedIndex].id);
        onClose();
      }
    },
    [results, selectedIndex, onSelectSolution, onClose]
  );

  // Scroll de l'élément sélectionné dans le viewport
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const el = list.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4 bg-[#1E1432]/55 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Recherche rapide de solutions"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="w-full max-w-2xl rounded-2xl overflow-hidden bg-[var(--paper-card)] border-2 border-[var(--ink-border)] shadow-[8px_8px_0_var(--shadow-ink-color)]"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Champ de recherche */}
            <div className="flex items-center gap-3 px-5 py-4 border-b-2 border-[var(--ink-border)] bg-[image:var(--logo-gradient-soft)]">
              <MagnifyingGlassIcon className="h-5 w-5 text-[var(--violet)] stroke-[2.4] flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Rechercher une solution, un label, une certification…"
                className="flex-1 bg-transparent outline-none text-base font-semibold text-[var(--ink)] placeholder:text-[var(--ink-muted)]"
              />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[var(--paper-card)] border border-[var(--ink-border)] hover:bg-[var(--violet-pastel)] transition-colors cursor-pointer"
                aria-label="Fermer la recherche"
              >
                <XMarkIcon className="h-4 w-4 text-[var(--ink)] stroke-[2.2]" />
              </button>
            </div>

            {/* Résultats sur papier réglé */}
            <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2.5 bristol-lines">
              {results.length === 0 ? (
                <div className="py-10 text-center">
                  <CommandLineIcon className="h-8 w-8 mx-auto text-[var(--ink-muted)] mb-3" />
                  <p className="text-sm font-medium text-[var(--ink-muted)]">
                    Aucune solution ne correspond à « {query} »
                  </p>
                </div>
              ) : (
                results.map((solution, index) => (
                  <button
                    key={solution.id}
                    data-index={index}
                    onClick={() => {
                      onSelectSolution?.(solution.id);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer border ${
                      selectedIndex === index
                        ? 'bg-[var(--paper-lavender)] border-[var(--ink-border)] shadow-[2px_2px_0_var(--shadow-ink-color)] -translate-y-0.5'
                        : 'border-transparent'
                    }`}
                  >
                    {/* Timbre initiale */}
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[image:var(--logo-gradient)] border border-[var(--ink-border)] text-sm font-extrabold text-white -rotate-2">
                      {solution.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[var(--ink)] truncate">
                          <Highlight text={solution.name} query={query} />
                        </span>
                        <span className="text-xs">{solution.country === 'FR' ? '🇫🇷' : '🇪🇺'}</span>
                      </div>
                      <p className="text-xs text-[var(--ink-muted)] font-medium truncate">
                        {categoryLabel(solution.category)} ·{' '}
                        <Highlight text={solution.description} query={query} />
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-[var(--violet)] flex-shrink-0" />
                  </button>
                ))
              )}
            </div>

            {/* Pied : raccourcis */}
            <div className="flex items-center justify-between px-5 py-2.5 border-t-2 border-[var(--ink-border)] bg-[var(--paper-warm)] text-[11px] font-bold text-[var(--ink-muted)]">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-card)] border border-[var(--ink-border)] text-[var(--ink)] font-sans">
                    ↑↓
                  </kbd>{' '}
                  naviguer
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-card)] border border-[var(--ink-border)] text-[var(--ink)] font-sans">
                    ↵
                  </kbd>{' '}
                  ouvrir
                </span>
              </div>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-card)] border border-[var(--ink-border)] text-[var(--ink)] font-sans">
                  esc
                </kbd>{' '}
                fermer
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}