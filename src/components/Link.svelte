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
		link: 'inline-flex items-center gap-2 text-teal-300 transition hover:text-teal-200',
		button:
			'inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-teal-300',
		subtle: 'inline-flex items-center gap-2 text-zinc-400 transition hover:text-zinc-200',
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
