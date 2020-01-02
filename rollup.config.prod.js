import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import {eslint} from 'rollup-plugin-eslint'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bin.min.js',
    format: 'umd',
    name: 'bin'
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    terser()
  ]
}