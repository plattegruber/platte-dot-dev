<script>
	import Container from '$components/Container.svelte';
	import Link from '$components/Link.svelte';
	import Prose from '$components/Prose.svelte';
	import TagPill from '$components/TagPill.svelte';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	const PostContent = data.post.content;

	/**
	 * @param {string} value
	 */
	const formatDate = (value) => {
		const date = new Date(value);
		return Number.isNaN(date.getTime())
			? value
			: date.toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			});
	};
</script>

<section class="px-6 pt-24 pb-12 lg:px-8 lg:pt-32">
	<Container className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-200">
		<Link
			href="/"
			variant="plain"
			className="flex items-center gap-2 text-[color:var(--color-sky)] transition hover:text-[color:var(--color-rose)] dark:text-[color:var(--color-sun)] dark:hover:text-[color:var(--color-mint)] uppercase tracking-[0.3em]"
		>
			<span aria-hidden="true">←</span>
			<span>All posts</span>
		</Link>
		<p class="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[color:rgba(239,71,111,0.75)] dark:text-[color:rgba(255,209,102,0.8)]">
			{formatDate(data.post.metadata.date)}
		</p>
		<h1 class="mt-4 text-4xl font-semibold tracking-tight text-pretty text-[#073b4c] sm:text-5xl dark:text-white">
			{data.post.metadata.title}
		</h1>
		<p class="mt-6 text-xl leading-8 text-slate-700/90 dark:text-slate-100">
			{data.post.metadata.description}
		</p>
		{#if data.post.metadata.tags?.length}
			<ul class="mt-8 flex flex-wrap gap-3">
				{#each data.post.metadata.tags as tag}
					<TagPill tag="li" tone="light">#{tag}</TagPill>
				{/each}
			</ul>
		{/if}
	</Container>
</section>

<section class="px-6 pb-24 lg:px-8">
	<Container className="max-w-3xl rounded-3xl border border-white/5 bg-[#10181d] px-8 py-16 text-base leading-7 text-zinc-300">
		<Prose className="text-base leading-7 text-zinc-300">
			<PostContent />
		</Prose>
	</Container>
</section>
