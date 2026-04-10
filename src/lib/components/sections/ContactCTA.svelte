<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { profile } from '$lib/data/profile';
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="flex flex-col items-center gap-8 border-t border-zinc-900 py-10 text-center">
	<div class="space-y-4">
		<h2 class="text-4xl font-bold tracking-tighter text-white uppercase md:text-6xl">
			{lang.t('Ready to scale ?', "Prêt à passer à l'échelle ?")}
		</h2>
		<p class="mx-auto max-w-lg text-lg font-light text-zinc-500">
			{lang.t(
				"Whether it's a new project or a technical challenge, let's talk about building something that lasts.",
				"Qu'il s'agisse d'un nouveau projet ou d'un défi technique, discutons pour construire quelque chose de durable."
			)}
		</p>
	</div>

	<div class="flex flex-col items-center gap-4 sm:flex-row">
		<Button href={profile.links.whatsapp} variant="primary">
			{lang.t('Start a Conversation', 'Démarrer une Conversation')}
		</Button>
		<div class="hidden h-1 w-8 bg-zinc-900 sm:block"></div>
		<a
			href={profile.links.linkedin}
			target="_blank"
			rel="noreferrer"
			class="text-sm font-medium text-zinc-500 underline underline-offset-8 transition-colors hover:text-white"
		>
			{lang.t('LinkedIn Profile', 'Profil LinkedIn')}
		</a>
	</div>
</section>
