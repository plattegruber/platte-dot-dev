<script>
	let { tag = 'div', className = '', children } = $props();

	const base = [
		'prose',
		'prose-invert',
		'prose-headings:font-semibold',
		'prose-headings:text-white',
		'prose-headings:tracking-tight',
		'prose-p:text-zinc-200',
		'prose-p:leading-relaxed',
		'prose-a:text-teal-300',
		'prose-a:no-underline',
		'hover:prose-a:underline',
		'prose-strong:text-white',
		'prose-blockquote:border-l-teal-400/60',
		'prose-blockquote:text-zinc-200',
		'prose-blockquote:italic',
		'prose-code:rounded-md',
		'prose-code:bg-white/5',
		'prose-code:px-1.5',
		'prose-code:py-0.5',
		'prose-code:text-teal-200',
		'prose-pre:bg-white/5',
		'prose-pre:text-zinc-200',
		'prose-pre:backdrop-blur-sm',
		'prose-img:rounded-3xl',
		'prose-hr:border-white/10',
		'prose-li:marker:text-teal-300',
		'prose-table:text-zinc-200',
		'prose-table:border-white/10',
		'prose-th:text-white',
		'prose-headings:scroll-mt-24',
		'prose-ul:space-y-2'
	].join(' ');
</script>

<svelte:element this={tag} class={className ? `${base} ${className}` : base}>
	{@render children?.()}
</svelte:element>
