import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'es'
    }
  ],
  plugins: [
    vue({
      // 将css注入到style标签中
      css: true,
      // 将template模板编译成render函数
      compileTemplate: true
    }),
    terser()
  ]
}