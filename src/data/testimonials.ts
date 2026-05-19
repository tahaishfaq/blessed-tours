export type Testimonial = {
	id: string;
	quote: string;
	name: string;
	location: string;
	avatar: string;
};

/** Stable placeholder portrait per reviewer */
function avatarPlaceholder(seed: string): string {
	return `https://picsum.photos/seed/blessed-${encodeURIComponent(seed)}/160/160`;
}

export const testimonialsHeading = 'Client Reviews & Feedback';

export const testimonialsIntro =
	'Read heartfelt testimonials from pilgrims who have experienced our exceptional Hajj and Umrah services firsthand.';

export const testimonials: Testimonial[] = [
	{
		id: 'review-1',
		quote:
			'From the moment we arrived, Blessed Tours provided exceptional service. Their team’s dedication and expertise made our Umrah seamless and deeply fulfilling.',
		name: 'Ahmad Ali',
		location: 'London',
		avatar: avatarPlaceholder('ahmad-ali'),
	},
	{
		id: 'review-2',
		quote:
			'Blessed Tours made my Hajj experience truly unforgettable. Their local knowledge and attention to detail ensured everything went smoothly, allowing me to focus entirely on my journey.',
		name: 'Sarah Khan',
		location: 'Birmingham',
		avatar: avatarPlaceholder('sarah-khan'),
	},
	{
		id: 'review-3',
		quote:
			'I was amazed by the level of care and support from Blessed Tours. Their 24/7 assistance and tailored packages made my Hajj stress-free, allowing me to fully embrace the experience.',
		name: 'Fatima Siddiqui',
		location: 'Manchester',
		avatar: avatarPlaceholder('fatima-siddiqui'),
	},
	{
		id: 'review-4',
		quote:
			'Alhamdulillah, it was a beautiful experience. The whole process was easy, from booking to return. The support team was very kind and helpful. Highly recommended!',
		name: 'Marium Umair',
		location: 'London',
		avatar: avatarPlaceholder('marium-umair'),
	},
	{
		id: 'review-5',
		quote:
			'I was nervous before going, but everything went perfectly. The guidance and support were excellent. They really care about your spiritual journey. Thank you so much!',
		name: 'Khizer Hayat',
		location: 'London',
		avatar: avatarPlaceholder('khizer-hayat'),
	},
	{
		id: 'review-6',
		quote:
			'We had no problems at all. The staff was always available and guided us with patience. It was a blessed and peaceful trip. Would travel again with them.',
		name: 'Muhammad Zubair',
		location: 'Glasgow',
		avatar: avatarPlaceholder('muhammad-zubair'),
	},
	{
		id: 'review-7',
		quote:
			'Our group of twelve travelled together and every detail was coordinated perfectly. Hotels, coaches, and ziyarah were all arranged with care.',
		name: 'Ayesha Malik',
		location: 'Bradford',
		avatar: avatarPlaceholder('ayesha-malik'),
	},
	{
		id: 'review-8',
		quote:
			'As a first-time Umrah traveller, I appreciated how clearly everything was explained. No confusion at the airport or with our documents.',
		name: 'Hassan Mahmood',
		location: 'Leeds',
		avatar: avatarPlaceholder('hassan-mahmood'),
	},
	{
		id: 'review-9',
		quote:
			'The Madinah hotel was comfortable and close to Masjid Nabawi. Blessed Tours checked on us throughout the stay — genuinely thoughtful service.',
		name: 'Nadia Hussain',
		location: 'Cardiff',
		avatar: avatarPlaceholder('nadia-hussain'),
	},
	{
		id: 'review-10',
		quote:
			'Flights, visa, and ground transport were all sorted in one package. Saved us weeks of planning and gave us peace of mind before departure.',
		name: 'Imran Qureshi',
		location: 'Luton',
		avatar: avatarPlaceholder('imran-qureshi'),
	},
	{
		id: 'review-11',
		quote:
			'Professional from start to finish. The group leader in Makkah knew the rituals well and helped our elders with every step of the way.',
		name: 'Sofia Rahman',
		location: 'Edinburgh',
		avatar: avatarPlaceholder('sofia-rahman'),
	},
	{
		id: 'review-12',
		quote:
			'We travelled with young children and they arranged family rooms and shorter transfer times. That attention made a huge difference for us.',
		name: 'Tariq Ahmed',
		location: 'Bristol',
		avatar: avatarPlaceholder('tariq-ahmed'),
	},
	{
		id: 'review-13',
		quote:
			'Honest pricing with no surprises at the end. Every inclusion was listed clearly before we paid — rare and refreshing in this industry.',
		name: 'Zara Iqbal',
		location: 'Nottingham',
		avatar: avatarPlaceholder('zara-iqbal'),
	},
	{
		id: 'review-14',
		quote:
			'When our return flight was rescheduled, they handled the change within hours. We never felt stranded or left to figure it out alone.',
		name: 'Bilal Hussain',
		location: 'Leicester',
		avatar: avatarPlaceholder('bilal-hussain'),
	},
	{
		id: 'review-15',
		quote:
			'My mother needed wheelchair assistance at the airport. Blessed Tours arranged it in advance — she was cared for from check-in to arrival.',
		name: 'Hina Parveen',
		location: 'Newcastle',
		avatar: avatarPlaceholder('hina-parveen'),
	},
	{
		id: 'review-16',
		quote:
			'Already booked our next Umrah with them. Trustworthy, responsive, and deeply respectful of what this journey means spiritually.',
		name: 'Omar Farooq',
		location: 'Sheffield',
		avatar: avatarPlaceholder('omar-farooq'),
	},
];

export function testimonialsByColumn(columnCount = 3): Testimonial[][] {
	const columns: Testimonial[][] = Array.from({ length: columnCount }, () => []);

	testimonials.forEach((item, index) => {
		columns[index % columnCount].push(item);
	});

	return columns;
}
