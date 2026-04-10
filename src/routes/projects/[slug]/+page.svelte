<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { projects } from '$lib/data/projects';
	import { page } from '$app/state';

	let slug = $derived(page.params.slug);
	let project = $derived(projects.find((p) => p.slug === slug));
</script>

<Container>
	<section class="py-20">
		{#if project}
			<h1 class="text-4xl font-bold">{project.title}</h1>
			<p class="mt-4 max-w-2xl text-zinc-300">{project.longDescription}</p>

			<div class="mt-6 flex flex-wrap gap-2">
				{#each project.stack as tech (tech)}
					<Badge text={tech} />
				{/each}
			</div>

			<div class="mt-8 flex gap-4">
				{#if project.github}
					<Button href={project.github}>GitHub</Button>
				{/if}

				{#if project.demo}
					<Button href={project.demo} variant="secondary">Demo</Button>
				{/if}
			</div>

			<div class="mt-12 grid gap-4 md:grid-cols-2">
				<Card>
					<h2 class="text-xl font-semibold">Highlights</h2>
					<ul class="mt-4 space-y-2 text-zinc-300">
						{#each project.highlights as item (item)}
							<li>• {item}</li>
						{/each}
					</ul>
				</Card>

				<Card>
					<h2 class="text-xl font-semibold">Architecture</h2>
					<ul class="mt-4 space-y-2 text-zinc-300">
						{#each project.architecture as item (item)}
							<li>• {item}</li>
						{/each}
					</ul>
				</Card>
			</div>
		{:else}
			<h1 class="text-3xl font-bold">Project not found</h1>
			<p class="mt-4 text-zinc-400">This project does not exist.</p>
		{/if}
	</section>
</Container>
