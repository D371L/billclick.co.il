<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	const stats = [
		{ target: 2000, label: 'לקוחות פעילים' },
		{ target: 5, label: 'שנות ניסיון בענף' },
		{ target: 500, label: 'אנשי מקצוע' }
	];

	let values = $state(stats.map(() => 0));
	let sectionEl: HTMLElement | undefined = $state();

	onMount(() => {
		if (!sectionEl) return;

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;

					stats.forEach((stat, i) => {
						if (reduced) {
							values[i] = stat.target;
							return;
						}

						const duration = 1600;
						const start = performance.now();

						const tick = (now: number) => {
							const progress = Math.min((now - start) / duration, 1);
							values[i] = Math.ceil(progress * stat.target);
							if (progress < 1) requestAnimationFrame(tick);
							else values[i] = stat.target;
						};

						requestAnimationFrame(tick);
					});

					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.4 }
		);

		observer.observe(sectionEl);
		return () => observer.disconnect();
	});
</script>

<section class="stats-section" bind:this={sectionEl}>
	<div class="container margin-auto">
		<h2 class="stats-title" use:scrollReveal>המספרים מדברים בעד עצמם</h2>
		<div class="stats-grid">
			{#each stats as stat, i (stat.label)}
				<div class="stat-item" use:scrollReveal>
					<div class="stat-number">{values[i]}</div>
					<div class="stat-label">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
