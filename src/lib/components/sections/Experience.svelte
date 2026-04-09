<script lang="ts">
	import { experience } from '$lib/data/experience';
    import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-16">
    <div class="mb-12">
        <h3 class="text-3xl font-bold text-white tracking-tight uppercase">{lang.t('Work Path.', 'Parcours Professionnel.')}</h3>
        <p class="mt-2 text-zinc-500 font-light">{lang.t('My professional journey and technical milestones.', 'Mon parcours et mes étapes techniques clés.')}</p>
    </div>

	<div class="flex flex-col gap-12">
		{#each experience as exp}
			<div class="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-zinc-900 pt-8">
				<!-- Period -->
                <div class="md:col-span-3">
					<span class="text-xs font-mono uppercase tracking-widest text-zinc-600 font-bold">
                        {exp.period}
                    </span>
				</div>
				
                <!-- Details -->
				<div class="md:col-span-9">
					<div class="flex flex-col gap-1 mb-4">
						<h4 class="text-xl font-bold text-white transition-colors">
                            {exp.role}
                        </h4>
						<p class="text-sm font-medium text-zinc-400">@ {exp.company}</p>
					</div>
					
					<p class="text-zinc-500 text-sm leading-relaxed font-light max-w-2xl">
						{exp.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
