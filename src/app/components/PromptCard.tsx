'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface PromptCardProps {
    title: string;
    tag: string;
    model: string;
    prompt: string;
    imageUrl: string;
    color?: string;
}

const modelColors: Record<string, string> = {
    'OpenAI': 'from-green-500 to-emerald-600',
    'Google': 'from-blue-500 to-indigo-600',
    'Meta': 'from-blue-600 to-purple-600',
    'DeepSeek': 'from-orange-500 to-red-600',
    'Copilot': 'from-cyan-500 to-blue-600',
};

export default function PromptCard({ title, tag, model, prompt, imageUrl, color }: PromptCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const gradientClass = color || modelColors[model] || 'from-green-500 to-emerald-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="masonry-item"
        >
            <motion.div
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden card-hover"
            >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Model Tag */}
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${gradientClass}`}>
                        {tag}
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-foreground/70 line-clamp-3 mb-4">{prompt}</p>

                    {/* Copy Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCopy}
                        className={`
              w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg
              font-medium text-sm transition-all duration-300
              ${copied
                                ? 'bg-green-500/20 text-green-500'
                                : 'glass hover:bg-primary/10'
                            }
            `}
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4" />
                                Copy Prompt
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}
