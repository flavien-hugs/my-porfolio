<script lang="ts">
	import { type Snippet } from 'svelte';
	type Variant = 'primary' | 'secondary';

	type Props = {
		href?: string | null;
		variant?: Variant;
		children?: Snippet;
	};

	let { href = null, variant = 'primary', children }: Props = $props();
</script>

{#if href}
	<a
		{href}
		target="_blank"
		rel="noreferrer"
		class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition
		{variant === 'primary'
			? 'bg-white text-black hover:bg-zinc-200'
			: 'border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800'}"
	>
		{@render children?.()}
	</a>
{:else}
	<button
		class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition
		{variant === 'primary'
			? 'bg-white text-black hover:bg-zinc-200'
			: 'border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800'}"
	>
		{@render children?.()}
	</button>
{/if}
