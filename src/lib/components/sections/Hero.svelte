<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { profile } from '$lib/data/profile';
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="animate-fade-in-up py-12 md:py-20">
	<div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
		<!-- Left: Content (takes more space) -->
		<div class="flex flex-col items-start gap-6 lg:w-[60%]">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/30 px-3 py-1 text-sm text-zinc-300 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-800/50"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
				</span>
				{lang.t('Open to new projects', 'Disponible pour de nouveaux projets')}
			</div>

			<h1 class="text-4xl leading-tight font-extrabold tracking-tight md:text-4xl lg:text-5xl">
				{lang.t("Hi, I'm", 'Hello, je suis')}
				{profile.name}. <br />
				<span class="text-zinc-500">{lang.t('Backend Engineer', 'Ingénieur Backend')}</span>
			</h1>

			<p class="max-w-xl text-lg leading-relaxed font-light text-zinc-400">
				{lang.t(
					'Crafting robust backend systems that power real-world applications. I love solving complex infrastructure challenges and designing clean, scalable APIs.',
					"Je conçois des systèmes backend robustes qui propulsent des applications réelles. J'aime résoudre des défis d'infrastructure complexes et concevoir des API propres et évolutives."
				)}
			</p>

			<div class="flex flex-wrap items-center gap-4">
				<Button href={profile.links.github}>{lang.t('Explore my code', 'Explorer mon code')}</Button
				>
				<Button href={profile.links.linkedin} variant="secondary"
					>{lang.t("Let's connect", 'Parlons ensemble')}</Button
				>
			</div>
		</div>

		<!-- Right: Simple Metadata List -->
		<div class="hidden justify-end lg:flex lg:w-[30%]">
			<div class="flex flex-col gap-8 border-l border-zinc-900 pl-12">
				<div class="flex flex-col gap-1">
					<span class="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase"
						>{lang.t('Core_Specialization', 'Spécialisation_Principale')}</span
					>
					<span class="text-sm font-medium text-zinc-400"
						>{lang.t('Distributed Systems', 'Systèmes Distribués')}</span
					>
				</div>
				<div class="flex flex-col gap-1">
					<span class="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase"
						>{lang.t('Base_Location', 'Localisation')}</span
					>
					<span class="text-sm font-medium text-zinc-400">{profile.location} (GMT+0)</span>
				</div>
				<div class="flex flex-col gap-1">
					<span class="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase"
						>{lang.t('Primary_Stack', 'Stack_Primaire')}</span
					>
					<span class="text-sm font-medium text-zinc-400">Python / FastAPI / Go</span>
				</div>
				<div class="flex flex-col gap-1">
					<span class="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase"
						>{lang.t('System_Status', 'Statut_Système')}</span
					>
					<div class="flex items-center gap-2">
						<div class="h-1 w-1 animate-pulse rounded-full bg-emerald-500"></div>
						<span class="text-sm font-medium tracking-wider text-emerald-500/80 uppercase"
							>{lang.t('Ready_for_deployment', 'Prêt_au_déploiement')}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
