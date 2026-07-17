<script lang="ts">
	import '$lib/styles/site.css';
	import Preloader from '$lib/components/Preloader.svelte';
	import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
	<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<Preloader />
{@render children()}
<WhatsAppFloat />
<BackToTop />
