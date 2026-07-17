<script lang="ts">
	let { appsHref = '/vaadbot/' }: { appsHref?: string } = $props();
</script>

<footer class="site-footer">
	<div class="container margin-auto text-center">
		<a href="/" class="footer-logo">BillClick<span>.</span></a>
		<nav class="footer-nav" aria-label="קישורים בתחתית">
			<a href="/#contact">צור קשר</a>
			<a href={appsHref}>אפליקציות</a>
			<a href="https://wa.me/972507275202" target="_blank" rel="noopener">וואטסאפ</a>
		</nav>
		<p>&copy; 2026 בילקליק (BillClick). כל הזכויות שמורות.</p>
	</div>
</footer>
