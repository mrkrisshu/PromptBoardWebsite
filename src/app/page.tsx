'use client';

import { motion } from 'framer-motion';
import { Zap, Palette, Filter, Moon, Smartphone, Sparkles } from 'lucide-react';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import AppScreenshots from './components/AppScreenshots';
import DownloadButton from './components/DownloadButton';
import Link from 'next/link';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate high-quality prompts instantly with our optimized engine.',
  },
  {
    icon: Sparkles,
    title: 'High-Quality Prompts',
    description: 'Curated collection of prompts that produce stunning AI images.',
  },
  {
    icon: Moon,
    title: 'Dark/Light Mode',
    description: 'Seamlessly switch between themes for comfortable viewing.',
  },
  {
    icon: Filter,
    title: 'Model Filters',
    description: 'Filter prompts by AI model: OpenAI, Google, Meta, and more.',
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'Clean, modern interface with smooth animations and glassmorphism.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Designed for mobile devices with responsive layouts.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Preview Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">PromptBoard</span>?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need to create stunning AI-generated images, all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <AppScreenshots />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create <span className="gradient-text">Stunning Images</span>?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
              Download PromptBoard now and unlock a world of creative possibilities with AI-powered prompts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DownloadButton size="large" />
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:neon-glow transition-all duration-300 font-medium"
              >
                Browse Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
