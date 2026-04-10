<script lang="ts">
	import { skills } from '$lib/data/skills';
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-16">
	<div class="mb-12">
		<h3 class="text-3xl font-bold tracking-tight text-white">
			{lang.t('Technical Arsenal.', 'Arsenal Technique.')}
		</h3>
		<p class="mt-2 font-light text-zinc-500">
			{lang.t(
				'The tools and technologies I use to command the backend.',
				"Les outils et technologies que j'utilise pour piloter le backend."
			)}
		</p>
	</div>

	<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each skills as skillGroup (skillGroup.category)}
			<div class="flex flex-col gap-6">
				<div class="border-t border-zinc-800 pt-4">
					<h4 class="mb-6 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
						{skillGroup.category}
					</h4>

					<div class="flex flex-wrap gap-2">
						{#each skillGroup.items as item (item)}
							<span
								class="cursor-default rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 transition-all hover:border-zinc-500 hover:text-white"
							>
								{item}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
