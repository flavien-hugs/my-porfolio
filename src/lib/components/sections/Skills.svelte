<script lang="ts">
	import { skills } from '$lib/data/skills';
    import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-16">
    <div class="mb-12">
        <h3 class="text-3xl font-bold text-white tracking-tight">
            {lang.t('Technical Arsenal.', 'Arsenal Technique.')}
        </h3>
        <p class="mt-2 text-zinc-500 font-light">
            {lang.t('The tools and technologies I use to command the backend.', 'Les outils et technologies que j\'utilise pour piloter le backend.')}
        </p>
    </div>

	<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each skills as skillGroup}
			<div class="flex flex-col gap-6">
                <div class="border-t border-zinc-800 pt-4">
				    <h4 class="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">{skillGroup.category}</h4>
                    
                    <div class="flex flex-wrap gap-2">
                        {#each skillGroup.items as item}
                            <span class="px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400 hover:border-zinc-500 hover:text-white transition-all cursor-default">
                                {item}
                            </span>
                        {/each}
                    </div>
                </div>
			</div>
		{/each}
	</div>
</section>
