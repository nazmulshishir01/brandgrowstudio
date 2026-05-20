'use client';

import Link from 'next/link';
import { Logo, Container } from '@/components/ui';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/data';
import { RevealOnScroll } from '@/components/animations';
import { Instagram, Youtube, Music2, Pin } from 'lucide-react';

const socialIcons = [
  { name: 'Instagram', icon: Instagram, href: SITE.socials.instagram },
  { name: 'YouTube', icon: Youtube, href: SITE.socials.youtube },
  { name: 'TikTok', icon: Music2, href: SITE.socials.tiktok },
  { name: 'Pinterest', icon: Pin, href: SITE.socials.pinterest },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <Container>
        <div className="py-16 lg:py-20">
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <Logo />
                <p className="mt-4 text-sm text-ink-muted leading-relaxed font-body max-w-xs">
                  Grow Your Brand. Tell Your Story. Professional creative services from the heart of Dhaka.
                </p>
                <div className="flex gap-3 mt-6">
                  {socialIcons.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-ink-muted hover:bg-brand-400 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={name}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-display font-bold text-sm text-ink-primary mb-5 tracking-wide">Services</h4>
                <ul className="space-y-3">
                  {SERVICES.slice(0, 6).map((s) => (
                    <li key={s.id}>
                      <Link href="/services" className="text-sm text-ink-muted hover:text-brand-400 transition-colors font-body">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pages */}
              <div>
                <h4 className="font-display font-bold text-sm text-ink-primary mb-5 tracking-wide">Pages</h4>
                <ul className="space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-ink-muted hover:text-brand-400 transition-colors font-body">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-display font-bold text-sm text-ink-primary mb-5 tracking-wide">Contact</h4>
                <div className="space-y-3 text-sm text-ink-muted font-body leading-relaxed">
                  <p>📍 {SITE.address}</p>
                  <p>📞 {SITE.phone}</p>
                  <p>📧 {SITE.email}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ink-muted font-body">© 2025 Brand Grow Studio · Mirpur DOHS, Dhaka, Bangladesh</p>
            <p className="text-sm font-body font-semibold text-brand-400">{SITE.tagline}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
