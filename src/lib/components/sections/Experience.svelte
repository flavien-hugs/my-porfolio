<script lang="ts">
	import { experience } from '$lib/data/experience';
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-16">
	<div class="mb-12">
		<h3 class="text-3xl font-bold tracking-tight text-white uppercase">
			{lang.t('Work Path.', 'Parcours Professionnel.')}
		</h3>
		<p class="mt-2 font-light text-zinc-500">
			{lang.t(
				'My professional journey and technical milestones.',
				'Mon parcours et mes étapes techniques clés.'
			)}
		</p>
	</div>

	<div class="flex flex-col gap-12">
		{#each experience as exp (exp.company + exp.role)}
			<div
				class="group grid grid-cols-1 gap-4 border-t border-zinc-900 pt-8 md:grid-cols-12 md:gap-8"
			>
				<!-- Period -->
				<div class="md:col-span-3">
					<span class="font-mono text-xs font-bold tracking-widest text-zinc-600 uppercase">
						{typeof exp.period === 'string' ? exp.period : lang.t(exp.period.en, exp.period.fr)}
					</span>
				</div>

				<!-- Details -->
				<div class="md:col-span-9">
					<div class="mb-4 flex flex-col gap-1">
						<h4 class="text-xl font-bold text-white transition-colors">
							{typeof exp.role === 'string' ? exp.role : lang.t(exp.role.en, exp.role.fr)}
						</h4>
						<p class="text-sm font-medium text-zinc-400">@ {exp.company}</p>
					</div>

					<p class="max-w-2xl text-sm leading-relaxed font-light text-zinc-500">
						{typeof exp.description === 'string' ? exp.description : lang.t(exp.description.en, exp.description.fr)}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
