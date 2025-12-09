'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone, Shield, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import DownloadButton from '../components/DownloadButton';

const requirements = [
    'Android 7.0 (Nougat) or higher',
    'At least 50MB of free storage',
    'Internet connection for full functionality',
];

const steps = [
    {
        step: 1,
        title: 'Download APK',
        description: 'Click the download button below to get the latest version.',
    },
    {
        step: 2,
        title: 'Enable Unknown Sources',
        description: 'Go to Settings > Security > Allow installation from unknown sources.',
    },
    {
        step: 3,
        title: 'Install the App',
        description: 'Open the downloaded APK file and tap Install.',
    },
    {
        step: 4,
        title: 'Start Creating',
        description: 'Launch PromptBoard and explore amazing AI prompts!',
    },
];

export default function DownloadPage() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-400 mb-8 neon-glow"
                        >
                            <Smartphone className="w-12 h-12 text-white" />
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Download <span className="gradient-text">PromptBoard</span>
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-10">
                            Get the app on your Android device and start creating stunning AI images with perfect prompts.
                        </p>

                        <DownloadButton size="large" />

                        <p className="text-sm text-foreground/50 mt-4">
                            Version 1.0.0 • Android Only • Free to use
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Installation Steps */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-bold text-center mb-12"
                    >
                        Installation Guide
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {steps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className="text-foreground/70 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Requirements Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-xl font-semibold">Requirements</h3>
                            </div>
                            <ul className="space-y-3">
                                {requirements.map((req) => (
                                    <li key={req} className="flex items-center gap-2 text-foreground/70">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Security Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-6 h-6 text-green-500" />
                                <h3 className="text-xl font-semibold">Safe & Secure</h3>
                            </div>
                            <p className="text-foreground/70 mb-4">
                                PromptBoard is completely safe to install. The app:
                            </p>
                            <ul className="space-y-2 text-foreground/70 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    Contains no malware or viruses
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    Does not collect personal data
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    Works offline for saved prompts
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Note */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 border-l-4 border-green-500"
                    >
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold mb-1">Note</h4>
                                <p className="text-foreground/70 text-sm">
                                    PromptBoard is currently available for Android only. iOS version is coming soon.
                                    Stay tuned for updates!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
