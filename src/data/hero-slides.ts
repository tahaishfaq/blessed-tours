export type HeroSlide = {
	id: string;
	/** Absolute URL or path under /public, e.g. `https://...mp4` or `/videos/umrah.mp4` */
	video?: string;
	/** Poster image while video loads, e.g. `/images/hero/umrah-poster.jpg` */
	poster?: string;
	/** Fallback when no video yet — CSS gradient class */
	fallbackClass?: string;
	alt: string;
	eyebrow: string;
	title: string;
	description: string;
	ctaLabel: string;
	ctaHref: string;
};

/**
 * Set `video` to a URL (e.g. Cloudinary) or a path under `/public` (e.g. `/videos/umrah.mp4`).
 * Optional `poster` per slide.
 */
export const heroSlides: HeroSlide[] = [
	{
		id: 'hajj',
		video:
			'https://res.cloudinary.com/diyzpo5gt/video/upload/v1779184342/15514888_3840_2160_60fps_gj4ztr.mp4',
		fallbackClass: 'bg-gradient-to-br from-black via-ink-950 to-ink-800',
		alt: 'Hajj packages',
		eyebrow: 'Hajj Packages',
		title: 'Your Hajj journey, guided with care',
		description:
			'ATOL protected packages, scholar-led groups, and dedicated UK support from planning through your return home.',
		ctaLabel: 'View Hajj packages',
		ctaHref: '/hajj-packages',
	},
	{
		id: 'umrah',
		video:
			'https://res.cloudinary.com/diyzpo5gt/video/upload/v1779184549/12138052_1920_1080_60fps_qiqtyu.mp4',
		fallbackClass: 'bg-gradient-to-br from-ink-950 via-ink-900 to-black',
		alt: 'Umrah packages',
		eyebrow: 'Umrah Packages',
		title: 'Umrah made simple, spiritual, and affordable',
		description:
			'Guided journeys from £899 per person with hotels, visas, and flights tailored for UK pilgrims.',
		ctaLabel: 'Explore Umrah packages',
		ctaHref: '/umrah-packages',
	},
	{
		id: 'flights',
		video:
			'https://res.cloudinary.com/diyzpo5gt/video/upload/v1779184597/14306385_3840_2160_24fps_urctau.mp4',
		fallbackClass: 'bg-gradient-to-br from-black via-ink-900 to-ink-950',
		alt: 'Flights to the holy lands',
		eyebrow: 'Flights',
		title: 'Fly to Jeddah, Medina & beyond with confidence',
		description:
			'Economy to business class on trusted airlines — flexible dates and competitive fares for pilgrims and families.',
		ctaLabel: 'Search flights',
		ctaHref: '/flights',
	},
	{
		id: 'holidays',
		video:
			'https://res.cloudinary.com/diyzpo5gt/video/upload/v1779184640/13875963_3840_2160_24fps_cwnqoe.mp4',
		fallbackClass: 'bg-gradient-to-br from-ink-950 via-black to-ink-900',
		alt: 'Holiday packages',
		eyebrow: 'Holiday Packages',
		title: 'Islamic tours & family getaways worldwide',
		description:
			'Halal-friendly destinations, curated itineraries, and group travel for schools, mosques, and communities.',
		ctaLabel: 'Browse holiday packages',
		ctaHref: '/holiday-packages',
	},
];
