// This file provides metadata generation helpers
// Each page can import and use these for consistent SEO

export function generatePageMeta(title, description, path = '') {
  const base = 'Brand Grow Studio';
  const url = `https://brandgrowstudio.com${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${base}`,
      description,
      url,
      siteName: base,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${base}`,
      description,
    },
  };
}
