<script lang="ts">
	// Import komponen dari folder lib
	import Navbar from '$lib/components/Navbar.svelte';
	// import Footer from '$lib/components/Footer.svelte';
	import SocmedCard from '$lib/components/SocmedCard.svelte';

	// Daftar Medsos >> akan ganti pake DB & API
	const socmedList = [
		{
			name: 'Instagram Diskominfo',
			username: '@diskominfosemarangkab',
			platform: 'instagram',
			url: 'https://www.instagram.com/diskominfosemarangkab/',
			svgPath:
				'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077'
		},
		{
			name: 'Facebook Diskominfo',
			username: 'diskominfokabsemarang',
			platform: 'facebook',
			url: 'https://www.facebook.com/diskominfokabsemarang',
			svgPath:
				'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'
		},
		{
			name: 'YouTube Diskominfo',
			username: '@kominfokabupatensemarang2952',
			platform: 'youtube',
			url: 'https://www.youtube.com/@kominfokabupatensemarang2952',
			svgPath:
				'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
		},
		{
			name: 'TikTok Diskominfo',
			username: '@diskominfo_kabsemarang',
			platform: 'tiktok',
			url: 'https://www.tiktok.com/@diskominfo_kabsemarang',
			svgPath:
				'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'
		},
		{
			name: 'Instagram PPID',
			username: '@ppidkabsemarang',
			platform: 'instagram',
			url: 'https://www.instagram.com/ppidkabsemarang/',
			svgPath:
				'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077'
		},
		{
			name: 'YouTube Suara Serasi 107.3 FM',
			username: '@SuaraSerasiFM',
			platform: 'youtube',
			url: 'https://www.youtube.com/@SuaraSerasiFM',
			svgPath:
				'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
		},
		{
			name: 'Instagram Suara Serasi 107.3 FM',
			username: '@radiosuaraserasi',
			platform: 'instagram',
			url: 'https://www.instagram.com/radiosuaraserasi/',
			svgPath:
				'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077'
		}
	];

	// state untuk filter
	let activeFilters = $state<string[]>([]);

	// ambil daftar platform unik secara otomatis dari data
	const availablePlatforms = [...new Set(socmedList.map((item) => item.platform))];

	// state derived
	// jika tidak ada filter yang aktif, tambil semua. jika ada, filter data.
	let filteredList = $derived(
		activeFilters.length === 0
			? socmedList
			: socmedList.filter((item) => activeFilters.includes(item.platform))
	);

	// Toggle chip
	function toggleFilters(platform: string) {
		if (activeFilters.includes(platform)) {
			// jika ada, buang dari daftar
			activeFilters = activeFilters.filter((f) => f !== platform);
		} else {
			// jika tidak ada, masukkan ke daftar
			activeFilters = [...activeFilters, platform];
		}
	}

	// Konfigurasi Tema
	type ThemeName = 'light-blue' | 'dark-blue' | 'light-red' | 'dark-red';

	let currentTheme = $state<ThemeName>('light-blue');

	const themeConfig = {
		'light-blue': {
			body: 'from-blue-200 via-blue-50 to-cyan-200',
			nav: 'from-blue-500 to-cyan-500 drop-shadow-blue-900/50 text-white',
			filterBtnActive: 'bg-blue-500 text-white hover:bg-blue-500/50 border-transparent',
			filterBtnInactive: 'bg-white text-blue-500 hover:bg-white/50 border-transparent',
			cardBg:
				'bg-white shadow-inner shadow-blue-200 drop-shadow-lg hover:from-blue-50 hover:to-cyan-50 hover:drop-shadow-xl border border-transparent',
			cardText: 'text-slate-800',
			cardSubText: 'text-slate-500',
			iconFill: 'oklch(62.3% 0.214 259.815)', // light blue
			waves: [
				'rgba(6, 182, 212, 0.4)',
				'rgba(59, 130, 246, 0.4)',
				'rgba(147, 197, 253, 0.4)',
				'rgba(219, 234, 254, 1)'
			]
		},
		'dark-blue': {
			body: 'from-slate-900 via-slate-800 to-blue-950',
			nav: 'from-slate-800 to-blue-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-slate-100',
			filterBtnActive: 'bg-blue-600 text-white hover:bg-blue-500/80 border-transparent',
			filterBtnInactive:
				'bg-slate-800/80 backdrop-blur text-blue-400 hover:bg-slate-700/80 border-slate-600',
			cardBg:
				'bg-slate-800/90 backdrop-blur shadow-inner shadow-slate-700 drop-shadow-lg hover:from-slate-700 hover:to-blue-900 hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] border border-slate-700',
			cardText: 'text-slate-100',
			cardSubText: 'text-slate-400',
			iconFill: '#38bdf8', // sky-400
			waves: [
				'rgba(2, 132, 199, 0.2)',
				'rgba(30, 58, 138, 0.4)',
				'rgba(15, 23, 42, 0.6)',
				'rgba(2, 6, 23, 1)'
			]
		},
		'light-red': {
			body: 'from-red-200 via-orange-50 to-rose-200',
			nav: 'from-red-500 to-rose-500 drop-shadow-red-900/50 text-white',
			filterBtnActive: 'bg-red-500 text-white hover:bg-red-500/50 border-transparent',
			filterBtnInactive: 'bg-white text-red-500 hover:bg-white/50 border-transparent',
			cardBg:
				'bg-white shadow-inner shadow-red-200 drop-shadow-lg hover:from-red-50 hover:to-orange-50 hover:drop-shadow-xl border border-transparent',
			cardText: 'text-slate-800',
			cardSubText: 'text-slate-500',
			iconFill: '#e11d48', // rose-600
			waves: [
				'rgba(244, 63, 94, 0.4)',
				'rgba(239, 68, 68, 0.4)',
				'rgba(253, 164, 175, 0.4)',
				'rgba(255, 228, 230, 1)'
			]
		},
		'dark-red': {
			body: 'from-slate-900 via-slate-800 to-red-950',
			nav: 'from-slate-800 to-red-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-slate-100',
			filterBtnActive: 'bg-red-600 text-white hover:bg-red-500/80 border-transparent',
			filterBtnInactive:
				'bg-slate-800/80 backdrop-blur text-red-400 hover:bg-slate-700/80 border-slate-600',
			cardBg:
				'bg-slate-800/90 backdrop-blur shadow-inner shadow-slate-700 drop-shadow-lg hover:from-slate-700 hover:to-red-900 hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] border border-slate-700',
			cardText: 'text-slate-100',
			cardSubText: 'text-slate-400',
			iconFill: '#fb7185', // rose-400
			waves: [
				'rgba(190, 18, 60, 0.2)',
				'rgba(127, 29, 29, 0.4)',
				'rgba(15, 23, 42, 0.6)',
				'rgba(2, 6, 23, 1)'
			]
		}
	};

	// Ambil pengaturan tema yang sedang aktif
	let activeThemeObj = $derived(themeConfig[currentTheme]);

	// Ganti class body
	$effect(() => {
		document.body.className = `animate-gradient-bg bg-linear-to-br transition-colors duration-1000 ${activeThemeObj.body}`;
	});
</script>

<!-- Top Navbar -->
<Navbar navBg={activeThemeObj.nav} />

<!-- Toggle button tema -->
<div
	class="fixed right-4 bottom-4 z-50 flex gap-3 rounded-full border border-white/50 bg-white/70 p-3 shadow-xl backdrop-blur-md md:right-8 md:bottom-8"
>
	<button
		class="h-6 w-6 rounded-full bg-cyan-300 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'light-blue'
			? 'ring-2 ring-slate-800'
			: ''}"
		onclick={() => (currentTheme = 'light-blue')}
		title="Light Blue Mode"
	></button>
	<button
		class="h-6 w-6 rounded-full bg-blue-950 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'dark-blue'
			? 'ring-2 ring-blue-400'
			: ''}"
		onclick={() => (currentTheme = 'dark-blue')}
		title="Dark Blue Mode"
	></button>
	<button
		class="h-6 w-6 rounded-full bg-orange-300 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'light-red'
			? 'ring-2 ring-slate-800'
			: ''}"
		onclick={() => (currentTheme = 'light-red')}
		title="Light Red Mode"
	></button>
	<button
		class="h-6 w-6 rounded-full bg-red-950 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'dark-red'
			? 'ring-2 ring-red-400'
			: ''}"
		onclick={() => (currentTheme = 'dark-red')}
		title="Dark Red Mode"
	></button>
</div>

<!-- BG Ombak Warna -->
<div class="animate-gradient-bg fixed bottom-0 left-0 -z-10 w-full">
	<svg
		class="waves opacity-50"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			/>
		</defs>
		<g class="parallax">
			<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(6, 182, 212, 0.4)" />
			<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(59, 130, 246, 0.4)" />
			<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(147, 197, 253, 0.4)" />
			<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(219, 234, 254, 1)" />
		</g>
	</svg>
</div>

<!-- Main -->
<main
	class="relative z-0 flex min-h-screen w-full flex-col items-center justify-start pt-32 pb-24 align-top md:px-12 md:pt-42 lg:px-36"
>
	<!-- Filter Section -->
	<div class="mb-10 flex w-full flex-wrap justify-center gap-2 px-4 md:pb-4">
		<button
			class="rounded-full px-4 py-1 text-sm font-semibold transition-colors duration-200 {activeFilters.length ===
			0
				? 'bg-blue-500 text-white hover:bg-blue-500/50'
				: 'bg-white text-blue-500 hover:bg-white/50'}"
			onclick={() => (activeFilters = [])}>semua</button
		>

		{#each availablePlatforms as platform}
			<button
				class="rounded-full px-4 py-1 text-sm font-semibold transition-colors duration-200 {activeFilters.includes(
					platform
				)
					? 'bg-blue-500 text-white hover:bg-blue-500/50'
					: 'bg-white text-blue-500 hover:bg-white/50'}"
				onclick={() => toggleFilters(platform)}>{platform}</button
			>
		{/each}
	</div>

	<!-- Socmed List Cards Items -->
	<div class="flex flex-wrap content-center items-center justify-center gap-4 px-4 md:gap-8">
		{#each filteredList as socmed}
			<SocmedCard
				name={socmed.name}
				username={socmed.username}
				url={socmed.url}
				svgPath={socmed.svgPath}
			/>
		{/each}
	</div>
</main>

<!-- <div>Footer</div> -->
<!-- <Footer /> -->

<style>
	/* Mengatur tinggi ombak di berbagai layar */
	.waves {
		position: relative;
		width: 100%;
		height: 15vh;
		min-height: 100px;
		max-height: 150px;
	}

	/* Animasi pergerakan ombak (saling susul menyusul) */
	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}

	/* Mengatur kecepatan yang berbeda untuk setiap lapis ombak */
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}

	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
