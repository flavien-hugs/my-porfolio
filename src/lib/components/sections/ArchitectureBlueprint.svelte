<script lang="ts">
	import { lang, type LocalizedString } from '$lib/i18n.svelte';

	type ComponentNode = {
		id: string;
		label: string | LocalizedString;
		description: string | LocalizedString;
	};

	const components: ComponentNode[] = [
		{ id: 'proxy', label: 'Nginx', description: 'Traffic Gateway' },
		{
			id: 'infra',
			label: 'Docker',
			description: { en: 'Containerization Layer', fr: 'Couche de Conteneurisation' }
		},
		{
			id: 'app',
			label: 'FastAPI / Django / Flask / Robyn',
			description: { en: 'Business Logic Core', fr: 'Cœur Logique Métier' }
		},
		{
			id: 'workers',
			label: 'Celery / Redis',
			description: { en: 'Async Task Processing', fr: 'Traitement Asynchrone' }
		},
		{
			id: 'db',
			label: 'Database (Postgres / Mongo / SQlite)',
			description: { en: 'Polyglot Persistence', fr: 'Persistence Polyglotte' }
		},
		{
			id: 'logs',
			label: 'Dozzle / Grafana',
			description: { en: 'Real-time Observability', fr: 'Observabilité Temps Réel' }
		}
	];
</script>

<section class="border-t border-zinc-900/50 py-6">
	<div class="mb-12">
		<p class="mb-3 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
			{lang.t('System Design', 'Conception Système')} — {lang.t('Philosophy', 'Philosophie')}
		</p>
		<h2 class="text-4xl font-bold tracking-tight text-white uppercase">
			{lang.t('Technical Ecosystem', 'Écosystème Technique')}
		</h2>
		<p class="mt-4 max-w-2xl text-sm leading-relaxed font-light text-zinc-500">
			{lang.t(
				'This blueprint represents my full-cycle architecture. I architect for scale using containerized microservices, asynchronous task queues, and real-time observability.',
				"Ce schéma représente mon cycle d'architecture complet. Je conçois pour l'échelle en utilisant des microservices conteneurisés, des files d'attente asynchrones et une observabilité en temps réel."
			)}
		</p>
	</div>

	<!-- Visual Architecture Map -->
	<div
		class="relative overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8 lg:p-10"
	>
		<div
			class="grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6"
		>
			{#each components as comp (comp.id)}
				<div class="relative flex flex-col items-center text-center">
					<!-- Node -->
					<div
						class="group relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:border-zinc-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
					>
						<span class="px-2 text-[10px] font-bold tracking-tighter text-white">
							{typeof comp.label === 'string' ? comp.label : lang.t(comp.label.en, comp.label.fr)}
						</span>

						<!-- Indicators based on type -->
						{#if comp.id === 'app'}
							<span class="absolute -top-1 -right-1 flex h-4 w-4">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-20"
								></span>
								<span
									class="relative inline-flex h-4 w-4 rounded-full border border-zinc-900 bg-zinc-500"
								></span>
							</span>
						{:else if comp.id === 'workers'}
							<div class="absolute -bottom-2 flex gap-1.5">
								<div class="h-1.5 w-4 bg-zinc-700"></div>
								<div class="h-1.5 w-4 bg-zinc-700"></div>
							</div>
						{/if}
					</div>

					<!-- Content -->
					<div class="mt-6">
						<h4 class="mb-2 text-[11px] font-bold text-zinc-300">
							{typeof comp.label === 'string' ? comp.label : lang.t(comp.label.en, comp.label.fr)}
						</h4>
						<p class="text-[10px] leading-loose leading-relaxed tracking-widest text-zinc-600">
							{typeof comp.description === 'string'
								? comp.description
								: lang.t(comp.description.en, comp.description.fr)}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Visual noise / background dots -->
		<div
			class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
		></div>
	</div>
</section>
