export type ProvideCard = {
	id: string;
	title: string;
	tagline: string;
	description: string;
	image: string;
	imageAlt: string;
	icon: 'hotel' | 'flight' | 'transport' | 'visa';
};

export const whatWeProvideIntro =
	'From your first enquiry to landing in the holy cities, we handle the details that matter — accommodation, flights, ground transport, and visas — so your focus stays on worship, rest, and family.';

export const whatWeProvide: ProvideCard[] = [
	{
		id: 'hotels',
		title: 'Hotels',
		tagline: '3 to 5 Star',
		description:
			'Comfortable 3 to 5-star hotels near Haram and Masjid Nabawi, with options for families, groups, and solo travellers walking distance or a short shuttle from the mosques.',
		image:
			'https://images.pexels.com/photos/34631242/pexels-photo-34631242.jpeg?auto=compress&cs=tinysrgb&w=1200',
		imageAlt: 'Luxury hotel room interior',
		icon: 'hotel',
	},
	{
		id: 'flights',
		title: 'Flights',
		tagline: 'Economy to Business',
		description:
			'Affordable flight options with top airlines for every budget, including direct and connecting routes from UK airports to Jeddah, Medina, and beyond.',
		image:
			'https://images.pexels.com/photos/35427894/pexels-photo-35427894.jpeg?auto=compress&cs=tinysrgb&w=1200',
		imageAlt: 'Saudia aircraft at the airport',
		icon: 'flight',
	},
	{
		id: 'transport',
		title: 'Transportation',
		tagline: 'Air Conditioned',
		description:
			'Air-conditioned coaches and private transfers between airports, hotels, and holy sites — reliable scheduling that keeps your group together throughout the journey.',
		image:
			'https://images.pexels.com/photos/35016971/pexels-photo-35016971.jpeg?auto=compress&cs=tinysrgb&w=1200',
		imageAlt: 'Mosque illuminated at night in Saudi Arabia',
		icon: 'transport',
	},
	{
		id: 'e-visa',
		title: 'E-Visa',
		tagline: 'Easy Process',
		description:
			'Quick and hassle-free electronic visa processing for all pilgrims, with clear document checklists and support from our UK team before you travel.',
		image:
			'https://i.pinimg.com/736x/0f/47/ba/0f47ba2b267f1d9458afe347f1566ab7.jpg',
		imageAlt: 'Saudi passports with boarding passes ready for travel',
		icon: 'visa',
	},
];
