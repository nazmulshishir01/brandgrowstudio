'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, Button, Chip } from '@/components/ui';
import { RevealOnScroll, StaggerContainer, StaggerItem, PageTransition } from '@/components/animations';
import { SITE } from '@/lib/data';
import { CTABanner } from '@/app/page';
import { Instagram, Youtube, Music2, Pin, ExternalLink } from 'lucide-react';

const ABOUT_WHY = [
  { icon: '🏗️', title: 'Built for Brands', desc: 'Every service is designed to help your brand grow — not just create content for the sake of it.' },
  { icon: '🎨', title: 'Creative Excellence', desc: 'We bring a fresh, modern aesthetic to every project. No cookie-cutter work.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Quick delivery without compromising quality. We respect your timelines.' },
  { icon: '🤝', title: 'Collaborative Process', desc: 'We work alongside you, not just for you. Your vision drives our creative process.' },
];

const SOCIALS = [
  { name: 'Instagram', icon: Instagram, href: SITE.socials.instagram, handle: '@brandgrowstudio' },
  { name: 'YouTube', icon: Youtube, href: SITE.socials.youtube, handle: 'BrandGrowOfficial' },
  { name: 'TikTok', icon: Music2, href: SITE.socials.tiktok, handle: '@brandgrowstudio' },
  { name: 'Pinterest', icon: Pin, href: SITE.socials.pinterest, handle: 'BrandGrowOfficial' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3CC76A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <Container>
          <RevealOnScroll>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-ink-primary tracking-tight">About Brand Grow Studio</h1>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Story */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-300 rounded-3xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '25px 25px' }} />
                <span className="text-[80px] relative z-10">🏢</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <h2 className="font-display font-extrabold text-[clamp(24px,3.5vw,36px)] text-ink-primary leading-tight tracking-tight mb-5">
                We are a one-stop creative studio and marketing agency in Dhaka.
              </h2>
              <div className="bg-brand-50 rounded-xl p-5 mb-6 border-l-4 border-brand-400">
                <span className="font-display font-bold text-brand-500">Our Mission:</span>
                <span className="text-ink-secondary font-body ml-2">To help brands grow through powerful visual content.</span>
              </div>
              <p className="text-base text-ink-secondary font-body leading-relaxed">
                Brand Grow Studio was born from a simple idea — that every brand in Bangladesh deserves access to world-class creative services. Based in Mirpur DOHS, Dhaka, we&apos;ve built a professional studio space where photography, videography, podcast recording, editing, and marketing all come together. Our team combines technical expertise with creative vision to deliver content that doesn&apos;t just look good — it drives real business growth for brands of all sizes.
              </p>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-surface-secondary">
        <Container>
          <SectionHeader chip="WHY BRANDS CHOOSE US" title="What Makes Us Different" center />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ABOUT_WHY.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow h-full text-center">
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                  <h4 className="font-display font-bold text-base text-ink-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-ink-muted font-body leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <Container>
          <SectionHeader title="Trusted by Brands" center />
          <RevealOnScroll>
            <div className="flex flex-wrap gap-5 justify-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className="w-36 h-16 bg-surface-secondary rounded-xl flex items-center justify-center text-sm text-ink-muted font-body border border-gray-100 hover:border-brand-200 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  Client Brand {i}
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Socials */}
      <section className="py-20 bg-surface-secondary">
        <Container>
          <SectionHeader title="Follow Us" center />
          <RevealOnScroll>
            <div className="flex flex-wrap gap-4 justify-center">
              {SOCIALS.map(({ name, icon: Icon, href, handle }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border border-gray-100 hover:border-brand-300 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} className="text-ink-muted group-hover:text-brand-400 transition-colors" />
                  <div>
                    <div className="font-body font-semibold text-sm text-ink-primary">{name}</div>
                    <div className="text-xs text-ink-muted">{handle}</div>
                  </div>
                  <ExternalLink size={12} className="text-ink-faint ml-2" />
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
