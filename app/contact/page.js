'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeader, Button } from '@/components/ui';
import { RevealOnScroll, StaggerContainer, StaggerItem, PageTransition } from '@/components/animations';
import { SITE } from '@/lib/data';
import { Send, MapPin, Phone, Mail, Instagram, Youtube, Music2, Pin, ExternalLink, CheckCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Product Photography',
  'Fashion Photography',
  'Videography',
  'Podcast Recording',
  'Photo Editing',
  'Video Editing',
  'Reels Editing',
  'Branding & Ads',
  'Studio Rent',
  'Other',
];

const SOCIALS = [
  { name: 'Instagram', icon: Instagram, href: SITE.socials.instagram },
  { name: 'YouTube', icon: Youtube, href: SITE.socials.youtube },
  { name: 'TikTok', icon: Music2, href: SITE.socials.tiktok },
  { name: 'Pinterest', icon: Pin, href: SITE.socials.pinterest },
];

function InputField({ label, type = 'text', placeholder, value, onChange, ...props }) {
  return (
    <div>
      <label className="block text-sm font-body font-semibold text-ink-primary mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-3.5 rounded-xl bg-surface-secondary border border-gray-200 text-ink-primary font-body text-[15px] placeholder:text-ink-faint outline-none transition-all duration-300 focus:border-brand-400 focus:ring-4 focus:ring-brand-400/10 hover:border-gray-300"
        {...props}
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <PageTransition>
      {/* Green Hero */}
      <section className="pt-28 pb-32 bg-gradient-to-br from-brand-400 via-brand-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <Container>
          <RevealOnScroll>
            <div className="text-center relative z-10">
              <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-white tracking-tight">Let&apos;s Create Together</h1>
              <p className="mt-3 text-lg text-white/80 font-body max-w-lg mx-auto">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Form Card */}
      <section className="-mt-20 pb-20 relative z-10">
        <Container size="narrow">
          <RevealOnScroll>
            <motion.div
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-heavy max-w-2xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle size={64} className="text-brand-400 mx-auto mb-5" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-ink-primary mb-3">Message Sent!</h3>
                  <p className="text-ink-muted font-body">We&apos;ll get back to you within 24 hours. Thank you!</p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', details: '' }); }} variant="outline" className="mt-6">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <InputField label="Full Name" placeholder="Your full name" value={form.name} onChange={update('name')} required />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="Phone Number" type="tel" placeholder="+880" value={form.phone} onChange={update('phone')} required />
                    <InputField label="Email Address" type="email" placeholder="you@email.com" value={form.email} onChange={update('email')} required />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-ink-primary mb-2">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={update('service')}
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-surface-secondary border border-gray-200 text-ink-primary font-body text-[15px] outline-none transition-all duration-300 focus:border-brand-400 focus:ring-4 focus:ring-brand-400/10 hover:border-gray-300 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-ink-primary mb-2">Project Details</label>
                    <textarea
                      value={form.details}
                      onChange={update('details')}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={5}
                      className="w-full px-5 py-3.5 rounded-xl bg-surface-secondary border border-gray-200 text-ink-primary font-body text-[15px] placeholder:text-ink-faint outline-none transition-all duration-300 focus:border-brand-400 focus:ring-4 focus:ring-brand-400/10 hover:border-gray-300 resize-vertical"
                    />
                  </div>

                  <Button type="submit" full size="lg" className={submitting ? 'opacity-80 pointer-events-none' : ''}>
                    {submitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-surface-secondary">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-14">
            {[
              { icon: MapPin, label: 'Address', value: SITE.address },
              { icon: Phone, label: 'Phone', value: SITE.phone },
              { icon: Mail, label: 'Email', value: SITE.email },
            ].map(({ icon: Icon, label, value }) => (
              <StaggerItem key={label}>
                <div className="bg-white rounded-2xl p-7 text-center border border-gray-100 hover:border-brand-200 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-brand-500" />
                  </div>
                  <div className="font-display font-bold text-sm text-ink-primary mb-1">{label}</div>
                  <div className="text-sm text-ink-muted font-body leading-relaxed">{value}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Map */}
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

          {/* Social Links */}
          <div className="mt-14 flex flex-wrap gap-4 justify-center">
            {SOCIALS.map(({ name, icon: Icon, href }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 bg-white rounded-full border border-gray-100 hover:border-brand-300 hover:shadow-glow transition-all duration-300 font-body font-semibold text-sm text-ink-primary"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <Icon size={16} className="text-ink-muted" />
                {name}
                <ExternalLink size={11} className="text-ink-faint" />
              </motion.a>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
