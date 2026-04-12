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
			<ul class="space-y-12 border-l border-zinc-900/80 pl-10">
				{#each education as ed, i (i)}
					<li class="relative">
						<!-- Dot on the vertical line -->
						<div
							class="absolute top-1.5 -left-[45px] h-3 w-3 rounded-full border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:scale-125 hover:bg-white"
						></div>

						<div class="flex flex-col gap-3">
							<div class="flex flex-wrap items-center gap-4">
								<h4 class="text-xl font-bold tracking-tight text-white">
									{lang.t(ed.degree.en, ed.degree.fr)}
								</h4>
								{#if ed.status === 'in-progress'}
									<span
										class="rounded-full border border-zinc-700/80 bg-zinc-900/40 px-3 py-0.5 font-mono text-[9px] tracking-widest text-zinc-400 uppercase"
									>
										{lang.t('In Progress', 'En Cours')}
									</span>
								{/if}
							</div>
							<p class="text-sm font-medium tracking-wide text-zinc-500 uppercase">
								{typeof ed.institution === 'string'
									? ed.institution
									: lang.t(ed.institution.en, ed.institution.fr)}
							</p>
							<div class="flex items-center gap-3">
								<span class="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
									{typeof ed.period === 'string' ? ed.period : lang.t(ed.period.en, ed.period.fr)}
								</span>
								{#if ed.location}
									<span class="h-1 w-1 rounded-full bg-zinc-800"></span>
									<span class="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
										{ed.location}
									</span>
								{/if}
							</div>
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
			<div
				class="scrollbar-thin scrollbar-track-zinc-900/40 scrollbar-thumb-zinc-700 hover:scrollbar-thumb-zinc-500 max-h-[400px] overflow-y-auto pr-6"
			>
				<ul class="space-y-2">
					{#each certifications as cert (cert.title)}
						<li
							class="group relative flex items-center justify-between rounded-xl px-4 py-6 transition-all duration-300 hover:bg-zinc-900/40 hover:pl-6"
						>
							<div
								class="absolute inset-y-4 left-0 w-0.5 bg-white opacity-0 transition-all group-hover:opacity-100"
							></div>

							<div class="flex flex-col gap-2">
								<h4 class="text-sm font-bold tracking-tight text-white sm:text-base">
									{typeof cert.title === 'string'
										? cert.title
										: lang.t(cert.title.en, cert.title.fr)}
								</h4>
								<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
									<p class="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
										{typeof cert.issuer === 'string'
											? cert.issuer
											: lang.t(cert.issuer.en, cert.issuer.fr)}
									</p>
									{#if cert.link}
										<a
											href={cert.link}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center gap-2 font-mono text-[9px] text-zinc-500 underline decoration-zinc-800 underline-offset-4 transition-all hover:decoration-white"
										>
											<span class="text-zinc-600">→</span>
											{lang.t('VERIFY', 'VÉRIFIER')}
										</a>
									{/if}
								</div>
							</div>
							<div class="flex flex-col items-end gap-1">
								<span class="font-mono text-[11px] font-bold text-zinc-500">
									{cert.year}
								</span>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
