<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { profile } from '$lib/data/profile';
    import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-12 md:py-20 animate-fade-in-up">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <!-- Left: Content (takes more space) -->
        <div class="lg:w-[60%] flex flex-col items-start gap-6">
            <div class="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/30 px-3 py-1 text-sm text-zinc-300 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-800/50">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {lang.t('Open to new projects', 'Disponible pour de nouveaux projets')}
            </div>

            <h1 class="text-4xl font-extrabold tracking-tight md:text-4xl lg:text-5xl leading-tight">
                {lang.t("Hi, I'm", "Hello, je suis")} {profile.name}. <br />
                <span class="text-zinc-500">{lang.t('Backend Engineer', 'Ingénieur Backend')}</span>
            </h1>

            <p class="max-w-xl text-lg text-zinc-400 font-light leading-relaxed">
                {lang.t(
                    "Crafting robust backend systems that power real-world applications. I love solving complex infrastructure challenges and designing clean, scalable APIs.",
                    "Je conçois des systèmes backend robustes qui propulsent des applications réelles. J'aime résoudre des défis d'infrastructure complexes et concevoir des API propres et évolutives."
                )}
            </p>

            <div class="flex flex-wrap gap-4 items-center">
                <Button href={profile.links.github}>{lang.t('Explore my code', 'Explorer mon code')}</Button>
                <Button href={profile.links.linkedin} variant="secondary">{lang.t("Let's connect", "Parlons ensemble")}</Button>
            </div>
        </div>

        <!-- Right: Simple Metadata List -->
        <div class="hidden lg:flex lg:w-[30%] justify-end">
            <div class="flex flex-col gap-8 border-l border-zinc-900 pl-12">
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">{lang.t('Core_Specialization', 'Spécialisation_Principale')}</span>
                    <span class="text-sm text-zinc-400 font-medium">{lang.t('Distributed Systems', 'Systèmes Distribués')}</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">{lang.t('Base_Location', 'Localisation')}</span>
                    <span class="text-sm text-zinc-400 font-medium">{profile.location} (GMT+0)</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">{lang.t('Primary_Stack', 'Stack_Primaire')}</span>
                    <span class="text-sm text-zinc-400 font-medium">Python / FastAPI / Go</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">{lang.t('System_Status', 'Statut_Système')}</span>
                    <div class="flex items-center gap-2">
                        <div class="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span class="text-sm text-emerald-500/80 font-medium uppercase tracking-wider">{lang.t('Ready_for_deployment', 'Prêt_au_déploiement')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
