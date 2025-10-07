<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="relative min-h-screen overflow-hidden">
	<div class="pointer-events-none absolute inset-x-0 -top-64 z-0 flex justify-center blur-3xl">
		<div class="aspect-[1155/678] w-[70rem] max-w-none bg-gradient-to-tr from-teal-500/30 via-sky-500/20 to-fuchsia-500/25 opacity-70"></div>
	</div>
	<main class="relative z-10 pb-24">
		{@render children()}
	</main>
</div>
