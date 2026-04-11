<script lang="ts">
	import { base } from '$app/paths';
	import { lang, type LocalizedString } from '$lib/i18n.svelte';

	type Props = {
		index?: number;
		slug: string;
		title: string | LocalizedString;
		description: string | LocalizedString;
		stack: string[];
		github?: string;
		demo?: string;
	};

	let { index = 0, slug, title, description, stack, github, demo }: Props = $props();

	const displayTitle = $derived(typeof title === 'string' ? title : lang.t(title.en, title.fr));
	const displayDesc = $derived(typeof description === 'string' ? description : lang.t(description.en, description.fr));
</script>

<div class="group relative block h-full">
	<div
		class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl transition-all duration-300 group-hover:border-zinc-700/50"
	>
		<!-- Terminal Header -->
		<div
			class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-3"
		>
			<div class="flex gap-1.5">
				<div
					class="h-2.5 w-2.5 rounded-full bg-zinc-800 transition-colors group-hover:bg-red-500/50"
				></div>
				<div
					class="h-2.5 w-2.5 rounded-full bg-zinc-800 transition-colors group-hover:bg-amber-500/50"
				></div>
				<div
					class="h-2.5 w-2.5 rounded-full bg-zinc-800 transition-colors group-hover:bg-emerald-500/50"
				></div>
			</div>
			<div class="font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
				{slug}.py — 0{index}
			</div>
		</div>

		<!-- Code Content -->
		<div class="flex flex-1 flex-col p-5 font-mono text-[13px] leading-relaxed">
			<a href="{base}/projects/{slug}" class="block transition-all hover:translate-x-1">
				<div>
					<span class="text-blue-400">class</span>
					<span class="text-emerald-400">{displayTitle.replace(/\s+/g, '')}</span>:
				</div>

				<div class="mt-1.5 pl-4">
					<span class="text-zinc-600 italic">"""</span>
					<div class="my-1 border-l border-zinc-800 pl-4 text-zinc-400">
						{displayDesc}
					</div>
					<span class="text-zinc-600 italic">"""</span>
				</div>
			</a>

			<div class="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
				<span class="text-purple-400">stack</span>
				<span class="text-zinc-500">= [</span>
				{#each stack.slice(0, 3) as tech (tech)}
					<span class="text-emerald-500/80">"{tech}"</span>{tech !==
					stack.slice(0, 3)[stack.slice(0, 3).length - 1]
						? ','
						: ''}
				{/each}
				{#if stack.length > 3}
					<span class="text-zinc-600">...</span>
				{/if}
				<span class="text-zinc-500">]</span>
			</div>

			<!-- Terminal Action Footer -->
			<div class="mt-auto pt-6">
				<div class="flex items-center justify-between border-t border-zinc-900 pt-3 text-[11px]">
					<div class="flex items-center gap-3">
						<a href="{base}/projects/{slug}" class="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
							<span class="text-emerald-500">➜</span>
							<span>details</span>
						</a>
						
						{#if github}
							<a href={github} target="_blank" rel="noopener noreferrer" class="text-zinc-600 hover:text-white transition-colors">
								git
							</a>
						{/if}

						{#if demo}
							<a href={demo} target="_blank" rel="noopener noreferrer" class="text-zinc-600 hover:text-white transition-colors">
								live
							</a>
						{/if}
					</div>
					<span class="inline-block h-2.5 w-1 animate-pulse bg-zinc-700"></span>
				</div>
			</div>
		</div>
	</div>
</div>
