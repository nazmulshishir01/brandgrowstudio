'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, Button } from '@/components/ui';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  PageTransition,
} from '@/components/animations';
import { EQUIPMENT_LIST } from '@/lib/data';
import { Check } from 'lucide-react';

const STUDIO_IMAGES = [
  {
    src: '/studio/studio2.png',
    alt: 'Brand Grow Studio photography and video setup',
    span: 'col-span-1 row-span-2',
    ratio: '1/1.3',
  },
  {
    src: '/studio/studio1.png',
    alt: 'Brand Grow Studio lighting setup',
    span: '',
    ratio: '1/1',
  },
  {
    src: '/studio/studio3.png',
    alt: 'Brand Grow Studio podcast recording setup',
    span: '',
    ratio: '1/1',
  },
  // {
  //   src: '/studio/studio4.png',
  //   alt: 'Brand Grow Studio creative workspace',
  //   span: 'col-span-2',
  //   ratio: '16/7',
  // },
];

export default function StudioPage() {
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
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-ink-primary tracking-tight">
              Our Studio
            </h1>
            <p className="mt-3 text-lg text-ink-secondary font-body max-w-lg">
              A professional creative space built for brands and creators.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Main content */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Gallery */}
            <RevealOnScroll direction="left">
              <div className="grid grid-cols-2 gap-3">
                {STUDIO_IMAGES.map((tile, i) => (
                  <motion.div
                    key={i}
                    className={`${tile.span} rounded-2xl relative overflow-hidden shine-effect cursor-pointer bg-brand-100 shadow-soft group`}
                    style={{ aspectRatio: tile.ratio }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={tile.src}
                      alt={tile.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-80" />
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Details */}
            <RevealOnScroll direction="right">
              <h2 className="font-display font-extrabold text-[clamp(24px,3.5vw,36px)] text-ink-primary leading-tight tracking-tight mb-5">
                A Professional Space Built for Creators
              </h2>
              <p className="text-base text-ink-secondary font-body leading-relaxed mb-8">
                Our studio in Mirpur DOHS is fully equipped with everything you
                need to produce professional-grade content. From photography and
                videography to podcast recording, we&apos;ve created a
                comfortable, controlled environment that lets you focus on
                creating while we handle the technical setup.
              </p>

              <StaggerContainer className="space-y-0 mb-10">
                {EQUIPMENT_LIST.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-4 py-3.5 border-b border-gray-100 group">
                      <div className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-400 group-hover:text-white transition-colors duration-300">
                        <Check
                          size={14}
                          className="text-brand-500 group-hover:text-white"
                        />
                      </div>
                      <span className="text-[15px] text-ink-secondary font-body">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Pricing card */}
              {/* <motion.div
                className="bg-brand-50 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="text-sm text-ink-muted font-body font-medium">
                    Studio Rent
                  </div>
                  <div className="font-display font-extrabold text-3xl text-brand-500">
                    ৳2,000–3,000{' '}
                    <span className="text-sm font-medium text-ink-muted">
                      BDT/session
                    </span>
                  </div>
                </div>
                <Button href="/contact">Book Studio</Button>
              </motion.div> */}
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-20 bg-surface-secondary">
        <Container>
          <SectionHeader
            title="Find Us"
            subtitle="We're located in Mirpur DOHS — easy access from anywhere in Dhaka."
            center
          />

          <RevealOnScroll>
            <div className="rounded-3xl overflow-hidden shadow-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5!2d90.3563!3d23.8341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMirpur+DOHS!5e0!3m2!1sen!2sbd!4v1"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Brand Grow Studio Location"
              />
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </PageTransition>
  );
}