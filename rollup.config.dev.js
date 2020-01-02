// https://juejin.im/post/5dab0cc1e51d4524df35b7b4
// https://xiaogliu.github.io/2019/07/24/rollup-config/?utm_source=tuicool&utm_medium=referral

import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import {eslint} from 'rollup-plugin-eslint'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bin.js',
    format: 'umd',
    name: 'bin'
  },
  plugins: [
    json(),
    resolve(),  // 这样 Rollup 能找到 `ms`
    commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({
      exclude: 'node_modules/**',
    })
  ]
}