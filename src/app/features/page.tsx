'use client';

import { motion } from 'framer-motion';
import { Zap, Palette, Filter, Moon, Smartphone, Sparkles, Copy, Image, Layers, Search, Share2, Heart } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import AppScreenshots from '../components/AppScreenshots';
import DownloadButton from '../components/DownloadButton';

const features = [
    {
        icon: Sparkles,
        title: 'AI-Powered Prompts',
        description: 'Access thousands of carefully crafted prompts optimized for different AI image generation models.',
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Instant search and filtering to find the perfect prompt in seconds.',
    },
    {
        icon: Filter,
        title: 'Smart Filters',
        description: 'Filter by AI model (OpenAI, Google, Meta, DeepSeek, Copilot) to get optimized prompts.',
    },
    {
        icon: Moon,
        title: 'Dark/Light Mode',
        description: 'Switch between themes for comfortable viewing day or night.',
    },
    {
        icon: Copy,
        title: 'One-Tap Copy',
        description: 'Copy any prompt with a single tap and paste directly into your AI tool.',
    },
    {
        icon: Image,
        title: 'Preview Images',
        description: 'See example outputs for each prompt before using it.',
    },
    {
        icon: Layers,
        title: 'Categories',
        description: 'Browse prompts by category: portraits, landscapes, abstract, anime, and more.',
    },
    {
        icon: Search,
        title: 'Smart Search',
        description: 'Find prompts by keyword, style, or mood with intelligent search.',
    },
    {
        icon: Share2,
        title: 'Share Prompts',
        description: 'Share your favorite prompts with friends or on social media.',
    },
    {
        icon: Heart,
        title: 'Favorites',
        description: 'Save your best prompts to a personal favorites collection.',
    },
    {
        icon: Palette,
        title: 'Beautiful Design',
        description: 'Modern, clean interface with smooth animations and glassmorphism.',
    },
    {
        icon: Smartphone,
        title: 'Mobile Optimized',
        description: 'Designed for one-handed use with responsive layouts.',
    },
];

export default function FeaturesPage() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Powerful <span className="gradient-text">Features</span>
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            Everything you need to create stunning AI-generated images, all packed into one beautiful app.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                delay={index * 0.05}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* App Screenshots */}
            <AppScreenshots />

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-foreground/70 mb-8">
                            Download PromptBoard now and unlock all these amazing features.
                        </p>
                        <DownloadButton size="large" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
