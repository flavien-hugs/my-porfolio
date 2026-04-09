<script lang="ts">
	type Props = {
		index?: number;
		slug: string;
		title: string;
		description: string;
		stack: string[];
	};

	let { index = 0, slug, title, description, stack }: Props = $props();
</script>

<a href={`/projects/${slug}`} class="group block relative h-full">
	<div class="relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl transition-all duration-300 group-hover:border-zinc-700/50 flex flex-col">
		<!-- Terminal Header -->
		<div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
			<div class="flex gap-1.5">
				<div class="h-2.5 w-2.5 rounded-full bg-zinc-800 group-hover:bg-red-500/50 transition-colors"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-zinc-800 group-hover:bg-amber-500/50 transition-colors"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-zinc-800 group-hover:bg-emerald-500/50 transition-colors"></div>
			</div>
			<div class="text-[10px] font-mono text-zinc-600 tracking-wider uppercase">
				{slug}.py — 0{index}
			</div>
		</div>

		<!-- Code Content -->
		<div class="p-5 font-mono text-[13px] leading-relaxed">
			<div>
                <span class="text-blue-400">class</span>
                <span class="text-emerald-400">{title.replace(/\s+/g, '')}</span>:
            </div>
			
			<div class="pl-4 mt-1.5">
				<span class="text-zinc-600 italic">"""</span>
				<div class="text-zinc-400 pl-4 border-l border-zinc-800 my-1">
					{description}
				</div>
				<span class="text-zinc-600 italic">"""</span>
			</div>

			<div class="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
				<span class="text-purple-400">stack</span>
                <span class="text-zinc-500">= [</span>
                {#each stack.slice(0, 3) as tech}
                    <span class="text-emerald-500/80">"{tech}"</span>{tech !== stack.slice(0, 3)[stack.slice(0, 3).length-1] ? ',' : ''}
                {/each}
                {#if stack.length > 3}
                    <span class="text-zinc-600">...</span>
                {/if}
                <span class="text-zinc-500">]</span>
			</div>

            <!-- Terminal Action -->
			<div class="mt-6 flex items-center gap-2 border-t border-zinc-900 pt-3 text-[11px]">
				<span class="text-emerald-500">➜</span>
                <span class="text-zinc-300">git checkout</span>
                <span class="text-blue-400">details</span>
                <span class="animate-pulse inline-block h-2.5 w-1 bg-zinc-700 ml-1"></span>
			</div>
		</div>
	</div>
</a>
