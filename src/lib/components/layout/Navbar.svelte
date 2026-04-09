<script lang="ts">
	import Container from './Container.svelte';
	import { profile } from '$lib/data/profile';
    import { lang } from '$lib/i18n.svelte';
</script>

<nav class="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
	<Container>
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="font-semibold tracking-tight">{profile.name}</a>

			<div class="flex items-center gap-6">
                <!-- Nav Links -->
                <div class="flex gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
				    <a href="/projects" class="hover:text-white transition-colors">{lang.t('Projects', 'Projets')}</a>
				    <a href="/blog" class="hover:text-white transition-colors">Blog</a>
			    </div>

                <!-- Lang Switcher -->
                <div class="flex items-center gap-2 border-l border-zinc-900 pl-6 text-zinc-600">
                    <button 
                        onclick={() => lang.set('fr')} 
                        class="text-[10px] font-mono transition-colors {lang.current === 'fr' ? 'text-white' : 'hover:text-zinc-400'}"
                    >
                        FR
                    </button>
                    <span class="text-zinc-800 text-[10px]">/</span>
                    <button 
                        onclick={() => lang.set('en')} 
                        class="text-[10px] font-mono transition-colors {lang.current === 'en' ? 'text-white' : 'hover:text-zinc-400'}"
                    >
                        EN
                    </button>
                </div>
            </div>
		</div>
	</Container>
</nav>
