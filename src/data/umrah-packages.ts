export type UmrahPackage = {
	id: string;
	title: string;
	season: string;
	stars: '3 Star' | '4 Star' | '5 Star';
	nights: number;
	priceFromGbp: number;
	makkahHotel: string;
	makkahNights: number;
	madinahHotel: string;
	madinahNights: number;
	roomType: string;
	mealPlan: string;
	inclusions: string[];
	highlight: string;
	images: string[];
};

export const umrahPackages: UmrahPackage[] = [
	{
		id: 'december-5-star-2026',
		title: '5 Star December Umrah 2026',
		season: 'December 2026 · 10 Nights Land Package',
		stars: '5 Star',
		nights: 10,
		priceFromGbp: 955,
		makkahHotel: 'Clock Tower Hotel Makkah',
		makkahNights: 5,
		madinahHotel: 'Pullman Zamzam Madinah',
		madinahNights: 5,
		roomType: 'Quad Sharing (Room Only)',
		mealPlan: 'Breakfast Included (Both Cities)',
		inclusions: [
			'Stay for 05 nights in Makkah',
			'Stay for 05 nights in Madinah',
			'Umrah visa + medical insurance',
			'Transport and ziarats',
			'Umrah guide',
			'24/7 customer support',
		],
		highlight: 'Premium central-hotel comfort for families wanting a high-end December journey.',
		images: [
			'https://images.pexels.com/photos/26436656/pexels-photo-26436656.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/12607981/pexels-photo-12607981.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/18360295/pexels-photo-18360295.jpeg?auto=compress&cs=tinysrgb&w=1200',
		],
	},
	{
		id: 'ramadan-4-star-last-ashra-2027',
		title: '4 Star Ramadan Last Ashra 2027',
		season: 'Last Ashra 2027 · 12 Nights Land Package',
		stars: '4 Star',
		nights: 12,
		priceFromGbp: 699,
		makkahHotel: 'Manarat Gaza Makkah (Near Haram)',
		makkahNights: 6,
		madinahHotel: 'Waqf Outhman bin Affan (Near Masjid Nabwi)',
		madinahNights: 6,
		roomType: 'Quad Sharing (Room Only)',
		mealPlan: 'No Meal Included',
		inclusions: [
			'Stay for 06 nights in Makkah',
			'Stay for 06 nights in Madinah',
			'Umrah visa + medical insurance',
			'Transport and ziarats',
			'Umrah guide',
			'24/7 customer support',
		],
		highlight: 'Balanced value during peak Ramadan dates with complete ground support.',
		images: [
			'https://images.pexels.com/photos/34246953/pexels-photo-34246953.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/28209449/pexels-photo-28209449.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/33600872/pexels-photo-33600872.jpeg?auto=compress&cs=tinysrgb&w=1200',
		],
	},
	{
		id: 'easter-3-star-2027',
		title: '3 Star Easter Umrah 2027',
		season: 'Easter 2027 · 07 Nights Land Package',
		stars: '3 Star',
		nights: 7,
		priceFromGbp: 399,
		makkahHotel: 'Emaar Khalil Makkah (Near Haram)',
		makkahNights: 4,
		madinahHotel: 'Odst Al Madinah (Near Masjid al Nabwi)',
		madinahNights: 3,
		roomType: 'Quad Sharing (Room Only)',
		mealPlan: 'No Meal Included',
		inclusions: [
			'Stay for 04 nights in Makkah',
			'Stay for 03 nights in Madinah',
			'Umrah visa + medical insurance',
			'Transport and ziarats',
			'Umrah guide',
			'24/7 customer support',
		],
		highlight: 'Entry-price option ideal for budget-conscious students and young families.',
		images: [
			'https://images.pexels.com/photos/20277838/pexels-photo-20277838.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/5798526/pexels-photo-5798526.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/26436656/pexels-photo-26436656.jpeg?auto=compress&cs=tinysrgb&w=1200',
		],
	},
];
