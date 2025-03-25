<script>
	import { base } from '$app/paths';
	import Link from '$components/Link.svelte';

	// Replace your hardcoded posts with the data loaded by +page.js
	export let data;
	const { posts } = data;
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="mb-2 text-4xl font-bold text-gray-800">My Dev Blog</h1>
		<p class="text-xl text-gray-600">
			Thoughts, learnings, and code snippets from my development journey
		</p>
	</header>

	<main>
		<div class="space-y-10">
			{#each posts as post}
				<article
					class="rounded-lg border border-gray-200 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
				>
					<Link href={`${base}/posts/${post.slug}`}>
						<h2 class="mb-2 text-2xl font-bold text-gray-800 transition-colors hover:text-blue-600">
							{post.title}
						</h2>
					</Link>
					<div class="mb-4">
						<time class="text-sm text-gray-500"
							>{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}</time
						>
					</div>
					<p class="mb-4 text-gray-700">{post.description}</p>
					<div class="flex flex-wrap gap-2">
						{#if post.tags}
							<div class="flex flex-wrap gap-2">
								{#each post.tags as tag}
									<span class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800"
										>#{tag}</span
									>
								{/each}
							</div>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</main>
</div>
