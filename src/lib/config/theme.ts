// Konfigurasi Tema
export type ThemeName = 'light-blue' | 'dark-blue' | 'light-red' | 'dark-red';

export const themeConfig = {
	'light-blue': {
		body: 'from-blue-200 via-blue-50 to-cyan-200',
		nav: 'from-blue-500 to-cyan-500 drop-shadow-blue-900/50 text-white',
		filterBtnActive: 'bg-blue-500 text-white hover:bg-blue-500/50 border-transparent',
		filterBtnInactive: 'bg-white text-blue-500 hover:bg-white/50 border-transparent',
		cardBg:
			'bg-white shadow-inner shadow-blue-200 drop-shadow-lg hover:from-blue-50 hover:to-cyan-50 hover:drop-shadow-xl border border-transparent',
		cardText: 'text-slate-800',
		cardSubText: 'text-slate-500',
		iconFill: '#2b7fff', // blue-500
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
			'bg-slate-700/40 backdrop-blur text-blue-400 hover:bg-slate-700/80 border-slate-600',
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
		nav: 'from-red-700 to-rose-400 drop-shadow-red-900/50 text-white',
		filterBtnActive: 'bg-red-500 text-white hover:bg-red-500/50 border-transparent',
		filterBtnInactive: 'bg-white text-red-500 hover:bg-white/50 border-transparent',
		cardBg:
			'bg-white shadow-inner shadow-red-200 drop-shadow-lg hover:from-red-50 hover:to-orange-50 hover:drop-shadow-xl border border-transparent',
		cardText: 'text-mauve-800',
		cardSubText: 'text-mauve-500',
		iconFill: '#e11d48', // rose-600
		waves: [
			'rgba(244, 63, 94, 0.4)',
			'rgba(239, 68, 68, 0.4)',
			'rgba(253, 164, 175, 0.4)',
			'rgba(255, 228, 230, 1)'
		]
	},
	'dark-red': {
		body: 'from-mauve-900 via-mauve-800 to-red-950',
		nav: 'from-mauve-800 to-red-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-mauve-100',
		filterBtnActive: 'bg-red-600 text-white hover:bg-red-500/80 border-transparent',
		filterBtnInactive:
			'bg-mauve-700/40 backdrop-blur text-red-400 hover:bg-mauve-700/80 border-mauve-600',
		cardBg:
			'bg-mauve-800/90 backdrop-blur shadow-inner shadow-mauve-700 drop-shadow-lg hover:from-mauve-700 hover:to-red-900 hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] border border-mauve-700',
		cardText: 'text-mauve-100',
		cardSubText: 'text-mauve-400',
		iconFill: '#ff637e', // rose-500
		waves: [
			'rgba(190, 18, 60, 0.2)',
			'rgba(127, 29, 29, 0.4)',
			'rgba(15, 23, 42, 0.6)',
			'rgba(2, 6, 23, 1)'
		]
	}
};
