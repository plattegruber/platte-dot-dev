<script>
	import Container from '$components/Container.svelte';
	import Link from '$components/Link.svelte';
	import Prose from '$components/Prose.svelte';
	import TagPill from '$components/TagPill.svelte';
	import { base } from '$app/paths';

	const heroImageSrc = `${base}/images/a-digital-docent.png`;

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


<section class="px-6 pt-24 pb-8 lg:px-8 lg:pt-32">
	<Container className="max-w-4xl text-base leading-7 text-slate-200">
		<Link
			href="/"
			variant="plain"
			className="flex items-center gap-2 text-[color:rgba(17,138,178,0.75)] transition hover:text-[color:var(--color-mint)] uppercase tracking-[0.3em]"
		>
			<span aria-hidden="true">←</span>
			<span>All posts</span>
		</Link>
		<figure class="mt-8 -mx-6 overflow-hidden bg-[#0d1418] sm:mx-0 sm:rounded-3xl">
			<div class="relative">
				<img
					src={heroImageSrc}
					alt="Artful illustration for the Digital Docent article"
					class="block h-72 w-full object-cover sm:h-[28rem]"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-[#0b1114] via-transparent to-transparent" aria-hidden="true"></div>
				<div class="absolute inset-0 flex items-end">
					<div class="w-full px-6 py-8 sm:px-10">
						<h1 class="text-left text-4xl font-semibold uppercase tracking-[0.45em] text-white sm:text-5xl md:text-6xl lg:text-[6.5rem] leading-[1.05] drop-shadow-[0_22px_50px_rgba(7,59,76,0.55)]">
							{#each data.post.metadata.title.split(' ') as word, index}
								<span class="block {index === data.post.metadata.title.split(' ').length - 1 ? 'text-[color:rgba(255,209,102,0.85)]' : ''}">{word}</span>
							{/each}
						</h1>
						<p class="mt-6 max-w-2xl text-2xl font-medium leading-9 text-zinc-100/90">
							{data.post.metadata.description}
						</p>
					</div>
				</div>
			</div>
		</figure>
		<div class="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-[color:rgba(255,209,102,0.7)]">
			<time datetime={data.post.metadata.date}>{formatDate(data.post.metadata.date)}</time>
			{#if data.post.metadata.tags?.length}
				<ul class="flex flex-wrap gap-2">
					{#each data.post.metadata.tags as tag}
						<TagPill tag="li" tone="light">#{tag}</TagPill>
					{/each}
				</ul>
			{/if}
		</div>
	</Container>
</section>

<section class="px-6 pb-24 lg:px-8">
	<Container className="max-w-3xl rounded-3xl border border-white/5 bg-[#10181d] px-8 py-16 text-base leading-7 text-zinc-300">
		<Prose className="text-base leading-7 text-zinc-300">
			<PostContent />
		</Prose>
	</Container>
</section>
