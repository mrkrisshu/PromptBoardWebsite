'use client';

import { motion } from 'framer-motion';

interface FilterChipsProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const filterColors: Record<string, string> = {
    'All': 'from-gray-500 to-gray-600',
    'OpenAI': 'from-green-500 to-emerald-600',
    'Google': 'from-blue-500 to-indigo-600',
    'Meta': 'from-blue-600 to-purple-600',
    'DeepSeek': 'from-orange-500 to-red-600',
    'Copilot': 'from-cyan-500 to-blue-600',
};

export default function FilterChips({ filters, activeFilter, onFilterChange }: FilterChipsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {filters.map((filter) => {
                const isActive = activeFilter === filter;
                const gradientClass = filterColors[filter] || 'from-green-500 to-emerald-500';

                return (
                    <motion.button
                        key={filter}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onFilterChange(filter)}
                        className={`
              relative px-5 py-2 rounded-full font-medium text-sm
              transition-all duration-300 overflow-hidden
              ${isActive
                                ? `bg-gradient-to-r ${gradientClass} text-white shadow-lg`
                                : 'glass-card hover:bg-primary/10'
                            }
            `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                                initial={false}
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{filter}</span>
                    </motion.button>
                );
            })}
        </div>
    );
}
