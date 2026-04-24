<script lang="ts">
	// Menambahkan prop tema dengan nilai bawaan (fallback) light-blue
	let {
		url,
		name,
		svgPath,
		username,
		cardBg = 'bg-white shadow-blue-200 hover:from-blue-50 hover:to-cyan-50 hover:drop-shadow-xl',
		cardText = 'text-slate-800',
		cardSubText = 'text-slate-500',
		iconFill = 'oklch(62.3% 0.214 259.815)'
	} = $props<{
		url: string;
		name: string;
		svgPath: string;
		username: string;
		cardBg?: string;
		cardText?: string;
		cardSubText?: string;
		iconFill?: string;
	}>();
</script>

<div class="list-item-card">
	<a href={url} target="_blank" rel="noopener noreferrer">
		<div
			class="flex h-36 w-36 flex-col items-center justify-center rounded-3xl px-2 py-3 text-center shadow-inner drop-shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 md:h-48 md:w-48 md:px-4 {cardBg}"
		>
			<svg
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="mb-2 w-10 transition-colors duration-500 md:w-14"
				fill={iconFill}
			>
				<title>{name}</title>
				<path d={svgPath} />
			</svg>

			<h2
				class="mt-1 text-xs leading-tight font-bold whitespace-normal transition-colors duration-500 md:text-sm {cardText}"
			>
				{name}
			</h2>

			<p class="mt-1 text-[10px] break-all transition-colors duration-500 md:text-xs {cardSubText}">
				{username}
			</p>
		</div>
	</a>
</div>
