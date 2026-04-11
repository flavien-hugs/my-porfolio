<script lang="ts">
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { lang } from '$lib/i18n.svelte';
	import { projects } from '$lib/data/projects';

	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
	let activeIndex = $state(0);
	let active = $derived(featuredProjects[activeIndex]);
</script>

<section class="py-10">
	<!-- Header -->
	<div class="mb-14 flex items-end justify-between border-b border-zinc-800 pb-8">
		<div>
			<p class="mb-3 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
				{lang.t('Selected Work', 'Sélection de projets')} — {featuredProjects.length} / {projects.length}
			</p>
			<h2 class="text-3xl font-bold tracking-tight text-white">
				{lang.t('Featured Work', 'Projets mis en avant')}
			</h2>
		</div>
	</div>

	<!-- Split panel -->
	<div class="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-[5fr_7fr]">
		<!-- LEFT — project selector list -->
		<div
			class="flex flex-col justify-between border-b border-zinc-800 bg-zinc-950 p-8 lg:border-r lg:border-b-0"
		>
			<ul class="flex flex-col">
				{#each featuredProjects as project, i (project.slug)}
					<li class="border-b border-zinc-800/60 last:border-0">
						<button
							class="group flex w-full cursor-pointer items-start gap-5 py-6 text-left"
							onmouseenter={() => (activeIndex = i)}
							onclick={() => (activeIndex = i)}
						>
							<!-- Index -->
							<span
								class="w-6 shrink-0 pt-0.5 font-mono text-xs transition-colors duration-300 {activeIndex ===
								i
									? 'text-white'
									: 'text-zinc-700'}"
							>
								{String(i + 1).padStart(2, '0')}
							</span>

							<!-- Title + stack preview -->
							<div class="flex-1 text-left">
								<span
									class="block font-semibold transition-colors duration-300 {activeIndex === i
										? 'text-white'
										: 'text-zinc-500'}"
								>
									{typeof project.title === 'string'
										? project.title
										: lang.t(project.title.en, project.title.fr)}
								</span>
								<span
									class="mt-1 block font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 {activeIndex ===
									i
										? 'text-zinc-500'
										: 'text-zinc-800'}"
								>
									{project.stack.slice(0, 2).join(' · ')}
								</span>
							</div>

							<!-- Active arrow -->
							<span
								class="shrink-0 pt-0.5 text-sm transition-all duration-300 {activeIndex === i
									? 'translate-x-0 text-white opacity-100'
									: '-translate-x-2 opacity-0'}"
							>
								→
							</span>
						</button>
					</li>
				{/each}
			</ul>

			<!-- View all -->
			<a
				href="{base}/projects"
				class="group mt-10 flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-700 uppercase transition-colors duration-300 hover:text-white"
			>
				{lang.t('All projects', 'Tous les projets')}
				<span class="inline-block transition-transform duration-300 group-hover:translate-x-1"
					>→</span
				>
			</a>
		</div>

		<!-- RIGHT — detail panel -->
		<div class="relative overflow-hidden bg-zinc-950/50">
			{#key activeIndex}
				<div
					class="flex h-full flex-col justify-between p-10"
					in:fade={{ duration: 200, delay: 60 }}
				>
					<!-- Top content -->
					<div>
						<span class="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
							{String(activeIndex + 1).padStart(2, '0')} — {lang.t('Featured', 'En vedette')}
						</span>

						<!-- Accent line -->
						<div class="my-5 h-px w-10 bg-white"></div>

						<h3 class="text-2xl leading-snug font-bold text-white">
							{typeof active.title === 'string'
								? active.title
								: lang.t(active.title.en, active.title.fr)}
						</h3>
						<p class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
							{typeof active.description === 'string'
								? active.description
								: lang.t(active.description.en, active.description.fr)}
						</p>
					</div>

					<!-- Bottom content -->
					<div>
						<!-- Stack -->
						<div class="mb-8 flex flex-wrap gap-2">
							{#each active.stack.slice(0, 4) as tech (tech)}
								<span
									class="rounded-full border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500"
								>
									{tech}
								</span>
							{/each}
							{#if active.stack.length > 4}
								<span
									class="rounded-full border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-700"
								>
									+{active.stack.length - 4}
								</span>
							{/if}
						</div>

						<!-- CTAs -->
						<div class="flex flex-wrap items-center gap-6">
							<a
								href="{base}/projects/{active.slug}"
								class="group flex items-center gap-2 font-mono text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
							>
								{lang.t('overview', 'détails')}
								<span
									class="inline-block transition-transform duration-300 group-hover:translate-x-1"
									>→</span
								>
							</a>

							{#if active.github}
								<a
									href={active.github}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 font-mono text-xs text-zinc-600 transition-colors duration-200 hover:text-white"
								>
									<span class="text-[10px] opacity-70">git://</span>
									{lang.t('source', 'code')}
								</a>
							{/if}

							{#if active.demo}
								<a
									href={active.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 font-mono text-xs text-zinc-600 transition-colors duration-200 hover:text-white"
								>
									<span class="text-[10px] opacity-70">https://</span>
									{lang.t('live', 'demo')}
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/key}
		</div>
	</div>
</section>
