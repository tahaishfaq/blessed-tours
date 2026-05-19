export type NavLink = {
	label: string;
	href: string;
};

export type NavItem =
	| (NavLink & { children?: never })
	| (NavLink & { children: NavLink[] });

export const mainNav: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Umrah Packages', href: '/umrah-packages' },
	{ label: 'Hajj Packages', href: '/hajj-packages' },
	{ label: 'Flights', href: '/flights' },
	{ label: 'Holiday Packages', href: '/holiday-packages' },
	{ label: 'About Us', href: '/about-us' },
];

export const whatsapp = {
	label: 'Whatsapp',
	href: 'https://wa.me/442037731172',
	number: '442037731172',
};

export const phone = {
	label: '0203-773-1172',
	href: 'tel:02037731172',
};
