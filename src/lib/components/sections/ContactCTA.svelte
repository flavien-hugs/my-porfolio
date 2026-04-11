<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { lang } from '$lib/i18n.svelte';

	let input = $state('');
	let history = $state<{ cmd: string; result: string }[]>([
		{ 
			cmd: 'whoami', 
			result: lang.t('Backend Engineer specializing in Python & Infrastructure.', 'Ingénieur Backend spécialisé en Python & Infrastructure.') 
		}
	]);

	function handleCommand(e: KeyboardEvent) {
		if (e.key === 'Enter' && input.trim()) {
			const cmd = input.trim().toLowerCase();
			let result = '';

			if (cmd === 'contact') {
				result = `Email: ${profile.email}\nWhatsApp: ${profile.links.whatsapp}`;
			} else if (cmd === 'help') {
				result = 'Available commands: contact, clear, whoami, ping, linkedin';
			} else if (cmd === 'clear') {
				history = [];
				input = '';
				return;
			} else if (cmd === 'ping') {
				result = 'pong! (latency: 1ms)';
			} else if (cmd === 'linkedin') {
				window.open(profile.links.linkedin, '_blank');
				result = 'Opening LinkedIn profile...';
			} else {
				result = `command not found: ${cmd}`;
			}

			history = [...history, { cmd, result }];
			input = '';
		}
	}
</script>

<section class="py-24 border-t border-zinc-900/50">
	<div class="mb-14 text-center">
		<h2 class="text-4xl font-bold tracking-tight text-white uppercase">
			{lang.t('Ready to scale?', "Prêt à l'échelle ?")}
		</h2>
	</div>

	<div class="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
		<!-- Terminal Header -->
		<div class="flex items-center justify-between border-b border-zinc-900 bg-zinc-900/40 px-5 py-3">
			<div class="flex gap-2">
				<div class="h-3 w-3 rounded-full bg-zinc-800"></div>
				<div class="h-3 w-3 rounded-full bg-zinc-800"></div>
				<div class="h-3 w-3 rounded-full bg-zinc-800"></div>
			</div>
			<span class="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">zsh — contact</span>
		</div>

		<!-- Terminal Body -->
		<div class="h-64 overflow-y-auto p-6 font-mono text-sm leading-relaxed scrollbar-hide">
			{#each history as entry}
				<div class="mb-3">
					<div class="flex items-center gap-2">
						<span class="text-emerald-500/80">➜</span>
						<span class="text-zinc-500">~</span>
						<span class="text-white">{entry.cmd}</span>
					</div>
					<div class="mt-1 pl-6 text-zinc-500 whitespace-pre-wrap">{entry.result}</div>
				</div>
			{/each}

			<div class="flex items-center gap-2">
				<span class="text-emerald-500/80">➜</span>
				<span class="text-zinc-500">~</span>
				<input
					type="text"
					bind:value={input}
					onkeydown={handleCommand}
					placeholder={lang.t("type 'help' to start...", "tapez 'help' pour commencer...")}
					class="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-800"
					autofocus
				/>
			</div>
		</div>
	</div>

	<!-- Secondary options -->
	<div class="mt-10 flex justify-center gap-8">
		<a href={profile.links.whatsapp} class="font-mono text-[10px] text-zinc-700 hover:text-white transition-colors uppercase tracking-widest">
			[whatsapp://]
		</a>
		<a href={profile.links.linkedin} class="font-mono text-[10px] text-zinc-700 hover:text-white transition-colors uppercase tracking-widest">
			[linkedin://]
		</a>
	</div>
</section>
