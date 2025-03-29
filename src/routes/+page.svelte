<script lang="ts">
	import {
		DEFAULT_START,
		DIFFICULTY_VALUES,
		ELEMENT_GROUP_VALUE,
		ELEMENT_GROUPS,
		MAX_SKILLS,
		MIN_SCORE,
		MIN_SKILLS,
		SHORT_ROUTINE_DEDUCTION,
		type ElementGroup
	} from '$lib';

	let skills = $state<Array<{ name: string; element: ElementGroup; difficulty: number }>>([]);

	const scoreBreakdown = $derived.by(() => {
		let startValue = DEFAULT_START;

		const metElements = new Set<ElementGroup>();

		const validSkills = skills.filter((skill) => skill.element && skill.difficulty);
		const validSkillsCount = validSkills.length;

		let difficulty = 0;

		for (const skill of validSkills) {
			if (metElements.has(skill.element)) {
				startValue += skill.difficulty;
			} else {
				metElements.add(skill.element);
				startValue += skill.difficulty + ELEMENT_GROUP_VALUE;
			}

			difficulty += skill.difficulty;
		}

		if (validSkillsCount < MIN_SKILLS) {
			startValue -= SHORT_ROUTINE_DEDUCTION * (MIN_SKILLS - validSkillsCount);
		}

		startValue = Math.round((startValue + Number.EPSILON) * 100) / 100;
		difficulty = Math.round((difficulty + Number.EPSILON) * 100) / 100;
		const elementGroupValue =
			Math.round((metElements.size * ELEMENT_GROUP_VALUE + Number.EPSILON) * 100) / 100;

		if (startValue < MIN_SCORE) {
			return {
				startValue: MIN_SCORE,
				e: elementGroupValue,
				d: difficulty,
				numSkills: validSkillsCount
			};
		}

		return { startValue, e: elementGroupValue, d: difficulty, numSkills: validSkillsCount };
	});
</script>

<div>
	<div>
		<h3 class="text-lg font-medium sm:tracking-tight">Skills</h3>

		<div class="mt-3">
			{#if skills.length === 0}
				<p class="text-center text-sm text-gray-500">
					You haven't added any skills yet. Click the "Add skill" button to get started.
				</p>
			{/if}

			<div class="flex flex-col space-y-3">
				{#each skills as skill, i}
					<div class="flex items-center gap-2">
						<input
							type="text"
							class="flex-1 rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
							bind:value={skill.name}
						/>
						<select
							class="flex-1 rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
							bind:value={skill.element}
						>
							{#each ELEMENT_GROUPS as elementGroup}
								<option value={elementGroup}>{elementGroup}</option>
							{/each}
						</select>
						<select
							class="flex-1 rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
							bind:value={skill.difficulty}
						>
							{#each DIFFICULTY_VALUES as difficulty}
								<option value={difficulty.value}>{difficulty.label}</option>
							{/each}
						</select>
						<button
							class="ml-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
							onclick={() => skills.splice(i, 1)}
						>
							Remove
						</button>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-4 flex items-center justify-end">
			<button
				class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				onclick={() => (skills = [])}>Reset</button
			>
			<button
				class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-500"
				disabled={skills.length >= MAX_SKILLS}
				onclick={() => skills.push({ name: '', element: '', difficulty: 0 })}>Add skill</button
			>
		</div>
	</div>

	<div class="mt-4 border-t pt-4">
		<h3 class="text-lg font-medium sm:tracking-tight">Totals</h3>

		<p>Base start: {DEFAULT_START}</p>
		<p>Element group total: {scoreBreakdown.e}</p>
		<p>Difficulty total: {scoreBreakdown.d}</p>
		<p># Skills: {scoreBreakdown.numSkills}</p>
		<p class="font-semibold">Start Value: {scoreBreakdown.startValue}</p>
	</div>

	<div class="mt-4 border-t pt-4">
		<h3 class="text-lg font-medium sm:tracking-tight">Help</h3>

		<p>
			This is a tool to calculate gymnastics routine start values. It is based off the rules and
			scoring system for Illinois High School Association (IHSA) boys gymnastics.
		</p>

		<div class="mt-4">
			<p>Rule assumptions:</p>
			<ul class="list-inside list-disc">
				<li>Base routine start value is {DEFAULT_START}.</li>
				<li>Each event (minus vault) has {ELEMENT_GROUPS.length} element groups.</li>
				<li>Each element group is worth {ELEMENT_GROUP_VALUE}.</li>
				<li>The minimum number of skills required is {MIN_SKILLS}.</li>
				<li>The maximum number of skills is {MAX_SKILLS}.</li>
				<li>Skills are weighted by their difficulty (A-F).</li>
			</ul>
		</div>

		<div class="mt-4">
			<p>Future additions:</p>
			<ul class="list-inside list-disc">
				<li>Being able to download and save routes.</li>
				<li>Accounting for event bonuses.</li>
				<li>Skill difficulty lookup.</li>
				<li>Customizable rules and overrides.</li>
			</ul>
		</div>

		<div class="mt-4">
			<p class="italic">
				For help and feedback, please reach out at <a
					class="text-indigo-600 hover:underline"
					href="mailto:brockheriondev@gmail.com">brockheriondev@gmail.com</a
				>.
			</p>
		</div>
	</div>
</div>
