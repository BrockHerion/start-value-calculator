<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

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
			<div class="mt-8">
				<small class="flex items-center justify-center gap-2 text-sm text-gray-500"
					>Built with ❤️ by Brock Herrion</small
				>
			</div>
		</div>
	</div>
</div>
