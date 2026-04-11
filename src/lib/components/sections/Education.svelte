<script lang="ts">
	import { education, certifications } from '$lib/data/education';
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="border-t border-zinc-900/50 py-16">
	<div class="mb-14">
		<p class="mb-3 font-mono text-[9px] tracking-[0.4em] text-zinc-600 uppercase">
			{lang.t('Academic Path', 'Parcours Académique')}
		</p>
		<h2 class="text-3xl font-bold tracking-tight text-white uppercase">
			{lang.t('Education & Certs.', 'Études & Certifs.')}
		</h2>
	</div>

	<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
		<!-- Education Section -->
		<div>
			<h3 class="mb-8 font-mono text-[10px] tracking-[0.3em] text-zinc-700 uppercase">
				{lang.t('Degrees', 'Diplômes')}
			</h3>
			<ul class="space-y-12 border-l border-zinc-900 pl-8">
				{#each education as ed, i (i)}
					<li class="relative">
						<!-- Dot on the vertical line -->
						<div
							class="absolute top-1.5 -left-[36px] h-2 w-2 rounded-full border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:scale-125 hover:bg-white"
						></div>

						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-3">
								<h4 class="text-lg font-bold tracking-tight text-white">
									{lang.t(ed.degree.en, ed.degree.fr)}
								</h4>
								{#if ed.status === 'in-progress'}
									<span
										class="rounded-full border border-zinc-700/50 px-2 py-0.5 font-mono text-[9px] text-zinc-500 uppercase"
									>
										{lang.t('In Progress', 'En Cours')}
									</span>
								{/if}
							</div>
							<p class="text-sm text-zinc-400">
								{typeof ed.institution === 'string'
									? ed.institution
									: lang.t(ed.institution.en, ed.institution.fr)}
							</p>
							<span class="mt-1 font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
								{typeof ed.period === 'string' ? ed.period : lang.t(ed.period.en, ed.period.fr)}
							</span>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Certifications Section -->
		<div>
			<h3 class="mb-8 font-mono text-[10px] tracking-[0.3em] text-zinc-700 uppercase">
				{lang.t('Certifications', 'Certifications')}
			</h3>
			<ul class="space-y-4">
				{#each certifications as cert (cert.title)}
					<li
						class="group flex items-center justify-between border-b border-zinc-900 pb-4 transition-all duration-300 hover:translate-x-1"
					>
						<div class="flex flex-col gap-1">
							<h4 class="text-xs font-bold tracking-tight text-zinc-300 uppercase">
								{typeof cert.title === 'string' ? cert.title : lang.t(cert.title.en, cert.title.fr)}
							</h4>
							<p class="font-mono text-[10px] text-zinc-600 uppercase">
								{typeof cert.issuer === 'string'
									? cert.issuer
									: lang.t(cert.issuer.en, cert.issuer.fr)} — {cert.year}
							</p>
						</div>
						<span class="font-mono text-[10px] text-zinc-700 group-hover:text-zinc-500">
							{cert.year}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
