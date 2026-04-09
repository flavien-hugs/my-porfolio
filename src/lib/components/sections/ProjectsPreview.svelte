<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
</script>

<section class="py-16">
	<h2 class="text-2xl font-bold tracking-tight">Featured Work</h2>
	<p class="mt-2 text-zinc-400 font-light text-lg">A selection of projects that showcase my approach to backend engineering.</p>

	<div class="mt-12 grid gap-6 md:grid-cols-2">
		{#each projects.filter((p) => p.featured) as project, i}
			<ProjectCard
				index={i + 1}
				slug={project.slug}
				title={project.title}
				description={project.description}
				stack={project.stack}
			/>
		{/each}

		<div class="flex h-full items-center justify-center p-6 border-2 border-dashed border-zinc-900 rounded-2xl hover:border-zinc-800 transition-colors bg-zinc-950/20">
			<a href="/projects" class="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
				View all projects 
				<span class="transition-transform group-hover:translate-x-1">→</span>
			</a>
		</div>
	</div>
</section>
