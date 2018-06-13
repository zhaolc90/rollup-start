import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'uilib',
			file: pkg.browser,
			format: 'umd',
			sourcemap: true
		},
		plugins: [
			resolve(),
			commonjs() 
		]
	}
];
