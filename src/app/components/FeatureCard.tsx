'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 card-hover group"
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300"
            >
                <Icon className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-foreground/70">{description}</p>
        </motion.div>
    );
}
