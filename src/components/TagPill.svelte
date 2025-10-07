<script>
	let { tag = 'span', className = '', children } = $props();

	const base = 'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-300';
</script>

<svelte:element this={tag} class={className ? `${base} ${className}` : base}>
	{@render children?.()}
</svelte:element>
