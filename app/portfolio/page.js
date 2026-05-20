'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button, Chip } from '@/components/ui';
import { RevealOnScroll, PageTransition } from '@/components/animations';
import { PORTFOLIO_ITEMS, FILTER_TABS } from '@/lib/data';

function getYoutubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      const videoId = parsedUrl.searchParams.get('v');
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;

      if (parsedUrl.pathname.includes('/shorts/')) {
        return `https://www.youtube.com/embed/${parsedUrl.pathname.split('/shorts/')[1]}`;
      }

      if (parsedUrl.pathname.includes('/embed/')) {
        return url;
      }
    }

    return null;
  } catch {
    return null;
  }
}

function PortfolioCard({ item, index }) {
  const isVideo = item.type === 'video';
  const embedUrl = isVideo ? getYoutubeEmbedUrl(item.youtubeUrl) : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="break-inside-avoid mb-5"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-heavy transition-all duration-500 hover:-translate-y-2 group">
        <div
          className="relative overflow-hidden bg-gray-100"
          style={{ aspectRatio: item.aspect || '16/9' }}
        >
          {isVideo ? (
            embedUrl ? (
              <iframe
                src={embedUrl}
                title={item.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-red-50 text-red-500 text-sm font-semibold">
                YouTube URL missing
              </div>
            )
          ) : (
            <div className="absolute inset-0">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                  <span className="text-5xl opacity-30">📸</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-5">
          <Chip className="mb-2 !text-[11px] !px-3 !py-1">
            {item.category}
          </Chip>

          <h4 className="font-display font-bold text-[15px] text-ink-primary mb-1 leading-snug">
            {item.title}
          </h4>

          <p className="text-sm text-ink-muted font-body leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <section className="pt-28 pb-12 bg-brand-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #3CC76A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <Container>
          <RevealOnScroll>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-ink-primary tracking-tight">
              Our Work
            </h1>

            <p className="mt-3 text-lg text-ink-secondary font-body max-w-lg">
              Real projects. Real results. Explore our work across every service.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <div className="sticky top-[76px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
        <Container>
          <div className="py-4 flex gap-2.5 overflow-x-auto no-scrollbar">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-5 py-2 rounded-full text-sm font-body font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeFilter === tab
                    ? 'bg-brand-400 text-white shadow-glow'
                    : 'bg-transparent text-ink-muted border border-gray-200 hover:border-brand-300 hover:text-brand-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <PortfolioCard
                  key={`${activeFilter}-${i}`}
                  item={item}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-14 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}