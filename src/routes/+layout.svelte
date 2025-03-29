<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Start Value Calculator</title>
	<meta
		name="description"
		content="This is a tool to calculate gymnastics routine start values for boys gymnastics."
	/>
	<meta name="author" content="Brock Herion" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<div class="flex flex-col py-8">
			<div class="md:flex md:items-center md:justify-between">
				<div class="min-w-0 flex-1">
					<h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
						Start Value Calculator
					</h2>
				</div>
				<div class="mt-4 flex md:mt-0 md:ml-4">
					<a
						href="https://github.com/BrockHerion/start-value-calculator"
						class="ml-inline-flex size-10 items-center p-2 text-black"
						aria-label="github"
						target="_blank"
						rel="noopener noreferrer"
						><span class="iconify simple-icons--github size-6"></span>
					</a>
					<a
						href="https://bsky.app/profile/brockherion.bsky.social"
						class="ml-inline-flex size-10 items-center p-2 text-black"
						aria-label="github"
						target="_blank"
						rel="noopener noreferrer"
						><span class="iconify simple-icons--bluesky size-6"></span>
					</a>
					<a
						href="https://buymeacoffee.com/brockherion"
						class="ml-inline-flex size-10 items-center p-2 text-black"
						aria-label="github"
						target="_blank"
						rel="noopener noreferrer"
						><span class="iconify simple-icons--buymeacoffee size-6"></span>
					</a>
				</div>
			</div>
			<div class="mt-8 flex flex-col">
				{@render children()}
			</div>
		</div>
		<div class="mt-8 flex flex-col">
			<small class="flex items-center justify-center gap-2 text-sm text-gray-500"
				>Built with ❤️ by <a class="hover:underline" target="_blank" href="https://brockherion.dev"
					>Brock Herion</a
				></small
			>
		</div>
	</div>
</div>
