import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import less from 'rollup-plugin-less';
import babel from 'rollup-plugin-babel';

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
			less({
				output:"dist/style.css"
			}),
			babel(),
			resolve(),
			commonjs() 
		]
	}
];
