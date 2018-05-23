import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/awesomestatistics.js',
  output: {
    file: 'awesomestatistics.js',
    format: 'umd',
    name: 'AwesomeStatistics'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    })
  ]
}

export default config
