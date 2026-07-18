<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import StoreButtons from '$lib/components/StoreButtons.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';
	import { vaadbotNav } from '$lib/data/site';

	const PLAY_STORE = 'https://play.google.com/store/search?q=vaadbot&c=apps&hl=en';
	const APP_STORE = 'https://apps.apple.com/il/app/vaadbot/id6475007894?l=he';

	onMount(() => {
		document.body.classList.add('vb-page');
		return () => document.body.classList.remove('vb-page');
	});
</script>

<svelte:head>
	<title>VaadBot - האפליקציה המושלמת לניהול ועד בית</title>
	<meta
		name="description"
		content="VaadBot ו-VaadBit – ניהול ועד בית, גבייה, ספקים, תקשורת עם דיירים ותשלומים במקום אחד. כולל העוזרת הדיגיטלית Alexy."
	/>
	<link rel="canonical" href="https://billclick.co.il/vaadbot/" />
	<link rel="icon" type="image/png" href="/assets/vaadbot/icon.png" />
	<link rel="apple-touch-icon" href="/assets/vaadbot/icon.png" />
	<meta property="og:title" content="VaadBot - ניהול ועד בית חכם" />
	<meta
		property="og:description"
		content="ניהול, גבייה, דיונים, אסיפות דיירים ועוד. שקיפות מלאה לדיירים ולבעלי דירות."
	/>
	<meta property="og:image" content="https://billclick.co.il/assets/vaadbot/Vaadbit.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://billclick.co.il/vaadbot/" />
	<meta property="og:locale" content="he_IL" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="VaadBot - ניהול ועד בית חכם" />
	<meta
		name="twitter:description"
		content="ניהול, גבייה, דיונים, אסיפות דיירים ועוד. שקיפות מלאה לדיירים ולבעלי דירות."
	/>
	<meta name="twitter:image" content="https://billclick.co.il/assets/vaadbot/Vaadbit.png" />
</svelte:head>

<Header variant="vaadbot" navItems={vaadbotNav} />

<section class="vb-hero" id="vaadbot">
	<div class="vb-hero-bg" aria-hidden="true"></div>
	<div class="container margin-auto relative z-10">
		<nav class="vb-product-nav" aria-label="מוצרים" use:scrollReveal>
			<a href="#vaadbot" class="vb-product-chip is-active">VaadBot</a>
			<a href="#alexy" class="vb-product-chip">Alexy</a>
			<a href="#vaadbit" class="vb-product-chip">VaadBit</a>
		</nav>
		<div class="vb-hero-grid fade-in-up">
			<div class="vb-hero-copy">
				<img src="/assets/vaadbot/Vaadbit.png" alt="VaadBot" class="vb-logo-img" />
				<h1>האפליקציה המושלמת לניהול ועד בית</h1>
				<p class="vb-lead">
					ניהול ועד, ספקים ושקיפות לדיירים – במקום אחד. גבייה, דיונים, אסיפות דיירים ודוחות ברורים
					לכל בעלי הדירות.
				</p>
				<StoreButtons className="vb-store-row" />
			</div>
			<div class="vb-hero-visual">
				<picture>
					<source srcset="/assets/vaadbot/vaadbot-hero.webp" type="image/webp" />
					<img
						src="/assets/vaadbot/vaadbot-hero.gif"
						alt="אפליקציית VaadBot"
						class="vb-phone-shot vb-hero-shot"
						width="440"
						height="440"
						loading="eager"
					/>
				</picture>
			</div>
		</div>
	</div>
</section>

<section class="section vb-alexy" id="alexy">
	<div class="container margin-auto">
		<div class="vb-split" use:scrollReveal>
			<div class="vb-split-media">
				<picture>
					<source srcset="/assets/vaadbot/alexy-hero.webp" type="image/webp" />
					<img
						src="/assets/vaadbot/alexy-hero.gif"
						alt="Alexy – Vaadbot AI"
						class="vb-alexy-img"
						width="440"
						height="440"
						loading="lazy"
					/>
				</picture>
			</div>
			<div class="vb-split-text">
				<div class="section-badge">Alexy</div>
				<h2>Alexy – העוזרת הדיגיטלית לוועדי בתים</h2>
				<p>
					Alexy היא עוזרת מבוססת בינה מלאכותית שמטפלת בכל היבטי ניהול הבניין: שליחת הודעות,
					תזכורות, תיאום פגישות, ניתוח תקציב, ניהול דמי ועד ועוד. היא זמינה 24/7 ועוזרת לוועד הבית
					לחסוך זמן, למנוע טעויות ולשפר את התקשורת עם הדיירים.
				</p>
				<p class="vb-download-note">
					הורידו את VaadBot –
					<a href={APP_STORE} target="_blank" rel="noopener">App Store</a>
					או
					<a href={PLAY_STORE} target="_blank" rel="noopener">Google Play</a>
					· כולל Alexy
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section vb-payments" id="vaadbit">
	<div class="container margin-auto">
		<div class="vb-bit-layout" use:scrollReveal>
			<div class="vb-bit-media">
				<picture>
					<source srcset="/assets/vaadbit/app-hero.webp" type="image/webp" />
					<img
						src="/assets/vaadbit/app-hero.gif"
						alt="מסך VaadBit – ניהול תשלומי ועד בית"
						class="vb-bit-phone"
						width="440"
						height="440"
						loading="lazy"
					/>
				</picture>
			</div>
			<div class="vb-bit-copy">
				<img src="/assets/vaadbit/logo-clear.png" alt="VaadBit" class="vb-bit-logo" />
				<h2>ניהול תשלומי ועד בית בקלות</h2>
				<p>
					<strong>VaadBit</strong> היא ממשק התשלומים של BillClick לוועדי בתים ולדיירים. משלמים את
					דמי הוועד בלחיצה – פשוט, מאובטח ומהיר. כל הנתונים במקום אחד, שקיפות מלאה ועדכונים בזמן
					אמת.
				</p>
				<p class="vb-download-note">
					הורידו ב־
					<a href={APP_STORE} target="_blank" rel="noopener">App Store</a>
					/
					<a href={PLAY_STORE} target="_blank" rel="noopener">Google Play</a>
					·
					<a href="https://vaadbit.com/" target="_blank" rel="noopener">עוד על VaadBit</a>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="vb-impact" aria-labelledby="impact-heading">
	<div class="container margin-auto">
		<div class="section-header text-center" use:scrollReveal>
			<div class="section-badge">BillClick במספרים</div>
			<h2 id="impact-heading">התוצאות של כל המערכת</h2>
			<p class="vb-impact-note">נתונים מצטברים מכלל פתרונות BillClick לניהול, גבייה ותקשורת בבניינים.</p>
		</div>
		<div class="vb-impact-grid" use:scrollReveal>
			<div class="vb-impact-item">
				<strong>97%</strong>
				<span>הצלחה בגבייה</span>
			</div>
			<div class="vb-impact-item">
				<strong>5M+</strong>
				<span>סכום שנגבה</span>
			</div>
			<div class="vb-impact-item">
				<strong>2,000+</strong>
				<span>משתמשים</span>
			</div>
			<div class="vb-impact-item">
				<strong>89%</strong>
				<span>חיסכון בזמן</span>
			</div>
		</div>
	</div>
</section>

<section class="section vb-audiences">
	<div class="container margin-auto">
		<div class="section-header text-center" use:scrollReveal>
			<div class="section-badge">למי זה מתאים?</div>
			<h2>אפליקציות לניהול ועד בית שמחברות את כולם</h2>
			<p class="vb-intro">פתרונות לדיירים, לוועד ולספקים – תקשורת, גבייה ותשלומים במקום אחד.</p>
		</div>
		<div class="vb-audience-grid vb-audience-grid-3">
			<article class="vb-audience-card" use:scrollReveal>
				<h3>ועד וחברות ניהול</h3>
				<p>גבייה, דוחות וניהול ספקים בקלות.</p>
				<ul>
					<li>מערכת גבייה ומעקב חשבון</li>
					<li>מאגר ספקים והצעות מחיר</li>
					<li>דוחות חודשיים ושקיפות</li>
				</ul>
			</article>
			<article class="vb-audience-card" use:scrollReveal>
				<h3>דיירים ובעלי דירות</h3>
				<p>תשלום, מעקב והשתתפות בהחלטות.</p>
				<ul>
					<li>תשלום דמי ועד בלחיצה</li>
					<li>היסטוריית תשלומים ואישורים</li>
					<li>דיונים ואסיפות דיירים</li>
				</ul>
			</article>
			<article class="vb-audience-card" use:scrollReveal>
				<h3>ספקים</h3>
				<p>פרסום, הזמנות עבודה ותשלומים.</p>
				<ul>
					<li>בקשות הצעות מחיר</li>
					<li>לוח עבודה ותיעוד</li>
					<li>תשלום לאחר אישור הוועד</li>
				</ul>
			</article>
		</div>
	</div>
</section>

<section class="section vb-gallery">
	<div class="container margin-auto text-center">
		<div class="section-header" use:scrollReveal>
			<div class="section-badge">האפליקציות</div>
			<h2>הכירו את הממשק</h2>
		</div>
		<div class="vb-gallery-track" use:scrollReveal>
			<figure class="vb-gallery-item">
				<img src="/assets/vaadbot/preview-1.png" alt="ממשק VaadBot – מסך חשבון" loading="lazy" />
				<figcaption>VaadBot</figcaption>
			</figure>
			<figure class="vb-gallery-item">
				<img src="/assets/vaadbot/preview-2.png" alt="ממשק VaadBot – הזמנת חדר" loading="lazy" />
				<figcaption>VaadBot</figcaption>
			</figure>
			<figure class="vb-gallery-item">
				<img src="/assets/vaadbot/preview-3.png" alt="ממשק VaadBot – לוח שנה" loading="lazy" />
				<figcaption>VaadBot</figcaption>
			</figure>
			<figure class="vb-gallery-item">
				<img src="/assets/vaadbot/preview-4.png" alt="ממשק VaadBot – רשימות" loading="lazy" />
				<figcaption>VaadBot</figcaption>
			</figure>
		</div>
	</div>
</section>

<Footer appsHref="/vaadbot/" />
