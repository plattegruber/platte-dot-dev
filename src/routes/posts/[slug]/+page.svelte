<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	const PostContent = data.post.content;
</script>

<div class="mx-auto max-w-3xl px-4 py-8">
	<article class="prose lg:prose-xl">
		<header class="not-prose mb-8">
			<a href="/" class="mb-4 inline-block text-blue-600 hover:text-blue-800">← Back to all posts</a
			>
			<h1 class="mt-4 mb-2 text-4xl font-bold text-gray-800">{data.post.metadata.title}</h1>
			<time class="text-gray-500"
				>{new Date(data.post.metadata.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</time
			>
			<div class="mt-4 flex flex-wrap gap-2">
				{#each data.post.metadata.tags as tag}
					<span class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">#{tag}</span>
				{/each}
			</div>
		</header>

		<div class="blog-content">
			<PostContent />
		</div>
	</article>
</div>
