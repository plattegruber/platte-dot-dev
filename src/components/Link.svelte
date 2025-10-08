<script>
	import { base } from '$app/paths';
	/** @type {string} */
	export let href;
	/** @type {string} */
	export let className = '';
	/** @type {'link' | 'button' | 'subtle' | 'plain'} */
	export let variant = 'link';

	const isExternal = /^([a-z+.-]+:)?\/\//i;
	const variants = {
		link: 'inline-flex items-center gap-2 text-[color:rgba(17,138,178,0.8)] transition hover:text-[color:rgba(6,214,160,0.85)]',
		button:
			'inline-flex items-center gap-2 rounded-full bg-[color:rgba(6,214,160,0.9)] px-5 py-2 text-sm font-semibold text-[color:var(--color-midnight)] shadow-sm transition hover:bg-[color:var(--color-sun)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-sun)]',
		subtle: 'inline-flex items-center gap-2 text-zinc-400 transition hover:text-[color:rgba(255,209,102,0.75)]',
		plain: 'inline-flex items-center text-current'
	};

	const specialProtocols = ['mailto:', 'tel:', 'sms:'];

	$: resolvedHref = (() => {
		if (isExternal.test(href) || href.startsWith('#') || specialProtocols.some((protocol) => href.startsWith(protocol))) {
			return href;
		}

		const normalizedBase = base === '/' ? '' : base;

		if (normalizedBase && href.startsWith(normalizedBase)) {
			return href;
		}

		if (href.startsWith('/')) {
			return `${normalizedBase}${href}`;
		}

		const separator = href ? '/' : '';
		return `${normalizedBase}${separator}${href}`;
	})();

	$: resolvedClass = `${variants[variant] ?? variants.link}${className ? ` ${className}` : ''}`;
</script>

<a href={resolvedHref} class={resolvedClass}>
	<slot />
</a>
