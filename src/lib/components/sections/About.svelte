<script lang="ts">
    import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-10">
	<div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
		<!-- Sticky Sidebar -->
		<div class="lg:w-1/3 lg:sticky lg:top-32 h-fit">
			<h3 class="text-4xl font-bold text-white tracking-tight leading-tight">
				{lang.t('How I Build', 'Comment je bâtis')} <br /> 
                {lang.t('Modern Systems.', 'des systèmes modernes.')}
			</h3>
			<p class="mt-6 text-zinc-500 font-light leading-relaxed">
				{lang.t(
                    "Engineering isn't just about making it work. It's about making it industrial-grade, secure, and maintainable for the humans who follow.",
                    "L'ingénierie ne consiste pas seulement à faire fonctionner les choses. Il s'agit de les rendre de qualité industrielle, sécurisées et maintenables pour les humains qui suivent."
                )}
			</p>
		</div>

		<!-- Principles List -->
		<div class="lg:w-2/3 flex flex-col relative">
            <!-- Vertical Line between numbers -->
            <div class="absolute left-[1.15rem] top-10 bottom-10 w-px bg-zinc-900 -z-10"></div>

			<!-- 01 -->
			<div class="group flex flex-col gap-4 pb-12">
                <div class="flex items-center gap-6">
				    <span class="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-500 transition-colors group-hover:border-emerald-500/50 group-hover:text-emerald-500">01</span>
					<h4 class="text-xl font-bold text-white uppercase tracking-tight">
                        {lang.t('Clean Architecture First', 'Clean Architecture d\'abord')}
                    </h4>
                </div>
				<p class="text-zinc-400 font-light leading-relaxed max-w-xl pl-16 text-sm">
					{lang.t(
                        "I treat your business logic as a sacred core. By using Hexagonal and DDD principles, I keep it entirely isolated from databases, APIs, and frameworks. This ensures your system is testable and decoupled.",
                        "Je traite votre logique métier comme un noyau sacré. En utilisant les principes Hexagonaux et DDD, je la garde entièrement isolée des bases de données, des API et des frameworks. Cela garantit que votre système est testable et découplé."
                    )}
				</p>
			</div>

			<!-- 02 -->
			<div class="group flex flex-col gap-4 pb-12">
                <div class="flex items-center gap-6">
				    <span class="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-500 transition-colors group-hover:border-blue-500/50 group-hover:text-blue-500">02</span>
					<h4 class="text-xl font-bold text-white uppercase tracking-tight">
                        {lang.t('Security is Inherent', 'La sécurité est inhérente')}
                    </h4>
                </div>
				<p class="text-zinc-400 font-light leading-relaxed max-w-xl pl-16 text-sm">
					{lang.t(
                        "Security is never an 'add-on'. I implement Zero-Trust architecture, secure JWT rotation, and fine-grained RBAC from the very first line of code. Your data is protected by industrial-grade patterns.",
                        "La sécurité n'est jamais un 'ajout'. J'implémente une architecture Zero-Trust, une rotation JWT sécurisée et un RBAC granulaire dès la première ligne de code. Vos données sont protégées par des modèles de qualité industrielle."
                    )}
				</p>
			</div>

			<!-- 03 -->
			<div class="group flex flex-col gap-4">
                <div class="flex items-center gap-6">
				    <span class="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-500 transition-colors group-hover:border-amber-500/50 group-hover:text-amber-500">03</span>
					<h4 class="text-xl font-bold text-white uppercase tracking-tight">
                        {lang.t('Automated Reliability', 'Fiabilité automatisée')}
                    </h4>
                </div>
				<p class="text-zinc-400 font-light leading-relaxed max-w-xl pl-16 text-sm">
					{lang.t(
                        "If it's manual, it's a liability. I build with Docker-first workflows, rigorous CI/CD pipelines, and deep observability (ELK/Prometheus). Robustness via automation.",
                        "Si c'est manuel, c'est une vulnérabilité. Je construis avec des workflows orientés Docker, des pipelines CI/CD rigoureux et une observabilité profonde (ELK/Prometheus). La robustesse par l'automatisation."
                    )}
				</p>
			</div>
		</div>
	</div>
</section>
