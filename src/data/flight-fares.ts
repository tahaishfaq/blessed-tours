export type FlightFare = {
	id: string;
	route: string;
	type: string;
	priceFromGbp: number;
	note: string;
	images: string[];
};

export const flightFares: FlightFare[] = [
	{
		id: 'london-lagos',
		route: 'London → Lagos',
		type: 'Economy Return',
		priceFromGbp: 489,
		note: 'Subject to seat availability and travel date seasonality.',
		images: [
			'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1200',
		],
	},
	{
		id: 'direct-pakistan-pia',
		route: 'UK → Pakistan (Direct)',
		type: 'PIA Direct Flight',
		priceFromGbp: 750,
		note: 'Direct options depend on departure city and airline schedule windows.',
		images: [
			'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1200',
			'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1200',
		],
	},
];
