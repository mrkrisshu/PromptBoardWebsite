'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Heart, Lightbulb, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import DownloadButton from '../components/DownloadButton';

const values = [
    {
        icon: Sparkles,
        title: 'Quality First',
        description: 'Every prompt in our collection is carefully crafted and tested to produce stunning results.',
    },
    {
        icon: Target,
        title: 'User-Focused',
        description: 'Designed with simplicity in mind, making AI image generation accessible to everyone.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Constantly updating with new prompts and features to keep up with the latest AI models.',
    },
    {
        icon: Heart,
        title: 'Passion',
        description: 'Built by creators who love AI art and want to share that passion with the world.',
    },
];

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            About <span className="gradient-text">PromptBoard</span>
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            Empowering creators to generate stunning AI images with perfect prompts.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-foreground/70">
                            <p>
                                PromptBoard was born out of a simple frustration: finding the right prompts for AI image generation was time-consuming and often led to disappointing results.
                            </p>
                            <p>
                                As AI image generation tools like DALL-E, Midjourney, Stable Diffusion, and others became more powerful, the gap between what&apos;s possible and what most users could achieve widened. The secret? The right prompts.
                            </p>
                            <p>
                                We created PromptBoard to bridge that gap. Our curated collection of prompts, organized by AI model and category, makes it easy for anyone to create stunning AI-generated images without spending hours crafting the perfect prompt.
                            </p>
                            <p>
                                Today, PromptBoard helps thousands of creators, designers, and enthusiasts unlock the full potential of AI image generation tools.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-bold text-center mb-12"
                    >
                        Our Values
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                                    <p className="text-foreground/70">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Developer Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 text-center"
                    >
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-3xl font-bold text-white">
                            KB
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Krishna Bantola</h3>
                        <p className="text-foreground/70 mb-4">AI Engineer and Full Stack Developer</p>
                        <p className="text-foreground/70 max-w-lg mx-auto mb-6">
                            Passionate about AI, design, and building tools that make creativity accessible to everyone.
                        </p>
                        <Link
                            href="https://krishnabantola.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:neon-glow transition-all duration-300 font-medium"
                        >
                            Visit My Portfolio
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                            Join Our Community
                        </h2>
                        <p className="text-foreground/70 mb-8">
                            Download PromptBoard and become part of a growing community of AI art enthusiasts.
                        </p>
                        <DownloadButton size="large" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
