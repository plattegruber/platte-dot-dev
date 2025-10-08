
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
		'prose-h2:mt-14',
		'prose-h2:text-3xl',
		'prose-h3:text-2xl',
		'prose-h4:text-xl',
		'prose-ul:space-y-3',
		'prose-ol:space-y-3',
		'prose-img:rounded-2xl',
		'prose-figcaption:text-sm',
		'prose-figcaption:mt-4'
	];

	const inverted = [
		'prose-invert',
		'text-slate-200',
		'prose-p:text-slate-200',
		'prose-headings:text-white',
		'prose-strong:text-white',
		'prose-em:text-slate-100',
		'prose-a:text-[color:var(--color-sun)]',
		'hover:prose-a:text-[color:var(--color-mint)]',
		'prose-a:no-underline',
		'hover:prose-a:underline',
		'prose-blockquote:border-s-4',
		'prose-blockquote:border-[color:rgba(239,71,111,0.45)]',
		'prose-blockquote:text-[color:rgba(255,255,255,0.78)]',
		'prose-blockquote:italic',
		'prose-li:marker:text-[color:var(--color-sun)]',
		'prose-code:text-[color:var(--color-mint)]',
		'prose-code:bg-white/10',
		'prose-code:px-1.5',
		'prose-code:py-0.5',
		'prose-pre:bg-white/5',
		'prose-pre:text-slate-100',
		'prose-table:border-separate',
		'prose-table:border-spacing-y-2',
		'prose-th:text-white',
		'prose-td:border-white/10',
		'prose-hr:border-white/10'
	];

	const light = [
		'text-slate-600',
		'prose-p:text-slate-600',
		'prose-headings:text-[#0a2f3a]',
		'dark:text-slate-200',
		'dark:prose-p:text-slate-200',
		'dark:prose-headings:text-white',
		'prose-strong:text-[#073b4c]',
		'dark:prose-strong:text-white',
		'prose-em:text-slate-600',
		'dark:prose-em:text-slate-100',
		'prose-a:text-[color:var(--color-sky)]',
		'hover:prose-a:text-[color:var(--color-rose)]',
		'dark:prose-a:text-[color:var(--color-sun)]',
		'dark:hover:prose-a:text-[color:var(--color-mint)]',
		'prose-a:no-underline',
		'hover:prose-a:underline',
		'prose-blockquote:border-s-4',
		'prose-blockquote:border-[color:rgba(17,138,178,0.35)]',
		'prose-blockquote:text-slate-600',
		'dark:prose-blockquote:text-slate-100',
		'prose-blockquote:italic',
		'prose-li:marker:text-[color:var(--color-rose)]',
		'dark:prose-li:marker:text-[color:var(--color-sun)]',
		'prose-code:text-[color:var(--color-rose)]',
		'dark:prose-code:text-[color:var(--color-mint)]',
		'prose-code:bg-[color:rgba(239,71,111,0.08)]',
		'dark:prose-code:bg-white/10',
		'prose-code:px-1.5',
		'prose-code:py-0.5',
		'prose-pre:bg-[color:rgba(17,138,178,0.08)]',
		'dark:prose-pre:bg-white/5',
		'prose-pre:text-slate-700',
		'dark:prose-pre:text-slate-100',
		'prose-table:border-separate',
		'prose-table:border-spacing-y-2',
		'prose-th:text-[#0a2f3a]',
		'dark:prose-th:text-white',
		'prose-td:border-slate-200',
		'dark:prose-td:border-white/10',
		'prose-hr:border-slate-200',
		'dark:prose-hr:border-white/10'
	];

	const tone = invert ? inverted : light;
	const base = [...shared, ...tone].join(' ');
</script>

<svelte:element this={tag} class={className ? `${base} ${className}` : base}>
	{@render children?.()}
</svelte:element>
