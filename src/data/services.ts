export type ServiceCard = {
	id: string;
	title: string;
	subtitle: string;
	href: string;
	/** Path under public/ */
	image: string;
	/** Fallback when image fails to load */
	fallbackClass: string;
};

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
		image: '/images/service-images/For%20Flights.jpg',
		fallbackClass: 'bg-gradient-to-br from-ink-950 to-black',
	},
	{
		id: 'holidays',
		title: 'Holiday Packages',
		subtitle: 'Islamic tours & family getaways',
		href: '/holiday-packages',
		image: '/images/service-images/for-holiday.jpg',
		fallbackClass: 'bg-gradient-to-br from-ink-900 to-ink-950',
	},
	{
		id: 'umrah-visa',
		title: 'Umrah Visa',
		subtitle: 'Fast e-visa support for UK pilgrims',
		href: '/contact-us',
		image: '/images/service-images/for%20umrah%20visa.jpg',
		fallbackClass: 'bg-gradient-to-br from-gold-950 via-ink-900 to-black',
	},
];
