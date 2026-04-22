<script lang="ts">
	// Definisi properti apa saja yang dibutuhkan oleh komponen ini
	let { url, name, svgPath, username } = $props<{
		url: string;
		name: string;
		svgPath: string;
		username: string;
	}>();
</script>

<div class="list-item-card">
	<a href={url} target="_blank" rel="noopener noreferrer">
		<div
			class="flex h-36 w-36 flex-col items-center justify-center rounded-2xl bg-white px-2 py-3 text-center shadow-inner shadow-blue-200 drop-shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-linear-to-br hover:from-blue-50 hover:to-cyan-50 hover:drop-shadow-xl md:h-48 md:w-48 md:px-4"
		>
			<svg
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="mb-2 w-10 md:w-14"
				fill="oklch(62.3% 0.214 259.815)"
			>
				<title>{name}</title>
				<path d={svgPath} />
			</svg>

			<h2 class="mt-1 text-xs leading-tight font-bold whitespace-normal text-slate-800 md:text-sm">
				{name}
			</h2>

			<p class="mt-1 text-[10px] break-all text-slate-500 md:text-xs">
				{username}
			</p>
		</div>
	</a>
</div>
