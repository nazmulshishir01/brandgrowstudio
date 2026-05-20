'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, Button, Chip } from '@/components/ui';
import { RevealOnScroll, PageTransition } from '@/components/animations';
import { SERVICES } from '@/lib/data';
import { CTABanner } from '@/app/page';
import { ArrowRight, Check } from 'lucide-react';

function ServiceSection({ service, index }) {
  const reversed = index % 2 === 1;

  return (
    <section className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-surface-secondary'} relative overflow-hidden`}>
      {index % 2 === 0 && (
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-brand-50/40 rounded-full blur-[80px] pointer-events-none" />
      )}
      <Container>
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
          {/* Illustration */}
          <RevealOnScroll direction={reversed ? 'right' : 'left'}>
            <div className="lg:[direction:ltr]">
              <div className={`aspect-[4/3] bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden group`}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                <motion.span
                  className="text-[100px] relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.span>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </RevealOnScroll>

          {/* Content */}
          <RevealOnScroll direction={reversed ? 'left' : 'right'}>
            <div className="lg:[direction:ltr]">
              <h2 className="font-display font-extrabold text-[clamp(24px,3.5vw,38px)] text-ink-primary leading-tight tracking-tight mb-5">
                {service.icon} {service.name}
              </h2>
              <p className="text-base text-ink-secondary font-body leading-relaxed mb-8">{service.description}</p>

              <div className="space-y-3.5 mb-8">
                {service.includes.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-brand-500" />
                    </div>
                    <span className="text-[15px] text-ink-secondary font-body">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Chip variant="solid">{service.price}</Chip>
                <Button href="/contact" size="md">Book This Service <ArrowRight size={14} /></Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3CC76A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <Container>
          <RevealOnScroll>
            <p className="text-sm text-ink-muted font-body mb-2">Home / Services</p>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-ink-primary tracking-tight">Our Services</h1>
            <p className="mt-3 text-lg text-ink-secondary font-body max-w-lg">Everything your brand needs to grow — under one roof.</p>
          </RevealOnScroll>
        </Container>
      </section>

      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      <CTABanner />
    </PageTransition>
  );
}
