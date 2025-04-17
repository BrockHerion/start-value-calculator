export const MIN_SCORE = 1.0;
export const DEFAULT_START = 5.8;
export const SHORT_ROUTINE_DEDUCTION = 1.0;

export const MIN_SKILLS = 6;
export const MAX_SKILLS = 10;

export const ELEMENT_GROUPS = ['No EG', 'I', 'II', 'III', 'IIII'];
export type ElementGroup = (typeof ELEMENT_GROUPS)[number];

export const ELEMENT_GROUP_VALUE = 0.5;
export const DIFFICULTY_VALUES = [
	{
		label: 'A',
		value: 0.1
	},
	{
		label: 'B',
		value: 0.3
	},
	{
		label: 'C',
		value: 0.4
	},
	{
		label: 'D',
		value: 0.5
	},
	{
		label: 'E',
		value: 0.6
	},
	{
		label: 'F',
		value: 0.7
	}
];
