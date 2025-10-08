<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen">
	<main class="pb-24">
		{@render children()}
	</main>
</div>
