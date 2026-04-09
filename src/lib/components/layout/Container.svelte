<script lang="ts">
	type Props = { children?: any };
	let { children }: Props = $props();
</script>

<div class="mx-auto w-full max-w-5xl px-4">
	{@render children?.()}
</div>
