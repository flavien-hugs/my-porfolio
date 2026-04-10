<script lang="ts">
	import { type Snippet } from 'svelte';
	type Props = { children?: Snippet };
	let { children }: Props = $props();
</script>

<div
	class="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-800/40 hover:shadow-xl"
>
	{@render children?.()}
</div>
