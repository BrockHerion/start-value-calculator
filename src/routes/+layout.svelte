<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { env } from '$env/dynamic/public';

	let { children } = $props();

	// Plausible is loaded only in production and only when the site's domain is configured,
	// so local dev and preview deploys without the env var send nothing.
	const plausibleDomain = env.PUBLIC_PLAUSIBLE_DOMAIN;
	const plausibleSrc = env.PUBLIC_PLAUSIBLE_SCRIPT_SRC || 'https://plausible.io/js/script.js';
</script>

<svelte:head>
	<title>Start Value Calculator</title>
	<meta
		name="description"
		content="This is a tool to calculate gymnastics routine start values for boys gymnastics."
	/>
	<meta name="author" content="Brock Herion" />
	{#if !dev && plausibleDomain}
		<script defer data-domain={plausibleDomain} src={plausibleSrc}></script>
	{/if}
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
			<div class="mt-4 flex items-center justify-center space-x-4">
				<a
					href="https://github.com/BrockHerion/start-value-calculator"
					class="ml-inline-flex size-6 items-center text-gray-500"
					aria-label="github"
					target="_blank"
					rel="noopener noreferrer"
					><span class="iconify simple-icons--github h-full w-full"></span>
				</a>
				<a
					href="https://bsky.app/profile/brockherion.bsky.social"
					class="ml-inline-flex size-6 items-center text-gray-500"
					aria-label="github"
					target="_blank"
					rel="noopener noreferrer"
					><span class="iconify simple-icons--bluesky h-full w-full"></span>
				</a>
				<a
					href="https://buymeacoffee.com/brockherion"
					class="ml-inline-flex size-6 items-center text-gray-500"
					aria-label="github"
					target="_blank"
					rel="noopener noreferrer"
					><span class="iconify simple-icons--buymeacoffee h-full w-full"></span>
				</a>
			</div>
		</div>
	</div>
</div>
