export type ProvideCard = {
	id: string;
	title: string;
	tagline: string;
	description: string;
	image: string;
	imageAlt: string;
	icon: 'hotel' | 'flight' | 'transport' | 'visa';
	cards: ProvideDetailCard[];
};

export type ProvideDetailCard = {
	title: string;
	meta: string;
	description: string;
	image: string;
	imageAlt: string;
	highlights: string[];
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
		cards: [
			{
				title: 'Makkah Haram View Hotels',
				meta: 'Premium 5-star stays',
				description:
					'Selected hotels close to Masjid al-Haram with family rooms, breakfast options, and support for group check-ins.',
				image:
					'https://images.pexels.com/photos/34631242/pexels-photo-34631242.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Premium hotel room prepared for guests',
				highlights: ['Near Haram', 'Family rooms', 'Breakfast options'],
			},
			{
				title: 'Medina Central Hotels',
				meta: 'Near Masjid Nabawi',
				description:
					'Comfortable hotels around the central Medina area, chosen for easy access to prayers and relaxed family movement.',
				image:
					'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Hotel bedroom with warm lighting',
				highlights: ['Central location', 'Twin sharing', 'Lift access'],
			},
			{
				title: 'Budget Group Hotels',
				meta: 'Value 3 to 4-star stays',
				description:
					'Clean, reliable accommodation for pilgrims who want a practical stay with shuttle or short-transfer access.',
				image:
					'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Comfortable hotel bedroom with neutral decor',
				highlights: ['Group friendly', 'Shuttle access', 'Best value'],
			},
		],
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
		cards: [
			{
				title: 'Direct Flight Options',
				meta: 'UK to Saudi routes',
				description:
					'Route planning from key UK airports with practical arrival timings for hotel check-in and onward transfers.',
				image:
					'https://images.pexels.com/photos/35427894/pexels-photo-35427894.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Aircraft parked at an airport gate',
				highlights: ['UK departures', 'Jeddah or Medina', 'Timed transfers'],
			},
			{
				title: 'Economy Packages',
				meta: 'Affordable fares',
				description:
					'Balanced fare options for families and groups who need reliable flights without stretching the package budget.',
				image:
					'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Aircraft flying through clouds',
				highlights: ['Flexible budgets', 'Group fares', 'Checked baggage'],
			},
			{
				title: 'Business Class Upgrades',
				meta: 'Extra comfort',
				description:
					'Upgrade support for travellers who prefer more comfort, shorter queues, and a calmer long-haul journey.',
				image:
					'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Aircraft cabin seats',
				highlights: ['Upgrade support', 'Priority options', 'Comfort seating'],
			},
		],
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
		cards: [
			{
				title: 'Airport Transfers',
				meta: 'Arrival to hotel',
				description:
					'Organised pickup from Jeddah or Medina airports with support for luggage, groups, and family arrivals.',
				image:
					'https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Coach bus parked for passengers',
				highlights: ['Airport pickup', 'Luggage support', 'Group coordination'],
			},
			{
				title: 'Intercity Travel',
				meta: 'Makkah to Medina',
				description:
					'Comfortable travel between holy cities with schedules arranged around hotel timings and prayer needs.',
				image:
					'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Road travel through a warm landscape',
				highlights: ['City-to-city', 'Air-conditioned', 'Planned timing'],
			},
			{
				title: 'Ziyarah Transport',
				meta: 'Guided local visits',
				description:
					'Transport for important ziyarat locations with group-friendly planning and clear meeting points.',
				image:
					'https://images.pexels.com/photos/35016971/pexels-photo-35016971.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Mosque courtyard illuminated at night',
				highlights: ['Ziyarat routes', 'Meeting points', 'Group support'],
			},
		],
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
		cards: [
			{
				title: 'Umrah E-Visa Support',
				meta: 'Document guidance',
				description:
					'Clear checklist and submission guidance so every traveller knows what is needed before the journey.',
				image:
					'https://i.pinimg.com/736x/0f/47/ba/0f47ba2b267f1d9458afe347f1566ab7.jpg',
				imageAlt: 'Travel documents prepared for visa processing',
				highlights: ['Checklist support', 'Application guidance', 'Pre-travel checks'],
			},
			{
				title: 'Family Applications',
				meta: 'Grouped processing',
				description:
					'Help for families travelling together, keeping passport details and traveller requirements organised.',
				image:
					'https://images.pexels.com/photos/7235904/pexels-photo-7235904.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Passport and travel documents on a desk',
				highlights: ['Family groups', 'Passport checks', 'Organised details'],
			},
			{
				title: 'Travel Readiness',
				meta: 'Before departure',
				description:
					'Final checks across visa, flights, hotel confirmations, and passenger details before you leave the UK.',
				image:
					'https://images.pexels.com/photos/7368317/pexels-photo-7368317.jpeg?auto=compress&cs=tinysrgb&w=900',
				imageAlt: 'Traveller reviewing documents before departure',
				highlights: ['Final review', 'Flight matching', 'Ready to travel'],
			},
		],
	},
];
