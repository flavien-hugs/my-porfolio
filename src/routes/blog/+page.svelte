<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import { lang } from '$lib/i18n.svelte';
</script>

<svelte:head>
	<title>{lang.t('Blog', 'Blog')} | flavien HUGS</title>
	<meta
		name="description"
		content={lang.t(
			'Articles about FastAPI, architecture, security and DevOps by Flavien HUGS.',
			'Articles sur FastAPI, l’architecture, la sécurité et le DevOps par Flavien HUGS.'
		)}
	/>
</svelte:head>

<Container>
	<section class="py-10">
		<Breadcrumb crumbs={[{ label: lang.t('Blog', 'Blog') }]} />
		<h1 class="text-4xl font-bold tracking-tight">
			{lang.t('Engineering Log.', "Carnet d'Ingénierie.")}
		</h1>
		<p class="mt-4 max-w-2xl font-light text-zinc-400">
			{lang.t(
				'Coming soon. I will publish articles about FastAPI, architecture, security and DevOps.',
				'Bientôt disponible. Je publierai des articles sur FastAPI, l’architecture, la sécurité et le DevOps.'
			)}
		</p>
	</section>
</Container>
