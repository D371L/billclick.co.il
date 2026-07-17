import type { Action } from 'svelte/action';

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const scrollReveal: Action<HTMLElement> = (node) => {
	node.classList.add('scroll-reveal');

	if (prefersReducedMotion()) {
		node.classList.add('visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
