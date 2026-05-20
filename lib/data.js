export const SITE = {
  name: 'Brand Grow Studio',
  tagline: 'Your Vision. Our Studio. Unlimited Growth.',
  description: 'Professional Photography, Videography, Podcast Recording, Video Editing & Creative Marketing Studio in Mirpur DOHS, Dhaka, Bangladesh.',
  url: 'https://brandgrowstudio.com',
  phone: '+880 1937-921124',
  email: 'brandgrow.official@gmail.com',
  address: '1034, Avenue 9, Road 9, Mirpur DOHS, Dhaka, Bangladesh',
  whatsapp: 'https://wa.me/8801937921124',
  socials: {
    instagram: 'https://instagram.com/brandgrowstudio',
    youtube: 'https://youtube.com/BrandGrowOfficial',
    tiktok: 'https://tiktok.com/brandgrowstudio',
    pinterest: 'https://pinterest.com/BrandGrowOfficial',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Studio', href: '/studio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const STATS = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: '', label: 'Services Offered' },
  { value: 3, suffix: '+', label: 'Years of Experience' },
];

export const SERVICES = [
  {
    id: 'product-photography',
    icon: '📸',
    name: 'Product & Fashion Photography',
    short: 'Studio shoots, fashion, fitness, model photography',
    description: 'We deliver stunning visuals for your products and fashion lines. From high-end clothing shoots to fitness model portfolios, our team captures every detail with professional lighting and creative direction that makes your brand stand out in a crowded market.',
    includes: ['Product flat-lay & lifestyle shoots', 'Fashion & clothing photography', 'Fitness & model portfolios (male/female)', 'E-commerce ready images', 'On-location & studio shoots'],
    price: 'Contact for quote',
    gradient: 'from-emerald-400 to-green-600',
  },
  {
    id: 'videography',
    icon: '🎬',
    name: 'Videography & YouTube Production',
    short: 'Product videos, YouTube, advertising, brand films',
    description: 'From concept to final cut, we produce compelling videos that tell your brand story. Whether it\'s a product showcase, YouTube content, or a full advertising campaign — we handle scripting, shooting, and directing with cinematic quality.',
    includes: ['Product showcase videos', 'YouTube channel production', 'Advertising & brand films', 'Event videography', 'Podcast video recording'],
    price: 'Contact for quote',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 'podcast-recording',
    icon: '🎙',
    name: 'Podcast Studio Recording',
    short: 'Soundproof podcast setup with mics and video',
    description: 'Step into our professional soundproof studio equipped with broadcast-quality microphones and multi-camera video recording. Perfect for solo episodes, interviews, or panel discussions — we make your podcast sound and look incredible.',
    includes: ['Soundproof recording room', 'Professional noise-canceling microphones', 'Multi-camera video recording', 'Basic audio mixing included', 'Comfortable AC environment'],
    price: '৳2,000–3,000 BDT/session',
    gradient: 'from-teal-400 to-emerald-600',
  },
  {
    id: 'photo-editing',
    icon: '🖼',
    name: 'Photo Editing & Retouching',
    short: 'Editing, retouching, enhancement, manipulation',
    description: 'Transform your raw images into polished, professional visuals. Our editors specialize in color correction, skin retouching, background removal, and advanced manipulation to ensure every photo meets the highest standards.',
    includes: ['Color correction & grading', 'Skin retouching & beauty editing', 'Background removal & replacement', 'Photo enhancement & manipulation', 'Batch editing for e-commerce'],
    price: '৳500–1,000 BDT/image',
    gradient: 'from-emerald-500 to-lime-500',
  },
  {
    id: 'video-editing',
    icon: '🎞',
    name: 'Reels & Video Editing',
    short: 'UGC ads, reels, shorts, long-form, podcast edits',
    description: 'We edit content that grabs attention and drives engagement. From snappy Instagram Reels and TikTok clips to polished long-form YouTube videos and full podcast episodes — we handle every format with creative flair.',
    includes: ['UGC ad creation & editing', 'Instagram Reels & TikTok edits', 'YouTube Shorts production', 'Long-form video editing', 'Podcast episode editing'],
    price: '৳1,000–5,000+ BDT/video',
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    id: 'branding-marketing',
    icon: '📣',
    name: 'Branding & Digital Marketing',
    short: 'Brand identity, Facebook Ads, Google Ads, growth',
    description: 'Build a brand that people remember. We create complete brand identities, run targeted ad campaigns on Facebook and Google, and develop growth strategies that turn followers into customers.',
    includes: ['Brand identity & logo design', 'Facebook & Instagram Ads', 'Google Ads management', 'Social media strategy', 'Growth consulting'],
    price: 'Contact for quote',
    gradient: 'from-lime-400 to-green-600',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    type: 'video',
    category: 'UGC & Ads',
    title: 'Client UGC Ad — Product Showcase',
    description: 'Short-form UGC ad for a Dhaka-based lifestyle brand',
    aspect: '16/9',
    youtubeUrl: 'https://www.youtube.com/watch?v=RY9PVE9QL7Y',
  },
  {
    type: 'video',
    category: 'UGC & Ads',
    title: 'UGC Testimonial — Skincare Brand',
    description: 'Authentic user-generated content for social campaigns',
    aspect: '16/9',
    youtubeUrl: 'https://www.youtube.com/shorts/xpOc-FIk2Dg',
  },
  {
    type: 'video',
    category: 'Reels & Shorts',
    title: 'Instagram Reels — Fashion Brand',
    description: 'Trending reels edit with motion graphics and color grade',
    aspect: '9/16',
    youtubeUrl: 'https://www.youtube.com/shorts/hRLN3U6hg_A',
  },
  {
    type: 'video',
    category: 'Reels & Shorts',
    title: 'TikTok Viral Short — Food Brand',
    description: 'Fast-paced editing with trendy transitions and sound',
    aspect: '9/16',
    youtubeUrl: 'https://www.youtube.com/watch?v=RY9PVE9QL7Y',
  },
  {
    type: 'video',
    category: 'Podcast',
    title: 'Podcast Episode — Full Production',
    description: 'Full podcast video edit with lower thirds and color grade',
    aspect: '16/9',
    youtubeUrl: 'https://www.youtube.com/watch?v=RY9PVE9QL7Y',
  },
  {
    type: 'video',
    category: 'Podcast',
    title: 'Interview Podcast — Tech Talk',
    description: 'Multi-camera podcast with animated overlays',
    aspect: '16/9',
    youtubeUrl: 'https://www.youtube.com/watch?v=RY9PVE9QL7Y',
  },
  {
    type: 'video',
    category: 'Long Form Edits',
    title: 'YouTube Long Form — Tech Review',
    description: 'Complete YouTube video edit with intro, transitions, and thumbnail',
    aspect: '16/9',
    youtubeUrl: 'https://www.youtube.com/watch?v=2b_Lnz3tHGw',
  },
  {
    type: 'video',
    category: 'Long Form Edits',
    title: 'Documentary Style — Brand Story',
    description: 'Cinematic brand documentary with voiceover and B-roll',
    aspect: '16/9',
    youtubeUrl: 'https://www.youtube.com/watch?v=2b_Lnz3tHGw',
  },

  {
    type: 'photo',
    category: 'Product Photography',
    title: 'Product Shoot — Cosmetics Brand',
    description: 'Professional product photography with creative styling',
    aspect: '3/4',
    image: '/portfolio/Product-Shoot-Cosmetics-Brand.png',
  },
  {
    type: 'photo',
    category: 'Product Photography',
    title: 'E-Commerce Flatlays — Accessories',
    description: 'Clean e-commerce ready product shots',
    aspect: '1/1',
    image: '/portfolio/E-Commerce Flatlays.png',
  },
  {
    type: 'photo',
    category: 'Brand Shoots',
    title: 'Brand Photography — Clothing Label',
    description: 'Lifestyle brand photography with models',
    aspect: '3/4',
    image: '/portfolio/Brand-Photography-Clothing-Label.png',
  },
  {
    type: 'photo',
    category: 'Brand Shoots',
    title: 'Corporate Headshots — Tech Startup',
    description: 'Professional team portraits and branding photos',
    aspect: '1/1',
    image: '/portfolio/Corporate-Headshots-Tech-Startup.png',
  },
  {
    type: 'photo',
    category: 'Product Photography',
    title: 'Food Photography — Restaurant Menu',
    description: 'Appetizing food photography for digital menus',
    aspect: '4/3',
    image: '/portfolio/Food-Photography.png',
  },
  {
    type: 'photo',
    category: 'Brand Shoots',
    title: 'Fitness Brand Shoot — Gymwear',
    description: 'Dynamic fitness photography with studio lighting',
    aspect: '3/4',
    image: '/portfolio/fitness-brand-shoot.png',
  },
];

export const FILTER_TABS = ['All', 'UGC & Ads', 'Product Photography', 'Brand Shoots', 'Podcast', 'Reels & Shorts', 'Long Form Edits'];

export const FAQ_DATA = [
  { question: "What's included in studio rent?", answer: 'Studio rent includes full access to our professional space with lighting equipment, backdrops, 2-ton AC, and basic assistant support. Specialized equipment like green screens and teleprompters are available on request.' },
  { question: 'How do I book a session?', answer: 'You can book through our contact form, WhatsApp (+880 1937-921124), or by calling us directly. We recommend booking at least 48 hours in advance to ensure availability.' },
  { question: 'Do you provide models?', answer: 'Yes, we can arrange professional male and female models for your shoots. Model fees are separate from photography/videography charges. Let us know your requirements and we\'ll provide options.' },
  { question: 'How long does video editing take?', answer: 'Turnaround depends on complexity: Reels and shorts take 1-2 days, standard edits 3-5 days, and long-form or complex projects 5-10 days. Rush delivery is available at additional cost.' },
  { question: 'Do you offer monthly studio rental?', answer: 'Yes, we offer flexible monthly packages for creators and businesses who need regular studio access. Contact us for custom monthly rates and availability.' },
  { question: 'Can I visit the studio before booking?', answer: 'Absolutely! We welcome studio visits. Just message us on WhatsApp or call to schedule a time. We\'re located in Mirpur DOHS — easy to find and access.' },
];

export const EQUIPMENT_LIST = [
  'Professional cameras and lighting',
  'Noise-canceling microphones',
  'Soundproof studio room',
  'Green screen background',
  '2-ton AC — comfortable environment',
  'Assistant support available',
];

export const WHY_US = [
  { icon: '🎯', title: 'One-Stop Creative Studio', description: 'Photo, video, podcast, and marketing under one roof' },
  { icon: '📍', title: 'Prime Location in Dhaka', description: 'Based in Mirpur DOHS — easy access across Dhaka' },
  { icon: '🚀', title: 'Growth-Focused Approach', description: "We don't just shoot. We help your brand grow." },
  { icon: '💼', title: 'Professional Equipment', description: 'Cameras, lighting, mics, green screen, soundproof AC studio' },
];

export const PRICING_CARDS = [
  {
    name: 'Photo Editing',
    price: '৳500–1,000',
    unit: 'per image',
    features: ['Basic color correction', 'Skin retouching', 'Background removal', 'Photo enhancement', 'Image manipulation'],
    popular: false,
    cta: 'Get Quote',
  },
  {
    name: 'Video Editing',
    price: '৳1,000–5,000+',
    unit: 'per video',
    features: ['Reels & Shorts editing', 'Long-form YouTube edits', 'UGC ad creation', 'Podcast episode editing', 'Motion graphics & effects'],
    popular: true,
    cta: 'Get Quote',
  },
  {
    name: 'Studio Rent',
    price: '৳2,000–3,000',
    unit: 'per session',
    features: ['Full studio access', 'Professional equipment', 'Lighting setup', 'AC environment', 'Assistant support'],
    popular: false,
    cta: 'Book Studio',
  },
];
