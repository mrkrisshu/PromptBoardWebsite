'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function AppScreenshots() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const frameColor = isDark ? 'bg-gray-800' : 'bg-gray-200';

    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        See <span className="gradient-text">PromptBoard</span> in Action
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        A beautiful, intuitive interface designed for seamless prompt discovery and generation.
                    </p>
                    <p className="text-sm text-foreground/50 mt-2">
                        ✨ Toggle the theme to see the app in {isDark ? 'light' : 'dark'} mode
                    </p>
                </motion.div>

                {/* Mobile: Horizontal Scroll */}
                <div className="md:hidden">
                    <div className="flex gap-4 overflow-x-auto pb-6 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide">
                        {/* Mobile Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 snap-center"
                        >
                            <div className={`relative w-48 aspect-[9/19] rounded-[1.5rem] ${frameColor} p-1 shadow-xl transition-colors duration-500`}>
                                <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'dark-4' : 'light-1'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={isDark ? '/screenshots/screen4.png' : '/screenshots/screen1.png'}
                                                alt="PromptBoard Screenshot"
                                                fill
                                                className="object-cover object-top"
                                                sizes="50vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile Center */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 snap-center"
                        >
                            <div className={`relative w-48 aspect-[9/19] rounded-[1.5rem] ${frameColor} p-1 shadow-xl transition-colors duration-500`}>
                                <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'dark-3' : 'light-1-center'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={isDark ? '/screenshots/screen3.png' : '/screenshots/screen1.png'}
                                                alt="PromptBoard Screenshot"
                                                fill
                                                className="object-cover object-top"
                                                sizes="50vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 snap-center"
                        >
                            <div className={`relative w-48 aspect-[9/19] rounded-[1.5rem] ${frameColor} p-1 shadow-xl transition-colors duration-500`}>
                                <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'dark-2' : 'light-1-right'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={isDark ? '/screenshots/screen2.png' : '/screenshots/screen1.png'}
                                                alt="PromptBoard Screenshot"
                                                fill
                                                className="object-cover object-top"
                                                sizes="50vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <p className="text-center text-sm text-foreground/50 mt-2">← Swipe to see more →</p>
                </div>

                {/* Desktop: 3D Layout */}
                <div className="hidden md:block relative h-[650px]">
                    <div className="relative flex items-center justify-center h-full">
                        {/* Left Phone - Detail View */}
                        <motion.div
                            initial={{ opacity: 0, x: -100, rotateY: 20 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 15 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="absolute left-[15%] z-10"
                        >
                            <div className={`relative w-52 aspect-[9/19] rounded-[1.5rem] ${frameColor} p-1 shadow-2xl transform -rotate-6 transition-colors duration-500`}>
                                <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'desktop-dark-4' : 'desktop-light-1'}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={isDark ? '/screenshots/screen4.png' : '/screenshots/screen1.png'}
                                                alt={isDark ? 'PromptBoard Dark Detail' : 'PromptBoard Light Mode'}
                                                fill
                                                className={`object-cover ${isDark ? 'object-top' : 'object-center'}`}
                                                sizes="25vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Center Phone (Main) - Home View */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative z-20"
                        >
                            <div className={`relative w-72 aspect-[9/19] rounded-[1.75rem] ${frameColor} p-1.5 shadow-2xl neon-glow transition-colors duration-500`}>
                                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'desktop-dark-3' : 'desktop-light-1-center'}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={isDark ? '/screenshots/screen3.png' : '/screenshots/screen1.png'}
                                                alt={isDark ? 'PromptBoard Dark Home' : 'PromptBoard Light Home'}
                                                fill
                                                className="object-cover object-top"
                                                sizes="33vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Phone - Detail View */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotateY: -20 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: -15 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="absolute right-[15%] z-10"
                        >
                            <div className={`relative w-52 aspect-[9/19] rounded-[1.5rem] ${frameColor} p-1 shadow-2xl transform rotate-6 transition-colors duration-500`}>
                                <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'desktop-dark-2' : 'desktop-light-1-right'}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={isDark ? '/screenshots/screen2.png' : '/screenshots/screen1.png'}
                                                alt={isDark ? 'PromptBoard Dark Detail' : 'PromptBoard Light Mode'}
                                                fill
                                                className={`object-cover ${isDark ? 'object-top' : 'object-bottom'}`}
                                                sizes="25vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
