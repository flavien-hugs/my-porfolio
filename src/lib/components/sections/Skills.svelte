<script lang="ts">
	import { skills } from '$lib/data/skills';
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-16 border-t border-zinc-900/50">
	<div class="flex flex-col gap-16 lg:flex-row lg:gap-24">
		<!-- Sticky Sidebar -->
		<div class="h-fit lg:sticky lg:top-32 lg:w-1/3">
			<h3 class="text-4xl leading-tight font-bold tracking-tight text-white">
				{lang.t('Technical', 'Arsenal')} <br />
				{lang.t('Arsenal.', 'Technique.')}
			</h3>
			<p class="mt-6 leading-relaxed font-light text-zinc-500">
				{lang.t(
					'The tools and technologies I use to architect robust, scalable, and secure backend systems.',
					"Les outils et technologies que j'utilise pour architecturer des systèmes backend robustes, évolutifs et sécurisés."
				)}
			</p>
		</div>

		<!-- Skills List -->
		<div class="relative flex flex-col lg:w-2/3">
			<!-- Vertical Line between numbers -->
			<div class="absolute top-10 bottom-10 left-[1.15rem] -z-10 w-px bg-zinc-900/50"></div>

			{#each skills as skillGroup, i (skillGroup.category.en)}
				<div class="group flex flex-col gap-6 pb-14 last:pb-0">
					<div class="flex items-center gap-6">
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-500 transition-colors group-hover:border-zinc-500 group-hover:text-white"
						>
							{String(i + 1).padStart(2, '0')}
						</span>
						<h4 class="text-xl font-bold tracking-tight text-white uppercase">
							{typeof skillGroup.category === 'string'
								? skillGroup.category
								: lang.t(skillGroup.category.en, skillGroup.category.fr)}
						</h4>
					</div>

					<!-- Skills Word Cloud -->
					<div class="flex flex-wrap items-center gap-x-6 gap-y-4 pl-16">
						{#each skillGroup.items as item, j (item.en)}
							{@const size = [
								'text-[12px]',
								'text-[15px]',
								'text-[17px]',
								'text-[11px]',
								'text-[14px]',
								'text-[13px]'
							][(i + j) % 6]}
							{@const weight = (i + j) % 3 === 0 ? 'font-bold' : 'font-light'}
							{@const opacity = [
								'text-zinc-600',
								'text-zinc-300',
								'text-zinc-500',
								'text-zinc-400'
							][(i + j) % 4]}
							<span
								class="cursor-default {size} {weight} {opacity} transition-all duration-300 hover:scale-110 hover:text-white"
							>
								{typeof item === 'string' ? item : lang.t(item.en, item.fr)}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
