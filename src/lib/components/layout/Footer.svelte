<script lang="ts">
	import Container from './Container.svelte';
	import { profile } from '$lib/data/profile';
</script>

<footer class="border-t border-zinc-900 py-10 text-sm text-zinc-400">
	<Container>
		<div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
			<p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
			<p>
				<a class="hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">
					GitHub
				</a>
				<span class="mx-2">·</span>
				<a class="hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">
					LinkedIn
				</a>
			</p>
		</div>
	</Container>
</footer>
