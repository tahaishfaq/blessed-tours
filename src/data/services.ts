export type ServiceCard = {
	id: string;
	title: string;
	subtitle: string;
	href: string;
	/** Replace with files in public/images/services/ when ready */
	image: string;
	/** Fallback when image fails to load */
	fallbackClass: string;
};

/**
 * Swap `image` for local assets under `public/images/services/` for production.
 * Remote URLs are placeholders for layout preview.
 */
export const serviceCards: ServiceCard[] = [
	{
		id: 'umrah',
		title: 'Umrah Packages',
		subtitle: 'Guided journeys from £899 per person',
		href: '/#umrah-packages-section',
		image:
			'https://images.pexels.com/photos/28988872/pexels-photo-28988872.jpeg?auto=compress&cs=tinysrgb&w=800',
		fallbackClass: 'bg-gradient-to-br from-ink-900 via-ink-800 to-black',
	},
	{
		id: 'hajj',
		title: 'Hajj Packages',
		subtitle: 'ATOL protected · Scholar-led groups',
		href: '/hajj-packages',
		image:
			'https://images.pexels.com/photos/12336414/pexels-photo-12336414.jpeg?auto=compress&cs=tinysrgb&w=800',
		fallbackClass: 'bg-gradient-to-br from-black via-ink-950 to-ink-900',
	},
	{
		id: 'flights',
		title: 'Flights',
		subtitle: 'Economy to business with top airlines',
		href: '/#flights-section',
		image:
			'https://res.cloudinary.com/diyzpo5gt/image/upload/f_auto,q_auto,w_800/v1779188491/ChatGPT_Image_May_19_2026_04_01_13_PM_hmxtq6.png',
		fallbackClass: 'bg-gradient-to-br from-ink-950 to-black',
	},
	{
		id: 'holidays',
		title: 'Holiday Packages',
		subtitle: 'Islamic tours & family getaways',
		href: '/holiday-packages',
		image:
			'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format&fit=crop',
		fallbackClass: 'bg-gradient-to-br from-ink-900 to-ink-950',
	},
	{
		id: 'visa',
		title: 'Umrah Visa',
		subtitle: 'Fast e-visa support for pilgrims',
		href: '/#umrah-packages-section',
		image:
			'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format&fit=crop',
		fallbackClass: 'bg-gradient-to-br from-black via-ink-900 to-ink-800',
	},
	{
		id: 'group',
		title: 'Group Travel',
		subtitle: 'Schools, mosques & community blocks',
		href: '/about-us',
		image:
			'https://images.unsplash.com/photo-1503220317375-16ad6288aed0?w=800&q=80&auto=format&fit=crop',
		fallbackClass: 'bg-gradient-to-br from-ink-800 via-ink-900 to-black',
	},
];
