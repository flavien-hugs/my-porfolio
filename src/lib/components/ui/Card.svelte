<script lang="ts">
	type Props = { children?: any };
	let { children }: Props = $props();
</script>

<div class="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/40 hover:shadow-xl hover:-translate-y-1">
	{@render children?.()}
</div>
