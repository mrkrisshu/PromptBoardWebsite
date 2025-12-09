'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone } from 'lucide-react';

interface DownloadButtonProps {
    size?: 'small' | 'medium' | 'large';
    showIcon?: boolean;
}

export default function DownloadButton({ size = 'medium', showIcon = true }: DownloadButtonProps) {
    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/PromptBoard.apk';
        link.download = 'PromptBoard.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className={`
        inline-flex items-center gap-2 rounded-xl font-semibold
        bg-gradient-to-r from-green-500 via-emerald-500 to-green-600
        text-white shadow-lg hover:shadow-xl
        transition-all duration-300 animate-gradient
        ${sizeClasses[size]}
      `}
        >
            {showIcon && (
                <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <Download className="w-5 h-5" />
                </motion.div>
            )}
            Download APK
            <Smartphone className="w-4 h-4 opacity-70" />
        </motion.button>
    );
}
