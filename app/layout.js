import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingElements from '@/components/layout/FloatingElements';

export const metadata = {
  metadataBase: new URL('https://brandgrowstudio.com'),
  title: {
    default: 'Brand Grow Studio | Professional Photography, Video & Podcast Studio in Dhaka',
    template: '%s | Brand Grow Studio',
  },
  description: 'Professional Photography, Videography, Podcast Recording, Video Editing & Creative Marketing Studio in Mirpur DOHS, Dhaka, Bangladesh. Book your session today.',
  keywords: [
    'photography studio dhaka',
    'videography dhaka',
    'podcast studio bangladesh',
    'video editing service',
    'brand photography',
    'product photography dhaka',
    'mirpur dohs studio',
    'creative agency bangladesh',
    'ugc content creation',
    'youtube video editing',
    'brand grow studio',
  ],
  authors: [{ name: 'Brand Grow Studio' }],
  creator: 'Brand Grow Studio',
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: 'https://brandgrowstudio.com',
    siteName: 'Brand Grow Studio',
    title: 'Brand Grow Studio | Where Brands Come to Grow',
    description: 'Professional Photo, Video, Podcast & Marketing Studio in Mirpur DOHS, Dhaka.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Brand Grow Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Grow Studio | Where Brands Come to Grow',
    description: 'Professional Photo, Video, Podcast & Marketing Studio in Mirpur DOHS, Dhaka.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Brand Grow Studio',
    description: 'Professional Photography, Videography, Podcast & Marketing Studio',
    url: 'https://brandgrowstudio.com',
    telephone: '+8801937921124',
    email: 'brandgrow.official@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1034, Avenue 9, Road 9, Mirpur DOHS',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '23.8341', longitude: '90.3563' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Saturday','Sunday'], opens: '09:00', closes: '21:00' },
    priceRange: '৳৳',
    image: 'https://brandgrowstudio.com/images/og-image.jpg',
    sameAs: [
      'https://instagram.com/brandgrowstudio',
      'https://youtube.com/BrandGrowOfficial',
      'https://tiktok.com/brandgrowstudio',
      'https://pinterest.com/BrandGrowOfficial',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="noise-overlay">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingElements />
      </body>
    </html>
  );
}
