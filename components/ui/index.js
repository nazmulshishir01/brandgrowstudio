'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagneticHover } from '@/components/animations';
import clsx from 'clsx';

// ─── LOGO ───
export function Logo({ size = 'md', light = false }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const imageSizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div
        className={clsx(
          sizes[size],
          'rounded-full bg-brand-400 flex items-center justify-center relative flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-110'
        )}
      >
        <img
          src="/logo.png"
          alt="Brand Grow Studio Logo"
          className={clsx(imageSizes[size], 'w-auto object-contain')}
        />

        <span className="absolute -top-0.5 -right-0.5 text-white text-[8px]">
          ✦
        </span>
      </div>

      <div className="leading-none">
        <div
          className={clsx(
            'font-display font-extrabold tracking-tight',
            textSizes[size],
            light ? 'text-white' : 'text-ink-primary'
          )}
        >
          BrandGrow
        </div>

        <div
          className={clsx(
            'font-body font-medium text-[10px] tracking-[3px] uppercase',
            light ? 'text-white/60' : 'text-ink-muted'
          )}
        >
          STUDIO
        </div>
      </div>
    </Link>
  );
}

// ─── BUTTON ───
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  full,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-300 relative overflow-hidden magnetic-btn shine-effect';

  const variants = {
    primary:
      'bg-brand-400 text-white hover:bg-brand-500 hover:shadow-glow-lg active:scale-[0.97]',
    outline:
      'border-2 border-brand-400 text-brand-400 hover:bg-brand-50 active:scale-[0.97]',
    white:
      'border-2 border-white text-white hover:bg-white hover:text-brand-400 active:scale-[0.97]',
    whiteFill: 'bg-white text-brand-500 hover:shadow-heavy active:scale-[0.97]',
    ghost: 'text-brand-400 hover:bg-brand-50',
  };

  const sizeMap = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-[15px]',
    lg: 'px-10 py-4 text-base',
  };

  const cls = clsx(
    base,
    variants[variant],
    sizeMap[size],
    full && 'w-full',
    className
  );

  if (href) {
    return (
      <MagneticHover strength={0.15}>
        <Link href={href} className={cls} {...props}>
          {children}
        </Link>
      </MagneticHover>
    );
  }

  return (
    <MagneticHover strength={0.15}>
      <button className={cls} {...props}>
        {children}
      </button>
    </MagneticHover>
  );
}

// ─── CHIP / BADGE ───
export function Chip({ children, variant = 'light', className = '' }) {
  const variants = {
    light: 'bg-brand-50 text-brand-500 border-brand-100',
    solid: 'bg-brand-400 text-white border-brand-400',
    outline: 'bg-transparent text-brand-400 border-brand-400',
    white: 'bg-white/20 text-white border-white/30',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-body font-semibold tracking-wide rounded-full border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// ─── SECTION HEADER ───
export function SectionHeader({
  chip,
  title,
  subtitle,
  center,
  light,
  className = '',
}) {
  return (
    <div className={clsx('mb-14', center && 'text-center', className)}>
      {chip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Chip variant={light ? 'white' : 'light'}>{chip}</Chip>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={clsx(
          'font-display font-extrabold text-[clamp(28px,4.5vw,46px)] leading-[1.1] tracking-tight text-balance',
          light ? 'text-white' : 'text-ink-primary'
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={clsx(
            'mt-4 font-body text-lg leading-relaxed max-w-2xl',
            center && 'mx-auto',
            light ? 'text-white/75' : 'text-ink-muted'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ─── CONTAINER ───
export function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
  };

  return (
    <div className={clsx(sizes[size], 'mx-auto px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  );
}