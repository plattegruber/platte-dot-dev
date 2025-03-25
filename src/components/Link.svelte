<script>
	import { base } from '$app/paths';
	/** @type {string} */
	export let href;
</script>

<a href={base + href} class="mb-4 inline-block text-blue-600 hover:text-blue-800">
	<slot />
</a>
