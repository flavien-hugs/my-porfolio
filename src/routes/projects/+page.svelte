<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import { projects } from '$lib/data/projects';
	import { lang } from '$lib/i18n.svelte';
	import { base } from '$app/paths';

	const PAGE_SIZE = 6;

	let selectedTech = $state('All');
	let visibleCount = $state(PAGE_SIZE);

	const allTech = [...new Set(projects.flatMap((p) => p.stack))].sort();

	const filtered = $derived(
		projects.filter((p) => selectedTech === 'All' || p.stack.includes(selectedTech))
	);

	const visible = $derived(filtered.slice(0, visibleCount));
	const hasMore = $derived(visibleCount < filtered.length);
	const remaining = $derived(filtered.length - visibleCount);

	// Reset pagination when filter changes
	$effect(() => {
		if (selectedTech) {
			visibleCount = PAGE_SIZE;
		}
	});

	function loadMore() {
		visibleCount += PAGE_SIZE;
	}
</script>

<svelte:head>
	<title>Projects | flavien HUGS</title>
	<meta
		name="description"
		content="Backend projects focused on engineering, architecture, security and deployment by Flavien HUGS."
	/>
</svelte:head>

<Container>
	<section class="py-10">
		<Breadcrumb crumbs={[{ label: lang.t('Projects', 'Projets') }]} />

		<!-- Header -->
		<div class="border-b border-zinc-800 pb-10">
			<p class="mb-2 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
				{lang.t('Work', 'Travaux')} — {filtered.length}
				{lang.t('projects', 'projets')}
			</p>
			<h1 class="text-4xl font-bold tracking-tight text-white">
				{lang.t('Projects', 'Projets')}
			</h1>
			<p class="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
				{lang.t(
					'Projects focused on backend engineering, architecture, security and deployment.',
					"Projets axés sur l'ingénierie backend, l'architecture, la sécurité et le déploiement."
				)}
			</p>
		</div>

		<!-- Filter bar -->
		<div class="flex flex-wrap gap-2 border-b border-zinc-800 py-5">
			<button
				class="rounded-full border px-3 py-1 font-mono text-[11px] tracking-widest uppercase transition-colors duration-200
				{selectedTech === 'All'
					? 'border-white bg-white text-black'
					: 'border-zinc-800 bg-transparent text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'}"
				onclick={() => (selectedTech = 'All')}
			>
				{lang.t('All', 'Tous')}
			</button>
			{#each allTech as tech (tech)}
				<button
					class="rounded-full border px-3 py-1 font-mono text-[11px] tracking-widest uppercase transition-colors duration-200
					{selectedTech === tech
						? 'border-white bg-white text-black'
						: 'border-zinc-800 bg-transparent text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'}"
					onclick={() => (selectedTech = tech)}
				>
					{tech}
				</button>
			{/each}
		</div>

		<!-- Project list -->
		<ul class="divide-y divide-zinc-800/60">
			{#each visible as project, i (project.slug)}
				<li>
					<div
						class="group -mx-4 flex items-start gap-6 rounded-lg px-4 py-7 transition-colors duration-200 hover:bg-zinc-900/40"
					>
						<!-- Index -->
						<span class="hidden w-8 shrink-0 pt-0.5 font-mono text-[11px] text-zinc-700 sm:block">
							{String(i + 1).padStart(2, '0')}
						</span>

						<!-- Main content -->
						<div class="flex flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
							<div class="flex-1">
								<a href="{base}/projects/{project.slug}" class="group/title block">
									<h2
										class="text-base font-semibold text-white transition-all duration-200 group-hover/title:tracking-wide"
									>
										{typeof project.title === 'string'
											? project.title
											: lang.t(project.title.en, project.title.fr)}
									</h2>
									<p class="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-500">
										{typeof project.description === 'string'
											? project.description
											: lang.t(project.description.en, project.description.fr)}
									</p>
								</a>

								<!-- Quick Links -->
								<div class="mt-4 flex items-center gap-5">
									{#if project.github}
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											class="font-mono text-[10px] text-zinc-700 transition-colors hover:text-white"
										>
											[code]
										</a>
									{/if}
									{#if project.demo}
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											class="font-mono text-[10px] text-zinc-700 transition-colors hover:text-white"
										>
											[demo]
										</a>
									{/if}
								</div>
							</div>

							<!-- Stack tags -->
							<div class="flex shrink-0 flex-wrap gap-1.5 sm:justify-end">
								{#each project.stack.slice(0, 3) as tech (tech)}
									<span
										class="rounded-full border border-zinc-800 px-2.5 py-0.5 font-mono text-[10px] text-zinc-500"
									>
										{tech}
									</span>
								{/each}
								{#if project.stack.length > 3}
									<span
										class="rounded-full border border-zinc-800 px-2.5 py-0.5 font-mono text-[10px] text-zinc-700"
									>
										+{project.stack.length - 3}
									</span>
								{/if}
							</div>
						</div>

						<!-- Arrow -->
						<a
							href="{base}/projects/{project.slug}"
							class="hidden shrink-0 pt-0.5 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:block"
						>
							→
						</a>
					</div>
				</li>
			{/each}
		</ul>

		{#if filtered.length === 0}
			<p class="py-16 text-center font-mono text-sm text-zinc-700">
				{lang.t('No projects found.', 'Aucun projet trouvé.')}
			</p>
		{/if}

		<!-- Load more -->
		{#if hasMore}
			<div class="mt-2 flex flex-col items-center gap-4 border-t border-zinc-800/60 pt-10">
				<!-- Progress bar -->
				<div class="h-px w-48 overflow-hidden rounded-full bg-zinc-800">
					<div
						class="h-full bg-white transition-all duration-500"
						style="width: {Math.round((visibleCount / filtered.length) * 100)}%"
					></div>
				</div>

				<p class="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
					{visibleCount} / {filtered.length}
					{lang.t('projects', 'projets')}
				</p>

				<button
					class="group flex items-center gap-3 rounded-full border border-zinc-800 px-6 py-2.5 font-mono text-xs tracking-widest text-zinc-500 uppercase transition-all duration-300 hover:border-zinc-600 hover:text-white"
					onclick={loadMore}
				>
					{lang.t('Load more', 'Charger plus')}
					<span class="font-mono text-zinc-700 transition-colors group-hover:text-zinc-400">
						+{remaining}
					</span>
				</button>
			</div>
		{/if}

		<!-- All shown indicator -->
		{#if !hasMore && filtered.length > PAGE_SIZE}
			<div class="mt-2 flex flex-col items-center gap-3 border-t border-zinc-800/60 pt-10">
				<div class="h-px w-48 rounded-full bg-white"></div>
				<p class="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
					{filtered.length} / {filtered.length}
					{lang.t('projects', 'projets')}
				</p>
			</div>
		{/if}
	</section>
</Container>
