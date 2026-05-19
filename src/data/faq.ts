export type FaqItem = {
	id: string;
	question: string;
	answer: string;
};

export const faqHeading =
	'All You Should Know Before Embarking on Your Pilgrimage';

export const faqAside = {
	title: "Didn't see your question?",
	body: 'Our UK team is here to help — reach out by phone or WhatsApp and we will reply shortly.',
};

export const faqImage = {
	src: 'https://images.pexels.com/photos/12336414/pexels-photo-12336414.jpeg?auto=compress&cs=tinysrgb&w=1200',
	alt: 'Pilgrims at the Holy Mosque in Makkah at dusk',
};

export const faqItems: FaqItem[] = [
	{
		id: 'packages',
		question: 'What types of packages does Blessed Tours offer?',
		answer:
			'We offer Hajj and Umrah packages, flights, holiday packages, and add-ons such as hotels, ground transport, and e-visa support. Packages range from economy to premium, with options for families, groups, and solo travellers.',
	},
	{
		id: 'cancellation',
		question: 'What is your cancellation or refund policy?',
		answer:
			'Policies depend on your package, airline, and hotel terms. We explain all cancellation windows and refund eligibility before you pay a deposit. Our team will walk you through your specific booking if plans change.',
	},
	{
		id: 'safety',
		question: 'Are your Hajj and Umrah trips safe and well-guided?',
		answer:
			'Yes. We work with trusted partners on the ground, provide clear itineraries, and support you before, during, and after travel. Group departures include experienced coordinators; private packages receive the same dedicated UK support.',
	},
	{
		id: 'customize',
		question: 'Can I customize my travel itinerary?',
		answer:
			'Absolutely. You can choose travel dates, hotel category, room sharing, flights, and extras such as ziyarah tours or private transport. Tell us your preferences in the quote form and we will tailor a package to your budget and needs.',
	},
	{
		id: 'booking',
		question: 'How do I book a trip?',
		answer:
			'Browse our packages, submit the quote form on this site, or contact us on WhatsApp or phone. We confirm availability, send a detailed proposal, and guide you through deposit and document collection until your booking is confirmed.',
	},
];
