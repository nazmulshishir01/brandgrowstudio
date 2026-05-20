'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, Button, Chip } from '@/components/ui';
import { RevealOnScroll, StaggerContainer, StaggerItem, CountUp, ParallaxFloat, TextReveal, CursorGlow } from '@/components/animations';
import { SERVICES, STATS, WHY_US } from '@/lib/data';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

// ─── HERO ───
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <CursorGlow />

      {/* Morphing blob */}
      <div className="absolute top-[-10%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-br from-brand-100/60 to-brand-200/30 animate-morph blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-brand-50/50 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3CC76A 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Container>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Chip>
                <Sparkles size={12} className="text-brand-400" />
                Dhaka&apos;s Creative Studio
              </Chip>
            </motion.div>

            <h1 className="mt-6 font-display font-extrabold text-[clamp(40px,6vw,72px)] leading-[1.04] tracking-tight">
              <motion.span
                className="block text-ink-primary"
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Where Brands
              </motion.span>
              <motion.span
                className="block gradient-text relative"
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Come to Grow.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none">
                  <motion.path
                    d="M2 7 Q75 2 150 5 Q225 8 298 3"
                    stroke="#3CC76A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.2, delay: 1 }}
                  />
                </svg>
              </motion.span>
            </h1>

            <motion.p
              className="mt-6 text-lg text-ink-secondary leading-relaxed max-w-lg font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Professional Photo, Video, Podcast & Marketing Studio in Mirpur DOHS, Dhaka, Bangladesh
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <Button href="/contact" size="lg">Book a Session <ArrowRight size={16} /></Button>
              <Button href="/portfolio" variant="outline" size="lg">See Our Work</Button>
            </motion.div>

            {/* <motion.div
              className="mt-10 flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[['📸', 'Photography'], ['🎬', 'Videography'], ['🎙', 'Podcast'], ['📣', 'Marketing']].map(([icon, label]) => (
                <span key={label} className="flex items-center gap-2 text-sm text-ink-muted font-body font-medium">
                  <span className="text-base">{icon}</span> {label}
                </span>
              ))}
            </motion.div> */}
          </div>

          {/* Right — Creative Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[420px] lg:h-[480px]">
              {[
                { col: 'col-span-7', row: 'row-span-3', bg: 'from-brand-400 to-brand-500', label: '📸 Studio Shoot', delay: 0.6 },
                { col: 'col-span-5', row: 'row-span-2', bg: 'from-brand-300 to-brand-400', label: '🎬 Video', delay: 0.7 },
                { col: 'col-span-5', row: 'row-span-4', bg: 'from-brand-500 to-emerald-600', label: '🎙 Podcast', delay: 0.8 },
                { col: 'col-span-7', row: 'row-span-2', bg: 'from-brand-200 to-brand-400', label: '🖼 Editing', delay: 0.85 },
                // { col: 'col-span-12', row: 'row-span-1', bg: 'from-brand-400/80 to-brand-300/80', label: '📣 Full-Service Creative Agency', delay: 0.9 },
              ].map((tile, i) => (
                <motion.div
                  key={i}
                  className={`${tile.col} ${tile.row} bg-gradient-to-br ${tile.bg} rounded-2xl flex items-center justify-center text-white font-body font-semibold text-sm hover:scale-[1.03] transition-transform duration-500 cursor-pointer shine-effect relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: tile.delay, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="relative z-10">{tile.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-5 py-3 shadow-medium flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {/* <span className="text-brand-400 text-sm">✦</span>
              <span className="font-body font-semibold text-sm text-ink-primary">Mirpur DOHS, Dhaka</span> */}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ─── STATS BAR ───
function StatsBar() {
  return (
    <section className="relative bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
      <Container>
        <div className="py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          {STATS.map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="font-display font-extrabold text-[clamp(36px,5vw,54px)] text-white leading-none">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/75 font-body font-medium">{stat.label}</div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── SERVICES OVERVIEW ───
function ServicesOverview() {
  return (
    <section className="py-24 bg-surface-secondary relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-50/50 rounded-full blur-[100px] pointer-events-none" />
      <Container>
        <SectionHeader chip="WHAT WE DO" title="Everything Your Brand Needs" subtitle="From photoshoots to podcasts, from reels to full-scale marketing — we've got every creative service covered." center />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <Link href="/services" className="block group">
                <div className="bg-white rounded-2xl p-7 border-l-4 border-brand-100 hover:border-brand-400 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
                  <h3 className="font-display font-bold text-lg text-ink-primary mb-2">{service.name}</h3>
                  <p className="text-sm text-ink-muted font-body leading-relaxed mb-4">{service.short}</p>
                  <span className="text-sm font-body font-semibold text-brand-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

// ─── SHOWREEL ───
function Showreel() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(60,199,106,0.15) 0%, transparent 50%)',
        }}
      />

      <Container size="narrow">
        <SectionHeader title="See Us in Action" center />

        <RevealOnScroll>
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-glow-lg bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2b_Lnz3tHGw"
                title="Showreel Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

// ─── WHY CHOOSE US ───
function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      <Container>
        <SectionHeader chip="WHY US" title="Why Brands Trust Brand Grow Studio" center />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow h-full text-center">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                <h4 className="font-display font-bold text-base text-ink-primary mb-2">{item.title}</h4>
                <p className="text-sm text-ink-muted font-body leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

// ─── CTA BANNER ───
export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-600" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
      <Container>
        <RevealOnScroll>
          <div className="py-20 lg:py-24 text-center relative z-10">
            <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,44px)] text-white leading-tight tracking-tight text-balance">
              Ready to Create Something Amazing?
            </h2>
            <p className="mt-4 text-lg text-white/80 font-body">Book your studio session or editing project today.</p>
            <motion.div className="mt-8" whileHover={{ scale: 1.02 }}>
              <Button href="/contact" variant="whiteFill" size="lg">Get Started <ArrowRight size={16} /></Button>
            </motion.div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

// ─── PAGE ───
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <Showreel />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
