<script>
  import { onMount } from 'svelte';
  
  // In a real app, you would import your posts or fetch them
  // This is a placeholder for demonstration
  let posts = [
    {
      slug: 'hello-world',
      title: 'Getting Started with Svelte: A Developer\'s Journey',
      date: '2023-11-15',
      description: 'My first steps into Svelte development and what I\'ve learned along the way',
      tags: ['svelte', 'web development', 'javascript', 'beginners']
    }
    // More posts would go here
  ];
</script>

<div class="max-w-4xl mx-auto px-4 py-8">
  <header class="mb-12 text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-2">My Dev Blog</h1>
    <p class="text-xl text-gray-600">Thoughts, learnings, and code snippets from my development journey</p>
  </header>

  <main>
    <div class="space-y-10">
      {#each posts as post}
        <article class="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <a href={`/posts/${post.slug}`} class="no-underline">
            <h2 class="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{post.title}</h2>
          </a>
          <div class="mb-4">
            <time class="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <p class="text-gray-700 mb-4">{post.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
              <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">#{tag}</span>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </main>
</div>
