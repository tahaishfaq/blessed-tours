export const departureCities = [
	'London',
	'Glasgow',
	'Birmingham',
	'Manchester',
	'Bradford',
	'Leicester',
	'Other',
] as const;

export const travelerOptions = Array.from({ length: 10 }, (_, i) => ({
	value: String(i + 1),
	label: i + 1 === 1 ? '1 Traveler' : `${i + 1} Travelers`,
}));

export const nightOptions = [
	{ value: '3', label: '3 Nights' },
	{ value: '4', label: '4 Nights' },
	{ value: '5', label: '5 Nights' },
	{ value: '6', label: '6 Nights' },
	{ value: '7', label: '7 Nights' },
	{ value: '8', label: '8 Nights' },
	{ value: '9', label: '9 Nights' },
	{ value: '10', label: '10 Nights' },
	{ value: 'other', label: 'Other' },
] as const;
