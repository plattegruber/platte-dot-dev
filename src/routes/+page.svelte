<script>
	import Container from '$components/Container.svelte';
	import Link from '$components/Link.svelte';
	import TagPill from '$components/TagPill.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { posts } = data;

	const featured = posts.length > 0 ? posts[0] : null;
	const allPosts = posts;

	const tags = (() => {
		const seen = new Set();
		for (const post of posts) {
			for (const tag of post.tags ?? []) {
				seen.add(tag);
			}
		}
		return Array.from(seen).slice(0, 10);
	})();

	const heroDescription = featured
		? `Fresh from the notebook: ${featured.description}`
		: 'I write about modern web engineering, developer tooling, and the tiny details that make interfaces feel alive.';

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
		<p class="text-sm font-semibold uppercase tracking-[0.35em] text-[color:rgba(17,138,178,0.6)]">
			Development journal
		</p>
		<h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
			My Dev Blog
		</h1>
		<p class="mt-6 text-lg text-zinc-300/90">{heroDescription}</p>

		{#if featured}
			<div class="mt-8 flex flex-wrap items-center gap-4">
				<Link href={`/posts/${featured.slug}`} variant="button">
					Read "{featured.title}"
				</Link>
				<Link href="#archive" variant="subtle">Browse archive</Link>
			</div>
		{/if}
	</div>
</Container>

<section id="archive" class="mt-16 lg:mt-20">
	<Container>
		<div class="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
		<div class="flex flex-col gap-10">
			{#if allPosts.length === 0}
				<p class="text-zinc-400">No posts available yet. Check back soon.</p>
			{:else}
				{#each allPosts as post (post.slug)}
					<article
						class="group rounded-3xl border border-white/5 bg-[#0f161b] p-8 transition duration-300 hover:border-[color:rgba(17,138,178,0.45)]"
					>
						<header class="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[color:rgba(255,209,102,0.65)]">
							<span class="h-px w-8 bg-[color:rgba(6,214,160,0.3)]" aria-hidden="true"></span>
							<time datetime={post.date}>{formatDate(post.date)}</time>
						</header>
						<h2 class="mt-6 text-2xl font-semibold tracking-tight text-white transition duration-300 sm:text-3xl">
							<Link
								href={`/posts/${post.slug}`}
								variant="plain"
								className="group-hover:text-[color:var(--color-sun)]"
							>
								{post.title}
							</Link>
						</h2>
						<p class="mt-4 text-base leading-relaxed text-zinc-300/90">{post.description}</p>
					{#if post.tags?.length}
						<ul class="mt-6 flex flex-wrap gap-2">
							{#each post.tags as tag}
								<TagPill tag="li">{tag}</TagPill>
							{/each}
						</ul>
						{/if}
						<div class="mt-8">
							<Link
								href={`/posts/${post.slug}`}
								variant="link"
								className="group/link text-sm font-semibold uppercase tracking-[0.3em]"
							>
								<span>Read article</span>
								<span aria-hidden="true" class="transition-transform group-hover/link:translate-x-1">→</span>
							</Link>
						</div>
					</article>
				{/each}
			{/if}
		</div>
		<aside class="space-y-10 lg:pl-6 xl:pl-12">
			<div class="rounded-3xl border border-white/5 bg-[#0f161b] p-8">
				<h2 class="text-sm font-semibold uppercase tracking-[0.35em] text-[color:rgba(17,138,178,0.6)]">
					About this space
				</h2>
				<p class="mt-4 text-sm leading-relaxed text-zinc-400/90">
					Notes on crafting interfaces, learning in public, and building thoughtful developer experiences. Expect Svelte deep dives, Tailwind workflow tips, and the occasional detour into product thinking.
				</p>
			</div>
			{#if tags.length}
				<div class="rounded-3xl border border-white/5 bg-[#0f161b] p-8">
					<h2 class="text-sm font-semibold uppercase tracking-[0.35em] text-[color:rgba(239,71,111,0.6)]">
						Topics on rotation
					</h2>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each tags as tag}
							<TagPill>{tag}</TagPill>
						{/each}
					</div>
				</div>
			{/if}
			<div class="rounded-3xl border border-white/5 bg-[#0f161b] p-8">
				<h2 class="text-sm font-semibold uppercase tracking-[0.35em] text-[color:rgba(17,138,178,0.6)]">
					Stay in the loop
				</h2>
				<p class="mt-4 text-sm leading-relaxed text-zinc-400/90">
					No formal newsletter yet, but I share new posts and experiments as soon as they are ready.
				</p>
				<div class="mt-6">
					<Link href="mailto:hello@platte.dev" variant="subtle">
						<span class="text-sm uppercase tracking-[0.3em]">Say hello</span>
					</Link>
				</div>
			</div>
		</aside>
	</div>
	</Container>
</section>
