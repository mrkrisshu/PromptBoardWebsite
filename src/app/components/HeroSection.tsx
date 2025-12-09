'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Zap } from 'lucide-react';
import Link from 'next/link';
import DownloadButton from './DownloadButton';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium">AI-Powered Prompt Generation</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="gradient-text">Perfect prompts</span>
                        <br />
                        <span className="text-foreground">for every AI model</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
                    >
                        Generate stunning images instantly with curated prompts for OpenAI, Google, Meta, DeepSeek, and Copilot.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <DownloadButton size="large" />
                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:neon-glow transition-all duration-300 font-medium"
                        >
                            <Zap className="w-5 h-5 text-emerald-400" />
                            Explore Gallery
                        </Link>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {['Fast Generation', 'High-Quality Prompts', 'Dark/Light Mode', 'Model Filters'].map((feature, index) => (
                            <motion.span
                                key={feature}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                className="px-4 py-2 rounded-full text-sm font-medium glass-card"
                            >
                                {feature}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="flex flex-col items-center gap-2 text-foreground/50"
                    >
                        <span className="text-xs">Scroll to explore</span>
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
