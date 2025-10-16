import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];
export const purposeTypeOptions = [
	{ label: "Default", value: "default" },
	{ label: "Primary", value: "primary" }
];

export const themes = [
	{
		label: 'Default',
		value: 'default',
		content: `<!-- wp:b-reactify/slider /-->`,
		isPro: false
	},
	{
		label: 'Vertical',
		value: 'vertical',
		content: `<!-- wp:b-reactify/slider {"theme":"vertical","styles":{"container":{"bg":{"color":""},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"radius":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}},"heading":{"typo":{"fontSize":{"desktop":"1.875rem","tablet":"1.4rem","mobile":"1.4rem"},"fontWeight":700,"lineHeight":"1.6rem","letterSpacing":"normal"},"align":"center","color":"000000"},"card":{"bg":{"color":"#00283a"},"border":{"width":"1px","style":"solid","color":"#004e754d","radius":"16px","side":"all"},"shadow":[{"hOffset":"0px","vOffset":"0px","blur":"10px","spread":"0px","color":"rgba(0, 0, 0, 0.2)","isInset":false}],"hoverShadow":[{"hOffset":"0px","vOffset":"0px","blur":"20px","spread":"0px","color":"rgba(0, 0, 0, 0.4)","isInset":false}],"img":{"height":"100%","width":"100%"},"title":{"typo":{"fontSize":{"desktop":"1.25rem","tablet":"1rem","mobile":"1rem"},"fontWeight":600,"lineHeight":"1.6rem","letterSpacing":"normal"},"color":"#c9c9c9"},"desc":{"typo":{"fontSize":{"desktop":"1rem","tablet":"0.8rem","mobile":"0.8rem"},"fontWeight":400,"lineHeight":"1.6rem","letterSpacing":"normal"},"color":"#c9c9c9"}}}} /-->`,
		isPro: true
	}

];

export const themeOptions = [
	{ value: 'default', label: "Default" },
	{ value: 'vertical', label: "Vertical" },

];