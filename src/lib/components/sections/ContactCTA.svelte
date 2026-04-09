<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { profile } from '$lib/data/profile';
    import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-10 flex flex-col items-center text-center gap-8 border-t border-zinc-900">
	<div class="space-y-4">
        <h2 class="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
            {lang.t('Ready to scale ?', 'Prêt à passer à l\'échelle ?')}
        </h2>
        <p class="max-w-lg mx-auto text-zinc-500 font-light text-lg">
            {lang.t(
                "Whether it's a new project or a technical challenge, let's talk about building something that lasts.",
                "Qu'il s'agisse d'un nouveau projet ou d'un défi technique, discutons pour construire quelque chose de durable."
            )}
        </p>
    </div>
		
    <div class="flex flex-col sm:flex-row items-center gap-4">
        <Button href={profile.links.whatsapp} external>
            {lang.t('Start a Conversation', 'Démarrer une Conversation')}
        </Button>
        <div class="hidden sm:block h-1 w-8 bg-zinc-900"></div>
        <a href={profile.links.linkedin} class="text-sm font-medium text-zinc-500 hover:text-white transition-colors underline underline-offset-8">
            {lang.t('LinkedIn Profile', 'Profil LinkedIn')}
        </a>
    </div>
</section>
