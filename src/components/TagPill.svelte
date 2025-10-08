
<script>
	let { tag = 'span', className = '', children, tone = 'dark' } = $props();

	const base = 'inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide';
	const palettes = /** @type {Record<'dark' | 'light', string>} */ ({
		dark: 'border border-white/10 bg-[#11181d] text-[color:rgba(6,214,160,0.7)]',
		light:
			'border border-[rgba(17,138,178,0.25)] bg-[color:rgba(17,138,178,0.08)] text-[color:rgba(17,138,178,0.75)] dark:border-[rgba(255,209,102,0.3)] dark:bg-[rgba(255,209,102,0.12)] dark:text-[color:rgba(255,209,102,0.8)]'
	});

	const palette = palettes[/** @type {'dark' | 'light'} */ (tone)] ?? palettes.dark;
	const resolved = className ? `${base} ${palette} ${className}` : `${base} ${palette}`;
</script>

<svelte:element this={tag} class={resolved}>
	{@render children?.()}
</svelte:element>
