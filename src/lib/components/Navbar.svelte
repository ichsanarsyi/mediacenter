<script lang="ts">
	import LogoKabSmg from '../assets/kabsmg.png';
	import LogoDiskominfo from '../assets/diskominfo.png';
	import LogoBerakhlak from '../assets/berakhlak.png';
	import LogoBangga from '../assets/bangga.png';
</script>

<nav
	class="fixed z-50 flex h-20 w-full items-center justify-center rounded-b-3xl bg-linear-to-br from-blue-500 to-cyan-500
 py-2 text-center font-extrabold text-white drop-shadow-md drop-shadow-blue-900/50 sm:justify-between md:h-24"
>
	<div
		class="hidden sm:mx-8 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:rounded-full sm:bg-white/80 sm:px-4 sm:py-2"
	>
		<img src={LogoKabSmg} alt="Logo Kab. Semarang" class="h-8" />
		<img src={LogoDiskominfo} alt="logo diskominfo kab. semarang" class="h-8" />
	</div>
	<h1 class="flex flex-col items-center text-2xl italic md:pl-10 lg:flex-row">
		Media Center <span class="mx-2 text-sm font-normal not-italic lg:text-2xl lg:font-extrabold"
			>Diskominfo Kab. Semarang</span
		>
	</h1>
	<div
		class="hidden sm:mx-8 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:rounded-full sm:bg-white/75 sm:px-4 sm:py-2"
	>
		<img src={LogoBerakhlak} alt="Logo Kab. Semarang" class="h-6" />
		<img src={LogoBangga} alt="logo diskominfo kab. semarang" class="h-8" />
	</div>
</nav>
