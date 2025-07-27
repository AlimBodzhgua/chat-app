import antfu from '@antfu/eslint-config'

export default antfu({
	jsonc: false,
	yaml: false,
	rules: {
		'style/no-tabs': 'off',
		'style/indent': ['off', 'tab'],
	},
	stylistic: {
		semi: true,
	},
});