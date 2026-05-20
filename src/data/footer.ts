import type { NavLink } from './navigation';

export const footerTagline =
	'Trusted UK partner for Hajj, Umrah, and Islamic travel — expert guidance from enquiry to return.';

export const footerPackageLinks: NavLink[] = [
	{ label: 'Umrah Packages', href: '/umrah-packages' },
	{ label: 'Hajj Packages', href: '/hajj-packages' },
	{ label: 'Flights', href: '/flights' },
	{ label: 'Holiday Packages', href: '/holiday-packages' },
];

export const footerCompanyLinks: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About Us', href: '/about-us' },
	{ label: 'Contact Us', href: '/contact-us' },
];

export const footerLegalLinks: NavLink[] = [
	{ label: 'Privacy Policy', href: '/privacy-policy' },
	{ label: 'Terms & Conditions', href: '/terms' },
	{ label: 'Payment Security', href: '/payment-security' },
];

export const footerContact = {
	email: {
		label: 'info@blessedtours.co.uk',
		href: 'mailto:info@blessedtours.co.uk',
	},
	region: 'Serving pilgrims across the United Kingdom',
} as const;

export const footerSocialLinks = [
	{
		label: 'TikTok',
		href: 'https://www.tiktok.com/@blessedtours',
		icon: 'tiktok',
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/blessedtoursuk/',
		icon: 'instagram',
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/blessedtoursuk',
		icon: 'facebook',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/blessed-tours-796433372/',
		icon: 'linkedin',
	},
] as const;
