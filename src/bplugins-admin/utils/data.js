const slug = 'reactify-slider';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro } = info;

	const proSuffix = isPremium ? ' Pro' : '';

	return {
		name: `Reactify Slider Block ${proSuffix}`,
		displayName: `Reactify Slider Block ${proSuffix}`,
		description: 'Create and showcase your services in style with our Service Card Block plugin. Easily add customizable service cards to your WordPress site, complete with icons, images, and descriptions. Perfect for highlighting your offerings and engaging visitors.',
		slug,
		logo: `https://i.ibb.co.com/C3CkD9JS/Gemini-Generated-Image-y50ovry50ovry50o.png`,
		banner: `https://i.ibb.co.com/jPqv00HX/Generated-Image-October-09-2025-3-34-PM.png`,
		// video: 'https://www.youtube.com/watch?v=bs-U13KtYEA',
		isYoutube: true,
		version,
		isPremium,
		hasPro,
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			landing: `https://bplugins.com/products/${slug}/`,
			docs: `https://bplugins.com/docs/${slug}/`,
			pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		freemius: {
			product_id: 21097,
			plan_id: 35203,
			public_key: 'pk_380e560d47f46928bcfe3cd29bb19'
		}
	}
}

export const changelogs = [
	{
		version: '1.4.0 - 10 Sep, 2025',
		list: [
			'Added new product spot block and update dashboard'
		]
	},
	{
		version: '1.3.4 - 17 August, 2025',
		list: [
			'Added new toggle control Show "by" Prefix to enable/disable the "by" text before the author name'
		]
	},
	{
		version: '1.3.3 - 28 July, 2025',
		list: ['Updated freemius sdk and pricing link']
	},
	{
		version: '1.3.2 - 10 July, 2025',
		list: ['Updated Shortcode clipboard area']
	}
];

export const demoInfo = {
	title: 'Live Overview',
	description: 'Click on any section to view it live',
	allInOneLabel: 'See All Demos',
	allInOneLink: 'https://apb.bplugins.com/all-demos-in-one-place/',
	demos: [
		{
			icon: '',
			title: 'Vertical Layout',
			description: '',
			category: '',
			type: 'image',
			url: 'https://i.ibb.co.com/Ld54Mt7f/Generated-Image-September-22-2025-3-01-PM.png'
		},
		{
			icon: '',
			title: 'Horizontal Layout',
			description: '',
			category: '',
			type: 'image',
			url: 'https://i.ibb.co.com/1t2frHD3/Generated-Image-September-22-2025-3-05-PM.png'
		},
		{
			icon: '',
			title: 'Diagonal Layout',
			description: '',
			category: '',
			type: 'image',
			url: 'https://i.ibb.co.com/jPLhTL7S/Generated-Image-September-22-2025-3-10-PM.png'
		},

	]
}

export const pricingInfo = {
	cycles: [
		{
			cycle: 'monthly',
			label: 'Monthly',
			isDefault: false
		},
		{
			cycle: 'annual',
			label: 'Yearly',
			isDefault: true
		},
		{
			cycle: 'lifetime',
			label: 'Lifetime',
			isDefault: false
		}
	],
	plans: [
		{
			name: 'Single Site',
			quantity: 1,
			prices: {
				monthly: '4.99',
				annual: '47.88',
				lifetime: '149.99'
			},
			pricePrefix: '',
			priceSuffix: '',
			isFeatured: false,
			note: ''
		},
		{
			name: '3 Sites',
			quantity: 3,
			prices: {
				monthly: '8.99',
				annual: '83.88',
				lifetime: '259.99'
			},
			pricePrefix: '',
			priceSuffix: '',
			isFeatured: true,
			note: ''
		},
		{
			name: 'Unlimited Sites',
			quantity: 'null',
			prices: {
				monthly: '33.99',
				annual: '323.88',
				lifetime: '979.99'
			},
			pricePrefix: '',
			priceSuffix: '',
			isFeatured: false,
			note: ''
		}
	],
	features: [
		'Initial Viewing Angle',
		'Enable/Disable Custom Control',
		'Enable/Disable Auto Load',
		'Enable/Disable Draggable',
		'Show/Hide Compass',
		'Show/Hide Title',
		'Show/Hide Author with link',
		'Panorama Gallery',
		'Gallery Limits',
		'Load More button for gallery',
		'Gallery Options Colors',
		'Tour 360° with HotSpot',
		'Google Panoramic Street View'
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		text: 'Best Value'
	}
}

export const featureCompareInfo = {
	title: 'Features',
	plans: [
		{
			id: 'ztbk4ex2fyi',
			name: 'Free Plan',
			color: '#485781'
		},
		{
			id: 'lhmjqhkeyi',
			name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>47.88/y</span>`,
			color: '#146EF5'
		}
	],
	features: [
		{
			label: 'Embed 360° Photos & Videos',
			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
		},
		{
			label: 'Custom Width & Height',
			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
		},
		{
			label: 'Auto-Rotation with Speed Control',
			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
		},
		{
			label: 'Mouse & Touch Dragging',
			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
		},
		{
			label: 'Shortcode & Elementor Support',
			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
		},

		{
			label: '360° Tour with Hotspots',
			plans: ['lhmjqhkeyi']
		},
		{
			label: 'Google Street View Integration',
			plans: ['lhmjqhkeyi']
		},
		{
			label: '3D Images & 360° Videos',
			plans: ['lhmjqhkeyi']
		},
		{
			label: 'Gallery & Load More Option',
			plans: ['lhmjqhkeyi']
		},
		{
			label: 'Custom Initial View & Navigation Controls',
			plans: ['lhmjqhkeyi']
		},
		{
			label: 'Fullscreen, Picture-in-Picture & Speed Control',
			plans: ['lhmjqhkeyi']
		}
	]
}

export const filterDemoInfo = {
	categories: [
		{ label: 'All', value: 'all', col: 1, height: '400px' },
		{ label: 'Vertical', value: 'vertical', col: 1, height: '400px' },
		{ label: 'Horizontal', value: 'horizontal', col: 1, height: '400px' },
		{ label: 'Diagonal', value: 'diagonal', col: 1, height: '400px' },
	],
	demos: [
		{
			title: 'Vertical',
			categories: ['vertical'],
			url: 'https://i.ibb.co.com/Ld54Mt7f/Generated-Image-September-22-2025-3-01-PM.png'
		},
		{
			title: 'Horizontal',
			categories: ['horizontal'],
			url: 'https://i.ibb.co.com/1t2frHD3/Generated-Image-September-22-2025-3-05-PM.png'
		},
		{
			title: 'Diagonal',
			categories: ['diagonal'],
			url: 'https://i.ibb.co.com/jPLhTL7S/Generated-Image-September-22-2025-3-10-PM.png'
		}

	]
}