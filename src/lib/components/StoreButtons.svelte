<script lang="ts">
	const PLAY_STORE =
		'https://play.google.com/store/search?q=vaadbot&c=apps&hl=en';
	const APP_STORE = 'https://apps.apple.com/il/app/vaadbot/id6475007894?l=he';

	let { className = '' }: { className?: string } = $props();
</script>

<div class="app-buttons {className}">
	<a href={PLAY_STORE} target="_blank" rel="noopener" class="store-btn google-play">
		<i class="fa-brands fa-google-play"></i>
		<div>
			<small>הורד עכשיו ב-</small>
			<span>Google Play</span>
		</div>
	</a>
	<a href={APP_STORE} target="_blank" rel="noopener" class="store-btn app-store">
		<i class="fa-brands fa-apple"></i>
		<div>
			<small>זמין גם ב-</small>
			<span>App Store</span>
		</div>
	</a>
</div>
