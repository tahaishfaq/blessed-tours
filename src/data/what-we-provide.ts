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
		image: '/images/Hotels Secction/afif-ramdhasuma-Jkc0crNVFC8-unsplash.jpg',
		imageAlt: 'Twin hotel room with bright modern interior',
		icon: 'hotel',
		cards: [
			{
				title: 'Makkah Haram View Hotels',
				meta: 'Premium 5-star stays',
				description:
					'Selected hotels close to Masjid al-Haram with family rooms, breakfast options, and support for group check-ins.',
				image: '/images/Hotels Secction/haidan-IOBIgKmjm1Y-unsplash.jpg',
				imageAlt: 'Twin hotel room prepared for guests',
				highlights: ['Near Haram', 'Family rooms', 'Breakfast options'],
			},
			{
				title: 'Medina Central Hotels',
				meta: 'Near Masjid Nabawi',
				description:
					'Comfortable hotels around the central Medina area, chosen for easy access to prayers and relaxed family movement.',
				image: '/images/Hotels Secction/jason-lee-nXn_s3rBQwc-unsplash.jpg',
				imageAlt: 'Hotel room near holy city accommodation',
				highlights: ['Central location', 'Twin sharing', 'Lift access'],
			},
			{
				title: 'Budget Group Hotels',
				meta: 'Value 3 to 4-star stays',
				description:
					'Clean, reliable accommodation for pilgrims who want a practical stay with shuttle or short-transfer access.',
				image: '/images/Hotels Secction/yanhao-fang--TAJ3wXSTNM-unsplash.jpg',
				imageAlt: 'Comfortable hotel room for group stays',
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
		image: '/images/Flight Section/alexander-schimmeck-DSOohFTAfno-unsplash.jpg',
		imageAlt: 'Aircraft wing above clouds at sunset',
		icon: 'flight',
		cards: [
			{
				title: 'Direct Flight Options',
				meta: 'UK to Saudi routes',
				description:
					'Route planning from key UK airports with practical arrival timings for hotel check-in and onward transfers.',
				image: '/images/Flight Section/jeshoots-com-9qQTUYm4ss4-unsplash.jpg',
				imageAlt: 'Pakistan International Airlines aircraft flying through clouds',
				highlights: ['UK departures', 'Jeddah or Medina', 'Timed transfers'],
			},
			{
				title: 'Economy Packages',
				meta: 'Affordable fares',
				description:
					'Balanced fare options for families and groups who need reliable flights without stretching the package budget.',
				image: '/images/Flight Section/robert-hrovat-3hTBB-ISAJg-unsplash.jpg',
				imageAlt: 'Aircraft wing above warm sunset clouds',
				highlights: ['Flexible budgets', 'Group fares', 'Checked baggage'],
			},
			{
				title: 'Business Class Upgrades',
				meta: 'Extra comfort',
				description:
					'Upgrade support for travellers who prefer more comfort, shorter queues, and a calmer long-haul journey.',
				image: '/images/Flight Section/tim-dennert-ID3ZX0BqnS8-unsplash.jpg',
				imageAlt: 'Pakistan International Airlines aircraft in flight',
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
		image: '/images/Transport Section/holiday-extras-vQZJ3NzhTM4-unsplash.jpg',
		imageAlt: 'Minibus travelling on a scenic road',
		icon: 'transport',
		cards: [
			{
				title: 'Airport Transfers',
				meta: 'Arrival to hotel',
				description:
					'Organised pickup from Jeddah or Medina airports with support for luggage, groups, and family arrivals.',
				image: '/images/Transport Section/hyundai-motor-group-3mZNCwWnaFw-unsplash.jpg',
				imageAlt: 'Accessible private van ready for passenger transfer',
				highlights: ['Airport pickup', 'Luggage support', 'Group coordination'],
			},
			{
				title: 'Intercity Travel',
				meta: 'Makkah to Medina',
				description:
					'Comfortable travel between holy cities with schedules arranged around hotel timings and prayer needs.',
				image: '/images/Transport Section/jeshoots-com-mSESwdMZr-A-unsplash.jpg',
				imageAlt: 'Minibus on a curved road at sunrise',
				highlights: ['City-to-city', 'Air-conditioned', 'Planned timing'],
			},
			{
				title: 'Ziyarah Transport',
				meta: 'Guided local visits',
				description:
					'Transport for important ziyarat locations with group-friendly planning and clear meeting points.',
				image: '/images/Transport Section/prakash-rao-q1AaspfOgBA-unsplash.jpg',
				imageAlt: 'Driver holding a steering wheel during a transfer',
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
		image: '/images/Visa Sections/alexander-schimmeck-5MIINKVH1mg-unsplash.jpg',
		imageAlt: 'British passport held ready for travel',
		icon: 'visa',
		cards: [
			{
				title: 'Umrah E-Visa Support',
				meta: 'Document guidance',
				description:
					'Clear checklist and submission guidance so every traveller knows what is needed before the journey.',
				image: '/images/Visa Sections/ethan-wilkinson-hdfG0RIYNbQ-unsplash.jpg',
				imageAlt: 'British passport prepared for visa processing',
				highlights: ['Checklist support', 'Application guidance', 'Pre-travel checks'],
			},
			{
				title: 'Family Applications',
				meta: 'Grouped processing',
				description:
					'Help for families travelling together, keeping passport details and traveller requirements organised.',
				image: '/images/Visa Sections/marco-lopez-qK6HAkB91Yc-unsplash.jpg',
				imageAlt: 'Traveller waiting with passport and travel documents',
				highlights: ['Family groups', 'Passport checks', 'Organised details'],
			},
			{
				title: 'Travel Readiness',
				meta: 'Before departure',
				description:
					'Final checks across visa, flights, hotel confirmations, and passenger details before you leave the UK.',
				image: '/images/Visa Sections/rawkkim-unJT7Gnj3W8-unsplash.jpg',
				imageAlt: 'Traveller reviewing passport before departure',
				highlights: ['Final review', 'Flight matching', 'Ready to travel'],
			},
		],
	},
];
