<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	type Props = { children?: any };
	let { children }: Props = $props();
</script>

<Navbar />

<main class="min-h-screen">
	{@render children?.()}
</main>

<Footer />
