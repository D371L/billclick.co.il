<script lang="ts">
	import { onMount } from 'svelte';

	let hidden = $state(false);
	let displayNone = $state(false);

	onMount(() => {
		if (sessionStorage.getItem('bc-seen') === '1') {
			hidden = true;
			displayNone = true;
			return;
		}

		const hide = () => {
			hidden = true;
			sessionStorage.setItem('bc-seen', '1');
		};

		const onLoad = () => setTimeout(hide, 120);
		window.addEventListener('load', onLoad);
		const fallback = setTimeout(hide, 800);

		return () => {
			window.removeEventListener('load', onLoad);
			clearTimeout(fallback);
		};
	});
</script>

{#if !displayNone}
	<div id="preloader" class:fade-out={hidden} aria-hidden="true">
		<div class="loader-content">
			<div class="loader-logo">BillClick<span class="dot">.</span></div>
			<div class="loader-spinner"></div>
		</div>
	</div>
{/if}
