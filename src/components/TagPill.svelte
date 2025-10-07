
<script>
	let { tag = 'span', className = '', children, tone = 'dark' } = $props();

	const base = 'inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide';
	const palettes = /** @type {Record<'dark' | 'light', string>} */ ({
		dark: 'border border-white/10 bg-white/5 text-zinc-300',
		light: 'border border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200'
	});

	const palette = palettes[/** @type {'dark' | 'light'} */ (tone)] ?? palettes.dark;
	const resolved = className ? `${base} ${palette} ${className}` : `${base} ${palette}`;
</script>

<svelte:element this={tag} class={resolved}>
	{@render children?.()}
</svelte:element>
