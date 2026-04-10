<script lang="ts">
	import Container from './Container.svelte';
	import { profile } from '$lib/data/profile';
	import { lang } from '$lib/i18n.svelte';
	import { base } from '$app/paths';
</script>

<nav class="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
	<Container>
		<div class="flex h-16 items-center justify-between">
			<a href="{base}/" class="font-semibold tracking-tight">{profile.name}</a>

			<div class="flex items-center gap-6">
				<!-- Nav Links -->
				<div class="flex gap-6 font-mono text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
					<a href="{base}/projects" class="transition-colors hover:text-white"
						>{lang.t('Projects', 'Projets')}</a
					>
					<a href="{base}/blog" class="transition-colors hover:text-white">Blog</a>
				</div>

				<!-- Lang Switcher -->
				<div class="flex items-center gap-2 border-l border-zinc-900 pl-6 text-zinc-600">
					<button
						onclick={() => lang.set('fr')}
						class="font-mono text-[10px] transition-colors {lang.current === 'fr'
							? 'text-white'
							: 'hover:text-zinc-400'}"
					>
						FR
					</button>
					<span class="text-[10px] text-zinc-800">/</span>
					<button
						onclick={() => lang.set('en')}
						class="font-mono text-[10px] transition-colors {lang.current === 'en'
							? 'text-white'
							: 'hover:text-zinc-400'}"
					>
						EN
					</button>
				</div>
			</div>
		</div>
	</Container>
</nav>
