export const faqItems = [
	{
		question: 'מי אנחנו ומה זה בילקליק?',
		answer:
			'בילקליק הינה חברת מחקר ופיתוח לוועדי בתים בישראל וחברות ניהול, המפעילה את המיזמים VAADBOT ו-VAADBIT. אנו מספקים פתרונות מקיפים לתחזוקה, ניהול כספי ושיפור איכות החיים בבניינים משותפים.'
	},
	{
		question: 'מדוע דווקא לבחור בבילקליק?',
		answer:
			'אנו מתחייבים לשירות מקצועי ואדיב, שקיפות מלאה, הפקת דוחות תזרימיים, ניהול ספר הוצאות והכנסות, ודמי ניהול קבועים ומוגדרים מראש.'
	},
	{
		question: 'האם השירות מייקר את וועד הבית?',
		answer:
			'לא בהכרח. אומנם יש דמי ניהול קבועים, אך אנו פועלים לחסוך לכם הוצאות עתידיות וגבייה מיותרת באמצעות התנהלות כלכלית חכמה. במידה ואתם כבר מתנהלים מול חברת ניהול - חשוב לבדוק מה כלול בסל. אם לא עיינתם בספר ההוצאות וההכנסות עדיין - נוכל לתת לכם הערכת מחיר כללית.'
	},
	{
		question: 'מה עלות דמי וועד הבית?',
		answer:
			'העלות נגזרת מפרמטרים כגון גיל המבנה, מספר הדירות, המעליות וסל השירותים המבוקש. כל שירות מתומחר בנפרד (מעליות, גינון, ביטוחים וכו\'), כך שאתם משלמים רק על מה שאתם צריכים. דמי ניהול קבועים, כל שירות כלול בעלות נפרדת ולספק נפרד.'
	},
	{
		question: 'מה התפקיד שלנו בפועל?',
		answer:
			'אנחנו נדאג לכל השאר - Alexy תטפל בכל: גבייה מסודרת, הנפקת דו"חות מסודרים, פיקוח על כל ספק שירות שמגיע, הצעות מחיר מגוונות ונדאג להתנהלות יעילה וטובה ביותר.'
	},
	{
		question: 'איך מקבלים את השירות?',
		answer: 'צרו איתנו קשר ואנחנו כבר נדאג להליך מוסדר בהתאם לבקשתכם.'
	}
];

export const homeNav = [
	{ href: '/#about', label: 'אודות' },
	{ href: '/#services', label: 'שירותים' },
	{ href: '/vaadbot/', label: 'אפליקציות' },
	{ href: '/#faq', label: 'שאלות ותשובות' },
	{ href: '/#suppliers', label: 'ספקים' },
	{ href: '/#contact', label: 'צור קשר', mobileOnly: true }
];

export const vaadbotNav = [
	{ href: '/#about', label: 'אודות' },
	{ href: '/#services', label: 'שירותים' },
	{ href: '/vaadbot/', label: 'אפליקציות' },
	{ href: '/#faq', label: 'שאלות ותשובות' },
	{ href: '/#suppliers', label: 'ספקים' },
	{ href: '/#contact', label: 'צור קשר', mobileOnly: true }
];

export const orgJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'BillClick',
	url: 'https://billclick.co.il',
	logo: 'https://billclick.co.il/assets/favicon.svg',
	founders: [
		{ '@type': 'Person', name: 'Yehonatan Yifrach', jobTitle: 'Founder & CEO/CFO' },
		{ '@type': 'Person', name: 'Yaakov Shoshani', jobTitle: 'Founder & COO' }
	],
	employee: [
		{ '@type': 'Person', name: 'Vladimir Berson', jobTitle: 'CIO/CISO' },
		{ '@type': 'Person', name: 'Igor Ronzin', jobTitle: 'CTO' }
	],
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+972-4-6655665',
		contactType: 'customer service',
		areaServed: 'IL',
		availableLanguage: 'Hebrew'
	},
	sameAs: ['https://www.facebook.com/billclick']
};
