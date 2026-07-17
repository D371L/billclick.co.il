<script lang="ts">
	import { onMount } from 'svelte';

	const phones = [
		{ src: '/assets/vaadbot/preview-1.png', alt: 'מסך VaadBot', width: 240, height: 490 },
		{ src: '/assets/vaadbot/preview-2.png', alt: '', width: 220, height: 450 },
		{ src: '/assets/vaadbot/preview-3.png', alt: '', width: 220, height: 450 },
		{ src: '/assets/vaadbot/preview-4.png', alt: '', width: 200, height: 410 }
	];

	const roles = ['is-front', 'is-right', 'is-back', 'is-left'] as const;
	let offset = $state(0);

	const roleFor = (index: number) => {
		const roleIndex = (index - offset + phones.length) % phones.length;
		return roles[Math.min(roleIndex, roles.length - 1)];
	};

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		let timer: ReturnType<typeof setInterval> | null = null;

		const stop = () => {
			if (timer) {
				clearInterval(timer);
				timer = null;
			}
		};

		const start = () => {
			if (timer || document.hidden) return;
			timer = setInterval(() => {
				offset = (offset + 1) % phones.length;
			}, 3500);
		};

		start();
		const onVis = () => (document.hidden ? stop() : start());
		document.addEventListener('visibilitychange', onVis);

		return () => {
			stop();
			document.removeEventListener('visibilitychange', onVis);
		};
	});
</script>

<a href="/vaadbot/" class="hero-phones" aria-label="האפליקציות שלנו">
	{#each phones as phone, index (phone.src)}
		<img
			class="hero-phone {roleFor(index)}"
			src={phone.src}
			alt={phone.alt}
			width={phone.width}
			height={phone.height}
			loading={index === 0 ? 'eager' : 'lazy'}
		/>
	{/each}
</a>
