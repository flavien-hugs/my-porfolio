<script lang="ts">
	import { base } from '$app/paths';

	type Crumb = {
		label: string;
		href?: string;
	};

	type Props = {
		crumbs: Crumb[];
	};

	let { crumbs }: Props = $props();
</script>

<nav aria-label="Breadcrumb" class="mb-8">
	<ol class="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
		<li>
			<a
				href="{base}/"
				class="text-zinc-600 transition-colors duration-200 hover:text-white"
			>
				Home
			</a>
		</li>

		{#each crumbs as crumb, i (i)}
			<li class="flex items-center gap-2">
				<span class="text-zinc-800">／</span>
				{#if crumb.href}
					<a
						href={crumb.href}
						class="text-zinc-600 transition-colors duration-200 hover:text-white"
					>
						{crumb.label}
					</a>
				{:else}
					<span class="text-zinc-400">{crumb.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
