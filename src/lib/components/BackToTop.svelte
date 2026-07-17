<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		const onScroll = () => {
			visible = window.scrollY > 300;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button class="back-to-top" class:visible type="button" aria-label="חזור למעלה" onclick={scrollTop}>
	<i class="fa-solid fa-arrow-up"></i>
</button>
