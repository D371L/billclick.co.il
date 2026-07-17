<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	type NavItem = { href: string; label: string; mobileOnly?: boolean };

	let {
		variant = 'home',
		navItems
	}: {
		variant?: 'home' | 'vaadbot';
		navItems: NavItem[];
	} = $props();

	let menuOpen = $state(false);
	let scrolled = $state(false);

	const isApps = $derived(page.url.pathname.startsWith('/vaadbot'));

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	function closeMenu() {
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="site-header" class:vb-header={variant === 'vaadbot'} class:scrolled>
	<div class="header-inner">
		<a href="/" class="logo" onclick={closeMenu}>
			BillClick<span class="dot">.</span>
		</a>

		<nav class="main-nav" class:active={menuOpen} id="main-nav" aria-label="ניווט ראשי">
			<ul>
				{#each navItems as item (item.href)}
					<li class:mobile-link={item.mobileOnly}>
						<a
							href={item.href}
							class:nav-active={item.href.includes('/vaadbot') && isApps}
							onclick={closeMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a href={variant === 'vaadbot' ? '/#contact' : '#contact'} class="btn btn-primary header-cta">
			צור קשר
		</a>

		<button
			class="mobile-menu-toggle"
			type="button"
			aria-label="תפריט"
			aria-expanded={menuOpen}
			aria-controls="main-nav"
			onclick={toggleMenu}
		>
			<span class="bar" style={menuOpen ? 'transform: rotate(-45deg) translate(-5px, 6px)' : ''}
			></span>
			<span class="bar" style={menuOpen ? 'opacity: 0' : ''}></span>
			<span class="bar" style={menuOpen ? 'transform: rotate(45deg) translate(-5px, -6px)' : ''}
			></span>
		</button>
	</div>
</header>
