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

<Container className="pt-24 lg:pt-32">
	<div class="max-w-3xl">
		<Link href="/" variant="subtle" className="uppercase tracking-[0.3em]">
			<span aria-hidden="true">←</span>
			<span>Back to all posts</span>
		</Link>
		<h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
			{data.post.metadata.title}
		</h1>
		<time class="mt-4 block text-sm font-semibold uppercase tracking-[0.35em] text-teal-200" datetime={data.post.metadata.date}>
			{formatDate(data.post.metadata.date)}
		</time>
		{#if data.post.metadata.tags?.length}
			<ul class="mt-6 flex flex-wrap gap-2">
				{#each data.post.metadata.tags as tag}
					<TagPill tag="li">{tag}</TagPill>
				{/each}
			</ul>
		{/if}
	</div>
</Container>

<Container className="mt-16">
	<article class="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-16 shadow-lg shadow-black/20 transition lg:px-12">
		<div class="pointer-events-none absolute -inset-x-16 -top-24 -z-10 h-64 bg-gradient-to-br from-teal-500/30 via-transparent to-indigo-500/10 opacity-70 blur-3xl" aria-hidden="true"></div>
		<Prose>
			<PostContent />
		</Prose>
	</article>
</Container>
