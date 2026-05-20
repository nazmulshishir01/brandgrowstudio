'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeader, Button } from '@/components/ui';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  PageTransition,
} from '@/components/animations';
import { PRICING_CARDS, FAQ_DATA } from '@/lib/data';
import { CTABanner } from '@/app/page';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';

function PricingCard({ card, index }) {
  return (
    <StaggerItem>
      <motion.div
        className="relative h-full rounded-3xl bg-white border border-gray-100 p-7 lg:p-8 shadow-soft hover:shadow-glow transition-all duration-500 overflow-hidden group"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-500" />

        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-brand-50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-7">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 font-display font-extrabold text-lg">
              {index + 1}
            </div>

            <h3 className="font-display font-extrabold text-xl text-ink-primary mb-3">
              {card.name}
            </h3>

            <div className="flex items-end gap-2">
              <div className="font-display font-extrabold text-[clamp(30px,4vw,42px)] leading-none text-brand-500">
                {card.price}
              </div>
            </div>

            <div className="mt-2 text-sm font-body text-ink-muted">
              {card.unit}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-7" />

          <div className="space-y-4 flex-1">
            {card.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 group-hover:bg-brand-100 transition-colors">
                  <Check size={13} className="text-brand-500" />
                </div>

                <span className="text-[15px] font-body text-ink-secondary leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/contact" full>
              {card.cta} <ArrowRight size={15} />
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
        <span className="font-display font-semibold text-[15px] text-ink-primary pr-4 group-hover:text-brand-500 transition-colors">
          {faq.question}
        </span>

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
            <p className="px-6 pb-6 text-[15px] text-ink-secondary font-body leading-relaxed -mt-1">
              {faq.answer}
            </p>
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
            <div className="text-center">
              <p className="text-sm text-brand-500 font-body font-semibold mb-3 tracking-wide uppercase">
                Pricing
              </p>

              <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-ink-primary tracking-tight">
                Simple, Transparent Pricing
              </h1>

              <p className="mt-4 text-lg text-ink-secondary font-body max-w-xl mx-auto leading-relaxed">
                Choose the right creative service for your brand. Clear packages,
                professional delivery, and no hidden fees.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-[260px] h-[260px] bg-brand-50 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-emerald-50 rounded-full blur-[100px] pointer-events-none" />

        <Container>
          <SectionHeader
            chip="OUR PACKAGES"
            title="Flexible Plans for Every Creative Need"
            subtitle="Start small, scale bigger, or contact us for a custom production plan."
            center
          />

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            staggerDelay={0.12}
          >
            {PRICING_CARDS.map((card, i) => (
              <PricingCard key={i} card={card} index={i} />
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-secondary">
        <Container size="narrow">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working with us."
            center
          />

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