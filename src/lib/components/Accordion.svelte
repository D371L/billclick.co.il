<script lang="ts">
	type Item = { question: string; answer: string };

	let { items }: { items: Item[] } = $props();

	let openIndex = $state<number | null>(null);
	let contentEls: (HTMLDivElement | undefined)[] = $state([]);

	function toggle(index: number) {
		const wasOpen = openIndex === index;
		openIndex = wasOpen ? null : index;

		queueMicrotask(() => {
			contentEls.forEach((el, i) => {
				if (!el) return;
				if (i === openIndex) {
					el.style.maxHeight = `${el.scrollHeight}px`;
				} else {
					el.style.maxHeight = '';
				}
			});
		});
	}
</script>

<div class="accordion">
	{#each items as item, index (item.question)}
		<div class="accordion-item">
			<button
				class="accordion-header"
				class:active={openIndex === index}
				type="button"
				aria-expanded={openIndex === index}
				aria-controls={`faq-panel-${index}`}
				id={`faq-btn-${index}`}
				onclick={() => toggle(index)}
			>
				<span>{item.question}</span>
				<i class="fa-solid fa-chevron-down"></i>
			</button>
			<div
				class="accordion-content"
				id={`faq-panel-${index}`}
				role="region"
				aria-labelledby={`faq-btn-${index}`}
				bind:this={contentEls[index]}
			>
				<p>{item.answer}</p>
			</div>
		</div>
	{/each}
</div>
