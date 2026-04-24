<script lang="ts">
	// Import komponen dari folder lib
	import Navbar from '$lib/components/Navbar.svelte';
	import SocmedCard from '$lib/components/SocmedCard.svelte';
	import WaveBackground from '$lib/components/WaveBackground.svelte';
	import ThemePicker from '$lib/components/ThemePicker.svelte';

	// import data dan konfigurasi
	import { socmedList } from '$lib/data/socmed';
	import { themeConfig, type ThemeName } from '$lib/config/theme';

	// import modul browser
	import { browser } from '$app/environment';

	// state untuk filter
	let activeFilters = $state<string[]>([]);

	// ambil daftar platform unik secara otomatis dari data
	const availablePlatforms = [...new Set(socmedList.map((item) => item.platform))];

	// state derived
	// jika tidak ada filter yang aktif, tampil semua. jika ada, filter data.
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

	// cek memori browser
	// let currentTheme = $state<ThemeName>('light-blue');
	let currentTheme = $state<ThemeName>(
		(browser && (localStorage.getItem('mediacenter_theme') as ThemeName)) || 'light-blue'
	);

	// Ambil pengaturan tema yang sedang aktif
	let activeThemeObj = $derived(themeConfig[currentTheme]);

	// Ganti class body global
	$effect(() => {
		document.body.className = `animate-gradient-bg bg-linear-to-br transition-colors duration-500 ${activeThemeObj.body}`;

		// Simpan pengaturan tema ke memori browser
		if (browser) {
			localStorage.setItem('mediacenter_theme', currentTheme);
		}
	});
</script>

<!-- Top Navbar -->
<Navbar navBg={activeThemeObj.nav} />

<!-- Tombol Pengganti Tema -->
<ThemePicker bind:currentTheme />

<!-- Background ombak -->
<WaveBackground waves={activeThemeObj.waves} />

<!-- Main -->
<main
	class="relative z-0 flex min-h-screen w-full flex-col items-center justify-start pt-32 pb-24 align-top md:px-12 md:pt-42 lg:px-36"
>
	<!-- Filter Section -->
	<div class="mb-10 flex w-full flex-wrap justify-center gap-2 px-4 md:pb-4">
		<button
			class="rounded-full px-4 py-1 text-sm font-semibold transition-colors duration-200 {activeFilters.length ===
			0
				? activeThemeObj.filterBtnActive
				: activeThemeObj.filterBtnInactive}"
			onclick={() => (activeFilters = [])}>semua</button
		>

		{#each availablePlatforms as platform}
			<button
				class="rounded-full px-4 py-1 text-sm font-semibold transition-colors duration-200 {activeFilters.includes(
					platform
				)
					? activeThemeObj.filterBtnActive
					: activeThemeObj.filterBtnInactive}"
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
				cardBg={activeThemeObj.cardBg}
				cardText={activeThemeObj.cardText}
				cardSubText={activeThemeObj.cardSubText}
				iconFill={activeThemeObj.iconFill}
			/>
		{/each}
	</div>
</main>
