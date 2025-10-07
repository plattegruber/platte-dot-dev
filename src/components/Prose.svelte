
<script>
	let { tag = 'div', className = '', children, invert = true } = $props();

	const shared = [
		'prose',
		'prose-lg',
		'max-w-none',
		'leading-7',
		'text-pretty',
		'prose-headings:font-semibold',
		'prose-headings:tracking-tight',
		'prose-h1:text-4xl',
		'sm:prose-h1:text-5xl',
		'prose-h2:mt-16',
		'prose-h2:text-3xl',
		'prose-h3:text-2xl',
		'prose-h4:text-xl',
		'prose-ul:space-y-4',
		'prose-ol:space-y-4',
		'prose-img:rounded-2xl',
		'prose-figcaption:text-sm',
		'prose-figcaption:mt-4'
	];

	const inverted = [
		'prose-invert',
		'prose-zinc',
		'text-zinc-300',
		'prose-p:text-zinc-300',
		'prose-headings:text-white',
		'prose-strong:text-white',
		'prose-em:text-zinc-200',
		'prose-a:text-indigo-300',
		'hover:prose-a:text-indigo-200',
		'prose-a:no-underline',
		'hover:prose-a:underline',
		'prose-blockquote:border-s-4',
		'prose-blockquote:border-indigo-400/50',
		'prose-blockquote:text-zinc-200',
		'prose-blockquote:italic',
		'prose-li:marker:text-indigo-300',
		'prose-code:text-indigo-200',
		'prose-code:bg-white/5',
		'prose-code:px-1.5',
		'prose-code:py-0.5',
		'prose-pre:bg-white/5',
		'prose-pre:text-zinc-200',
		'prose-table:border-separate',
		'prose-table:border-spacing-y-2',
		'prose-th:text-white',
		'prose-td:border-white/5',
		'prose-hr:border-white/10'
	];

	const light = [
		'prose-zinc',
		'text-gray-600',
		'prose-p:text-gray-600',
		'prose-headings:text-gray-900',
		'dark:text-gray-300',
		'dark:prose-p:text-gray-300',
		'dark:prose-headings:text-white',
		'prose-strong:text-gray-900',
		'dark:prose-strong:text-white',
		'prose-em:text-gray-700',
		'dark:prose-em:text-gray-200',
		'prose-a:text-indigo-600',
		'hover:prose-a:text-indigo-500',
		'dark:prose-a:text-indigo-300',
		'dark:hover:prose-a:text-indigo-200',
		'prose-a:no-underline',
		'hover:prose-a:underline',
		'prose-blockquote:border-s-4',
		'prose-blockquote:border-indigo-500/60',
		'prose-blockquote:text-gray-700',
		'dark:prose-blockquote:text-gray-200',
		'prose-blockquote:italic',
		'prose-li:marker:text-indigo-500',
		'dark:prose-li:marker:text-indigo-300',
		'prose-code:text-indigo-700',
		'dark:prose-code:text-indigo-200',
		'prose-code:bg-indigo-100/40',
		'dark:prose-code:bg-white/5',
		'prose-code:px-1.5',
		'prose-code:py-0.5',
		'prose-pre:bg-indigo-50/60',
		'dark:prose-pre:bg-white/5',
		'prose-pre:text-gray-800',
		'dark:prose-pre:text-zinc-200',
		'prose-table:border-separate',
		'prose-table:border-spacing-y-2',
		'prose-th:text-gray-900',
		'dark:prose-th:text-white',
		'prose-td:border-gray-200',
		'dark:prose-td:border-white/10',
		'prose-hr:border-gray-200',
		'dark:prose-hr:border-white/10'
	];

	const tone = invert ? inverted : light;
	const base = [...shared, ...tone].join(' ');
</script>

<svelte:element this={tag} class={className ? `${base} ${className}` : base}>
	{@render children?.()}
</svelte:element>
