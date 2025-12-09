'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-xl mx-auto">
                            Have questions, feedback, or suggestions? We&apos;d love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-card p-8"
                        >
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                    <p className="text-foreground/70">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-black/20 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-black/20 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-black/20 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl glass bg-white/5 dark:bg-black/20 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <p className="text-foreground/70">contact@promptboard.app</p>
                                        <p className="text-foreground/50 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-pink-400 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Social</h3>
                                        <p className="text-foreground/70">@promptboard on Twitter</p>
                                        <p className="text-foreground/50 text-sm mt-1">Follow for updates and tips</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Support Hours</h3>
                                        <p className="text-foreground/70">Monday - Friday</p>
                                        <p className="text-foreground/50 text-sm mt-1">9:00 AM - 6:00 PM IST</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Location</h3>
                                        <p className="text-foreground/70">India</p>
                                        <p className="text-foreground/50 text-sm mt-1">Remote-first team</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
