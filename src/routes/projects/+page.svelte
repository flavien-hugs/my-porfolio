<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { lang } from '$lib/i18n.svelte';

	let selectedTech = $state('All');

	const allTech = [...new Set(projects.flatMap((p) => p.stack))].sort();
</script>

<Container>
	<section class="py-10">
		<h1 class="text-4xl font-bold">{lang.t('Projects', 'Projets')}</h1>
		<p class="mt-4 max-w-2xl text-zinc-400">
			{lang.t(
				'Projects focused on backend engineering, architecture, security and deployment.',
				"Projets axés sur l'ingénierie backend, l'architecture, la sécurité et le déploiement."
			)}
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<button
				class="rounded-full border px-4 py-2 text-sm transition
				{selectedTech === 'All'
					? 'border-white bg-white text-black'
					: 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800'}"
				onclick={() => (selectedTech = 'All')}
			>
				{lang.t('All', 'Tous')}
			</button>

			{#each allTech.filter((t) => t !== 'All' && t !== 'Tous') as tech (tech)}
				<button
					class="rounded-full border px-4 py-2 text-sm transition
					{selectedTech === tech
						? 'border-white bg-white text-black'
						: 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800'}"
					onclick={() => (selectedTech = tech)}
				>
					{tech}
				</button>
			{/each}
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2">
			{#each projects.filter((p) => selectedTech === 'All' || p.stack.includes(selectedTech)) as project, i (project.slug)}
				<ProjectCard
					index={i + 1}
					slug={project.slug}
					title={project.title}
					description={project.description}
					stack={project.stack}
				/>
			{/each}
		</div>
	</section>
</Container>
