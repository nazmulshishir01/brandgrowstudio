'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeader, Button, Chip } from '@/components/ui';
import { RevealOnScroll, StaggerContainer, StaggerItem, PageTransition } from '@/components/animations';
import { PRICING_CARDS, FAQ_DATA } from '@/lib/data';
import { CTABanner } from '@/app/page';
import { Check, ChevronDown, Star } from 'lucide-react';

function PricingCard({ card, index }) {
  const isPop = card.popular;

  return (
    <StaggerItem>
      <motion.div
        className={`relative rounded-3xl p-8 h-full flex flex-col overflow-hidden ${
          isPop
            ? 'bg-gradient-to-br from-brand-400 via-brand-500 to-emerald-600 text-white shadow-glow-lg'
            : 'bg-white border border-gray-100 hover:border-brand-200'
        } hover-lift`}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Dot pattern overlay for popular */}
        {isPop && (
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
        )}

        {/* Popular badge */}
        {isPop && (
          <div className="absolute top-5 right-5 z-10">
            <span className="inline-flex items-center gap-1.5 bg-white text-brand-500 px-3 py-1 rounded-full text-xs font-body font-bold shadow-md">
              <Star size={11} fill="currentColor" /> Most Popular
            </span>
          </div>
        )}

        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className={`font-display font-bold text-xl mb-3 ${isPop ? 'text-white' : 'text-ink-primary'}`}>{card.name}</h3>
          <div className={`font-display font-extrabold text-[clamp(30px,4vw,40px)] leading-none ${isPop ? 'text-white' : 'text-brand-500'}`}>
            {card.price}
          </div>
          <div className={`text-sm font-body mt-1 mb-8 ${isPop ? 'text-white/70' : 'text-ink-muted'}`}>{card.unit}</div>

          <div className="space-y-3 flex-1">
            {card.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isPop ? 'bg-white/20' : 'bg-brand-50'
                }`}>
                  <Check size={12} className={isPop ? 'text-white' : 'text-brand-500'} />
                </div>
                <span className={`text-[15px] font-body ${isPop ? 'text-white/90' : 'text-ink-secondary'}`}>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              href="/contact"
              variant={isPop ? 'whiteFill' : 'primary'}
              full
            >
              {card.cta}
            </Button>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-brand-200 transition-colors duration-300"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="font-display font-semibold text-[15px] text-ink-primary pr-4 group-hover:text-brand-500 transition-colors">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-brand-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[15px] text-ink-secondary font-body leading-relaxed -mt-1">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3CC76A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <Container>
          <RevealOnScroll>
            <div className="text-center">
              <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-ink-primary tracking-tight">Simple, Transparent Pricing</h1>
              <p className="mt-3 text-lg text-ink-secondary font-body max-w-lg mx-auto">Quality creative services at competitive rates. No hidden fees.</p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <Container size="narrow">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {PRICING_CARDS.map((card, i) => (
              <PricingCard key={i} card={card} index={i} />
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-secondary">
        <Container size="narrow">
          <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about working with us." center />
          <div className="space-y-3 max-w-2xl mx-auto">
            {FAQ_DATA.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
