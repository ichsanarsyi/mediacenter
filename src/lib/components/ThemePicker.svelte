<script lang="ts">
	import type { ThemeName } from '$lib/config/theme';
	let { currentTheme = $bindable() } = $props<{ currentTheme: ThemeName }>();
</script>

<!-- Button Tema -->
<div
	class="fixed right-4 bottom-4 z-50 flex gap-3 rounded-full border border-white/50 bg-white/50 p-3 shadow-xl backdrop-blur-md md:right-8 md:bottom-8"
>
	<button
		class="h-4 w-4 rounded-full bg-cyan-300 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'light-blue'
			? 'ring-2 ring-blue-400'
			: ''}"
		onclick={() => (currentTheme = 'light-blue')}
		title="Light Blue Mode"
	></button>
	<button
		class="h-4 w-4 rounded-full bg-cyan-800 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'dark-blue'
			? 'ring-2 ring-blue-600'
			: ''}"
		onclick={() => (currentTheme = 'dark-blue')}
		title="Dark Blue Mode"
	></button>
	<button
		class="h-4 w-4 rounded-full bg-rose-500 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'light-red'
			? 'ring-2 ring-red-400'
			: ''}"
		onclick={() => (currentTheme = 'light-red')}
		title="Light Red Mode"
	></button>
	<button
		class="h-4 w-4 rounded-full bg-rose-800 ring-offset-2 transition-all hover:scale-110 {currentTheme ===
		'dark-red'
			? 'ring-2 ring-red-600'
			: ''}"
		onclick={() => (currentTheme = 'dark-red')}
		title="Dark Red Mode"
	></button>
</div>
