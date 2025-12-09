'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PromptCard from '../components/PromptCard';
import FilterChips from '../components/FilterChips';

const filters = ['All', 'OpenAI', 'Google', 'Meta', 'DeepSeek', 'Copilot'];

const prompts = [
    {
        id: 1,
        title: 'Boat',
        model: 'Google',
        tag: 'Google – Imagen',
        prompt: 'Cinematic shot from behind of a woman with long brown hair paddling a dark canoe through a misty lake at sunrise, surrounded by towering pine trees, golden light filtering through fog, photorealistic, 8K resolution, dramatic lighting',
        imageUrl: '/gallery/boat.jpg',
    },
    {
        id: 2,
        title: 'Cute Dog',
        model: 'Google',
        tag: 'Google – Nano',
        prompt: 'A high-quality, photorealistic image of a pug wrapped in a cozy cream-colored knitted blanket, sitting on a soft bed, warm indoor lighting, adorable expression, shallow depth of field, professional pet photography',
        imageUrl: '/gallery/dog.jpg',
    },
    {
        id: 3,
        title: 'Cyberpunk City',
        model: 'OpenAI',
        tag: 'OpenAI – DALL-E 3',
        prompt: 'Futuristic cyberpunk cityscape at night, neon-lit skyscrapers with holographic advertisements, flying cars, rain-slicked streets reflecting colorful lights, dense urban environment, ultra-detailed, cinematic composition',
        imageUrl: '/gallery/cyberpunk.jpg',
    },
    {
        id: 4,
        title: 'Fantasy Forest',
        model: 'Meta',
        tag: 'Meta – Imagine',
        prompt: 'Enchanted fantasy forest with bioluminescent plants and magical fireflies, ancient twisted trees with glowing runes, mystical fog, ethereal atmosphere, vibrant colors, digital art style, highly detailed',
        imageUrl: '/gallery/forest.jpg',
    },
    {
        id: 5,
        title: 'Space Explorer',
        model: 'DeepSeek',
        tag: 'DeepSeek – Janus',
        prompt: 'Astronaut standing on the edge of a cliff on an alien planet, looking at a massive ringed gas giant in the sky, dramatic lighting, space suit with reflective visor, science fiction, epic scale, hyper-realistic',
        imageUrl: '/gallery/space.jpg',
    },
    {
        id: 6,
        title: 'Abstract Art',
        model: 'Copilot',
        tag: 'Copilot – Designer',
        prompt: 'Abstract fluid art composition with swirling gradients of deep blue, cyan, and purple, metallic gold accents, marble texture, luxury aesthetic, high resolution, perfect for wallpaper',
        imageUrl: '/gallery/abstract.jpg',
    },
    {
        id: 7,
        title: 'Japanese Garden',
        model: 'OpenAI',
        tag: 'OpenAI – DALL-E 3',
        prompt: 'Serene Japanese zen garden in autumn, koi pond with traditional wooden bridge, red maple leaves falling, stone lanterns, perfectly raked sand patterns, golden hour lighting, photorealistic',
        imageUrl: '/gallery/garden.jpg',
    },
    {
        id: 8,
        title: 'Portrait',
        model: 'Google',
        tag: 'Google – Imagen 3',
        prompt: 'Professional studio portrait of a young woman with freckles, natural makeup, soft lighting from the left, neutral background, shallow depth of field, fashion photography style, 85mm lens, high-end editorial look',
        imageUrl: '/gallery/portrait.jpg',
    },
    {
        id: 9,
        title: 'Steampunk Machine',
        model: 'Meta',
        tag: 'Meta – Imagine',
        prompt: 'Intricate steampunk mechanical device with brass gears, copper pipes, and glass tubes, Victorian industrial aesthetic, workshop setting, dramatic side lighting, detailed textures, concept art style',
        imageUrl: '/gallery/steampunk.jpg',
    },
    {
        id: 10,
        title: 'Northern Lights',
        model: 'DeepSeek',
        tag: 'DeepSeek – Janus',
        prompt: 'Spectacular aurora borealis over a frozen lake in Norway, vibrant green and purple lights dancing in the night sky, stars visible, snow-covered mountains in the background, long exposure photography style',
        imageUrl: '/gallery/aurora.jpg',
    },
    {
        id: 11,
        title: 'Anime Character',
        model: 'Copilot',
        tag: 'Copilot – Designer',
        prompt: 'Beautiful anime girl with long silver hair and blue eyes, wearing a futuristic combat suit, dynamic pose, cherry blossoms in background, detailed anime art style, vibrant colors, professional illustration',
        imageUrl: '/gallery/anime.jpg',
    },
    {
        id: 12,
        title: 'Vintage Car',
        model: 'OpenAI',
        tag: 'OpenAI – DALL-E 3',
        prompt: 'Classic 1960s convertible sports car in candy apple red, parked on a coastal road at sunset, ocean view, golden hour lighting, chrome details reflecting sunlight, automotive photography, magazine cover quality',
        imageUrl: '/gallery/car.jpg',
    },
];

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredPrompts = useMemo(() => {
        if (activeFilter === 'All') return prompts;
        return prompts.filter((prompt) => prompt.model === activeFilter);
    }, [activeFilter]);

    return (
        <div className="pt-24 pb-16">
            {/* Header */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Prompt <span className="gradient-text">Gallery</span>
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                            Browse our curated collection of AI image prompts. Click to copy and create stunning images instantly.
                        </p>
                    </motion.div>

                    {/* Filter Chips */}
                    <FilterChips
                        filters={filters}
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                    />
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        layout
                        className="masonry-grid"
                    >
                        {filteredPrompts.map((prompt) => (
                            <PromptCard
                                key={prompt.id}
                                title={prompt.title}
                                tag={prompt.tag}
                                model={prompt.model}
                                prompt={prompt.prompt}
                                imageUrl={prompt.imageUrl}
                            />
                        ))}
                    </motion.div>

                    {filteredPrompts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-foreground/70">No prompts found for this filter.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
