<script lang="ts">
	import { type Snippet } from 'svelte';
	type Props = { children?: Snippet };
	let { children }: Props = $props();
</script>

<div class="mx-auto w-full max-w-5xl px-4">
	{@render children?.()}
</div>
