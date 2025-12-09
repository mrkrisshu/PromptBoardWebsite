'use client';

import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mt-auto py-8 glass border-t border-glass-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo & Copyright */}
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <span>© {currentYear} PromptBoard. All rights reserved.</span>
                    </div>

                    {/* Developer Attribution */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-2 text-sm"
                    >
                        <span className="text-foreground/70">Developed with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </motion.div>
                        <span className="text-foreground/70">by</span>
                        <Link
                            href="https://krishnabantola.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium gradient-text hover:underline flex items-center gap-1"
                        >
                            Krishna Bantola
                            <ExternalLink className="w-3 h-3" />
                        </Link>
                    </motion.div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                        <Link href="/about" className="hover:text-foreground transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-foreground transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
