<script>
	let { tag = 'div', className = '', children } = $props();

	const base = 'mx-auto w-full max-w-5xl px-6';
</script>

<svelte:element this={tag} class={className ? `${base} ${className}` : base}>
	{@render children?.()}
</svelte:element>
