export default function sitemap() {
  const baseUrl = 'https://brandgrowstudio.com';
  const lastModified = new Date();

  const pages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, priority: 0.9 },
    { url: `${baseUrl}/studio`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/pricing`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
  ];

  return pages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: 'weekly',
    priority: page.priority,
  }));
}
