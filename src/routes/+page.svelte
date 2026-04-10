<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import ProjectsPreview from '$lib/components/sections/ProjectsPreview.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import ContactCTA from '$lib/components/sections/ContactCTA.svelte';
</script>

<svelte:head>
	<title>flavien HUGS</title>
	<meta
		name="description"
		content="Flavien HUGS — Backend Engineer specializing in Python, FastAPI, architecture and DevOps."
	/>
</svelte:head>

<Container>
	<Hero />
	<About />
	<ProjectsPreview />
	<Skills />
	<Experience />
	<ContactCTA />
</Container>
