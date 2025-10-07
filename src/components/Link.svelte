<script>
	import { base } from '$app/paths';
	/** @type {string} */
	export let href;

	const isExternal = /^([a-z+.-]+:)?\/\//i;

	$: resolvedHref = (() => {
		if (isExternal.test(href) || href.startsWith('#')) {
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
</script>

<a href={resolvedHref} class="mb-4 inline-block text-blue-600 hover:text-blue-800">
	<slot />
</a>
