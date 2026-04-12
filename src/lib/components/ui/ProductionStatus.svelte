<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { lang } from '$lib/i18n.svelte';

	const liveProjects = projects.filter((p) => p.status === 'production');
</script>

<div class="production-status-container flex w-full flex-col gap-6 py-2 transition-all">
	<div class="flex items-center justify-between gap-12">
		<div class="flex items-center gap-4">
			<span class="relative flex h-2.5 w-2.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
			</span>
			<span class="font-mono text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">
				{lang.t('Live Operations', 'Opérations Live')}
			</span>
		</div>
	</div>

	<div class="mask-fade-y h-[70px] overflow-hidden">
		<div class="ticker-track flex flex-col gap-4">
			{#each [...liveProjects, ...liveProjects] as project, i (project.slug + i)}
				<a
					href={project.demo}
					target="_blank"
					class="group -ml-4 flex w-fit items-center gap-8 rounded-xl px-4 py-3 transition-all hover:bg-zinc-900/40"
				>
					<span
						class="text-xs font-bold tracking-wide text-zinc-300 uppercase group-hover:text-white"
					>
						{typeof project.title === 'string'
							? project.title
							: lang.t(project.title.en, project.title.fr)}
					</span>
					<span
						class="font-mono text-[9px] font-bold text-emerald-500/60 group-hover:text-emerald-400"
					>
						ONLINE
					</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.ticker-track {
		animation: scroll-up 15s linear infinite;
	}

	.production-status-container:hover .ticker-track {
		animation-play-state: paused !important;
	}

	@keyframes scroll-up {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	.mask-fade-y {
		mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
		-webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
	}
</style>
