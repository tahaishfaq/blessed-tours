export type BookingStepIcon = 'packages' | 'form' | 'assistance' | 'confirmation';

export type BookingStep = {
	step: number;
	title: string;
	description: string;
	icon: BookingStepIcon;
};

export const bookingProcessIntro =
	'Four clear steps from browsing packages to receiving your documents — with our UK team beside you throughout.';

export const bookingProcessSteps: BookingStep[] = [
	{
		step: 1,
		title: 'Explore Our Packages',
		description:
			'Browse our Hajj and Umrah packages to find one that suits your needs perfectly.',
		icon: 'packages',
	},
	{
		step: 2,
		title: 'Submit Booking Form',
		description:
			'Fill out our simple booking form online with your travel details and preferences.',
		icon: 'form',
	},
	{
		step: 3,
		title: 'Travel Agent Assistance',
		description:
			'Our experts guide you through every step, ensuring a stress-free pilgrimage experience.',
		icon: 'assistance',
	},
	{
		step: 4,
		title: 'Booking Confirmation',
		description:
			'Receive your booking confirmation along with all necessary travel documents.',
		icon: 'confirmation',
	},
];
